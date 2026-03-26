import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";
import { storage } from "./storage";
import { insertContactInquirySchema, insertAnalyticsSessionSchema, insertAnalyticsEventSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactNotification } from "./email";

function checkAnalyticsAuth(req: express.Request, res: express.Response): boolean {
  const password = process.env.ANALYTICS_PASSWORD;
  if (!password) {
    // In development, allow access without a password
    if (process.env.NODE_ENV === "development") return true;
    res.status(401).json({ success: false, message: "Analytics password not configured" });
    return false;
  }
  const provided = req.headers['x-analytics-password'] || req.query.password;
  if (provided !== password) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return false;
  }
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {

  app.use('/HTML_NEU', express.static(path.join(process.cwd(), 'HTML_NEU')));

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);

      try {
        await sendContactNotification(validatedData);
        console.log("Email notification sent for inquiry:", inquiry.id);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }

      res.json({
        success: true,
        message: "Vielen Dank für Ihre Nachricht! Ich melde mich bald bei Ihnen.",
        id: inquiry.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form for errors",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Sorry, there was an error sending your message. Please try again."
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Analytics tracking endpoints (public - no auth needed to receive data)
  app.post("/api/analytics/session", async (req, res) => {
    try {
      const data = insertAnalyticsSessionSchema.parse(req.body);
      const existing = await storage.getAnalyticsSession(data.sessionId);
      if (existing) {
        res.json({ success: true, session: existing });
        return;
      }
      const session = await storage.createAnalyticsSession(data);
      res.json({ success: true, session });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Analytics session error:", error);
        res.status(500).json({ success: false });
      }
    }
  });

  app.post("/api/analytics/event", async (req, res) => {
    try {
      const data = insertAnalyticsEventSchema.parse(req.body);
      const event = await storage.createAnalyticsEvent(data);

      // Update session page count and duration
      if (data.eventType === 'pageview') {
        const session = await storage.getAnalyticsSession(data.sessionId);
        if (session) {
          await storage.updateAnalyticsSession(data.sessionId, {
            pageCount: session.pageCount + 1,
          });
        }
      }
      if (data.eventType === 'exit' && data.timeOnPage) {
        const session = await storage.getAnalyticsSession(data.sessionId);
        if (session) {
          await storage.updateAnalyticsSession(data.sessionId, {
            duration: session.duration + (data.timeOnPage || 0),
          });
        }
      }

      res.json({ success: true, event });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Analytics event error:", error);
        res.status(500).json({ success: false });
      }
    }
  });

  // Analytics dashboard data endpoints (password protected)
  app.get("/api/analytics/summary", async (req, res) => {
    if (!checkAnalyticsAuth(req, res)) return;
    try {
      const { from, to } = getDateRange(req);
      const summary = await storage.getAnalyticsSummary(from, to);
      res.json(summary);
    } catch (error) {
      console.error("Analytics summary error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/analytics/daily", async (req, res) => {
    if (!checkAnalyticsAuth(req, res)) return;
    try {
      const { from, to } = getDateRange(req);
      const stats = await storage.getDailyStats(from, to);
      res.json(stats);
    } catch (error) {
      console.error("Analytics daily error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/analytics/pages", async (req, res) => {
    if (!checkAnalyticsAuth(req, res)) return;
    try {
      const { from, to } = getDateRange(req);
      const stats = await storage.getPageStats(from, to);
      res.json(stats);
    } catch (error) {
      console.error("Analytics pages error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/analytics/cta", async (req, res) => {
    if (!checkAnalyticsAuth(req, res)) return;
    try {
      const { from, to } = getDateRange(req);
      const stats = await storage.getCtaStats(from, to);
      res.json(stats);
    } catch (error) {
      console.error("Analytics CTA error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/analytics/flows", async (req, res) => {
    if (!checkAnalyticsAuth(req, res)) return;
    try {
      const { from, to } = getDateRange(req);
      const flows = await storage.getUserFlows(from, to);
      res.json(flows);
    } catch (error) {
      console.error("Analytics flows error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function getDateRange(req: express.Request): { from: Date; to: Date } {
  const now = new Date();
  const to = req.query.to ? new Date(req.query.to as string) : now;
  const defaultFrom = new Date(now);
  defaultFrom.setDate(defaultFrom.getDate() - 30);
  const from = req.query.from ? new Date(req.query.from as string) : defaultFrom;
  to.setHours(23, 59, 59, 999);
  return { from, to };
}
