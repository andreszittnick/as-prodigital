import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const VISITOR_KEY = "asp_visitor_id";
const SESSION_KEY = "asp_session_id";

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = generateId();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = generateId();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function getDevice(): string {
  const w = window.innerWidth;
  if (w >= 1024) return "desktop";
  if (w >= 768) return "tablet";
  return "mobile";
}

function getReferrerSource(): string {
  const ref = document.referrer;
  if (!ref) return "direct";
  try {
    const url = new URL(ref);
    const host = url.hostname.toLowerCase();
    if (host.includes("google") || host.includes("bing") || host.includes("yahoo") || host.includes("duckduckgo")) return "google";
    if (host.includes("facebook") || host.includes("instagram") || host.includes("linkedin") || host.includes("twitter") || host.includes("tiktok")) return "social";
    return "other";
  } catch {
    return "direct";
  }
}

async function post(url: string, data: object): Promise<void> {
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // Silent fail
  }
}

function sendBeacon(url: string, data: object): void {
  try {
    navigator.sendBeacon(url, JSON.stringify(data));
  } catch {
    // Silent fail
  }
}

let sessionInitialized = false;
let sessionReady = false;
let currentSessionId = "";
let pageStartTime = Date.now();
let lastScrollDepth = 0;

async function initSession(): Promise<void> {
  if (sessionInitialized) return;
  sessionInitialized = true;

  const visitorId = getVisitorId();
  currentSessionId = getSessionId();

  const isReturning = !!localStorage.getItem(VISITOR_KEY + "_seen");
  localStorage.setItem(VISITOR_KEY + "_seen", "1");

  await post("/api/analytics/session", {
    sessionId: currentSessionId,
    visitorId,
    isReturning,
    entryPage: window.location.pathname,
    device: getDevice(),
    referrerSource: getReferrerSource(),
    pageCount: 0,
    duration: 0,
  });

  sessionReady = true;
}

export function trackClick(element: string, page?: string): void {
  if (!currentSessionId) return;
  post("/api/analytics/event", {
    sessionId: currentSessionId,
    eventType: "cta_click",
    page: page || window.location.pathname,
    element,
  });
}

export function useAnalytics(): void {
  const [location] = useLocation();
  const prevPageRef = useRef<string | null>(null);
  const scrollCleanupRef = useRef<(() => void) | null>(null);
  const unloadCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    initSession();
  }, []);

  useEffect(() => {
    // Clean up previous page's listeners
    if (scrollCleanupRef.current) {
      scrollCleanupRef.current();
      scrollCleanupRef.current = null;
    }
    if (unloadCleanupRef.current) {
      unloadCleanupRef.current();
      unloadCleanupRef.current = null;
    }

    // Send exit event for previous page
    if (prevPageRef.current && currentSessionId) {
      const timeOnPrev = Math.round((Date.now() - pageStartTime) / 1000);
      post("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "exit",
        page: prevPageRef.current,
        timeOnPage: timeOnPrev,
        scrollDepth: lastScrollDepth,
      });
    }

    pageStartTime = Date.now();
    lastScrollDepth = 0;
    prevPageRef.current = location;

    // Delay tracking until session is ready
    const trackPage = () => {
      if (!currentSessionId) return;

      post("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "pageview",
        page: location,
        timeOnPage: 0,
      });

      // Update session page count
      post("/api/analytics/session", {
        sessionId: currentSessionId,
        visitorId: localStorage.getItem(VISITOR_KEY) || "",
        isReturning: !!localStorage.getItem(VISITOR_KEY + "_seen"),
        entryPage: location,
        device: getDevice(),
        referrerSource: getReferrerSource(),
        pageCount: 1,
        duration: 0,
      });
    };

    if (sessionReady) {
      trackPage();
    } else {
      const timer = setTimeout(trackPage, 800);
      return () => clearTimeout(timer);
    }

    // Scroll depth tracking
    const milestones = [25, 50, 75, 100];
    const reported = new Set<number>();
    const scrollHandler = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      for (const milestone of milestones) {
        if (pct >= milestone && !reported.has(milestone) && currentSessionId) {
          reported.add(milestone);
          lastScrollDepth = milestone;
          post("/api/analytics/event", {
            sessionId: currentSessionId,
            eventType: "scroll",
            page: location,
            scrollDepth: milestone,
          });
        }
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    scrollCleanupRef.current = () => window.removeEventListener("scroll", scrollHandler);

    // Unload beacon
    const handleUnload = () => {
      if (!currentSessionId) return;
      const duration = Math.round((Date.now() - pageStartTime) / 1000);
      sendBeacon("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "exit",
        page: location,
        timeOnPage: duration,
        scrollDepth: lastScrollDepth,
      });
    };
    window.addEventListener("beforeunload", handleUnload);
    unloadCleanupRef.current = () => window.removeEventListener("beforeunload", handleUnload);

    return () => {
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
        scrollCleanupRef.current = null;
      }
      if (unloadCleanupRef.current) {
        unloadCleanupRef.current();
        unloadCleanupRef.current = null;
      }
    };
  }, [location]);
}
