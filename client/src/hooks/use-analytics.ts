import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const VISITOR_KEY = "asp_visitor_id";
const SESSION_KEY = "asp_session_id";

function generateUUID(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = generateUUID();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = generateUUID();
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
    // Send as Blob with Content-Type so express.json() can parse it
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    if (navigator.sendBeacon(url, blob)) return;
  } catch {
    // Fall through to fetch fallback
  }
  // Fallback: keepalive fetch (works in most browsers when sendBeacon fails)
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    keepalive: true,
  }).catch(() => {});
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

  useEffect(() => {
    initSession();
  }, []);

  useEffect(() => {
    const currentPage = location;
    const prevPage = prevPageRef.current;
    prevPageRef.current = currentPage;

    // Capture time on previous page before resetting the timer
    const prevPageDuration = Math.round((Date.now() - pageStartTime) / 1000);
    const prevScrollDepth = lastScrollDepth;

    // Reset page timer and scroll depth for new page
    pageStartTime = Date.now();
    lastScrollDepth = 0;

    // Send exit event for previous page on SPA navigation
    if (prevPage !== null && prevPage !== currentPage && currentSessionId) {
      post("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "exit",
        page: prevPage,
        timeOnPage: prevPageDuration,
        scrollDepth: prevScrollDepth,
      });
    }

    // Scroll depth tracking - always attach; tracker checks currentSessionId lazily
    const milestones = [25, 50, 75, 100];
    const reported = new Set<number>();
    const scrollHandler = () => {
      if (!currentSessionId) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      for (const milestone of milestones) {
        if (pct >= milestone && !reported.has(milestone)) {
          reported.add(milestone);
          lastScrollDepth = milestone;
          post("/api/analytics/event", {
            sessionId: currentSessionId,
            eventType: "scroll",
            page: currentPage,
            scrollDepth: milestone,
          });
        }
      }
    };

    // Unload beacon - always attach; fires when user closes tab or navigates away
    const handleUnload = () => {
      if (!currentSessionId) return;
      const duration = Math.round((Date.now() - pageStartTime) / 1000);
      sendBeacon("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "exit",
        page: currentPage,
        timeOnPage: duration,
        scrollDepth: lastScrollDepth,
      });
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("beforeunload", handleUnload);

    // Track pageview - delayed if session hasn't finished initializing yet
    let pageviewTimer: ReturnType<typeof setTimeout> | null = null;
    const trackPageview = () => {
      if (!currentSessionId) return;
      post("/api/analytics/event", {
        sessionId: currentSessionId,
        eventType: "pageview",
        page: currentPage,
        timeOnPage: 0,
      });
    };

    if (sessionReady) {
      trackPageview();
    } else {
      pageviewTimer = setTimeout(trackPageview, 1000);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("beforeunload", handleUnload);
      if (pageviewTimer !== null) clearTimeout(pageviewTimer);
    };
  }, [location]);
}
