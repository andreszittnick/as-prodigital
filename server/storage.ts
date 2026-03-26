import {
  type User, type InsertUser,
  type ContactInquiry, type InsertContactInquiry,
  type AnalyticsSession, type InsertAnalyticsSession,
  type AnalyticsEvent, type InsertAnalyticsEvent,
  users, contactInquiries, analyticsSessions, analyticsEvents,
} from "@shared/schema";
import { randomUUID } from "crypto";
import { eq, and, gte, lte, sql as drizzleSql, desc } from "drizzle-orm";
import { getDb, hasDatabaseUrl } from "./db";

export interface DailyStat {
  date: string;
  visitors: number;
  newVisitors: number;
  returningVisitors: number;
  pageViews: number;
  ctaClicks: number;
}

export interface PageStat {
  page: string;
  views: number;
  entries: number;
  exits: number;
  avgDuration: number;
  avgScrollDepth: number;
}

export interface CtaStat {
  element: string;
  clicks: number;
  page: string;
}

export interface FlowStep {
  from: string;
  to: string;
  count: number;
}

export interface AnalyticsSummary {
  totalVisitors: number;
  newVisitors: number;
  returningVisitors: number;
  totalPageViews: number;
  totalCtaClicks: number;
  avgDuration: number;
  deviceBreakdown: { desktop: number; tablet: number; mobile: number };
  referrerBreakdown: { direct: number; google: number; social: number; other: number };
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  createAnalyticsSession(session: InsertAnalyticsSession): Promise<AnalyticsSession>;
  updateAnalyticsSession(sessionId: string, updates: Partial<AnalyticsSession>): Promise<void>;
  getAnalyticsSession(sessionId: string): Promise<AnalyticsSession | undefined>;
  createAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
  getAnalyticsSummary(from: Date, to: Date): Promise<AnalyticsSummary>;
  getDailyStats(from: Date, to: Date): Promise<DailyStat[]>;
  getPageStats(from: Date, to: Date): Promise<PageStat[]>;
  getCtaStats(from: Date, to: Date): Promise<CtaStat[]>;
  getUserFlows(from: Date, to: Date): Promise<FlowStep[]>;
  clearAnalyticsData(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private analyticsSessions: Map<string, AnalyticsSession>;
  private analyticsEvents: AnalyticsEvent[];

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.analyticsSessions = new Map();
    this.analyticsEvents = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createAnalyticsSession(insertSession: InsertAnalyticsSession): Promise<AnalyticsSession> {
    const id = randomUUID();
    const session: AnalyticsSession = {
      ...insertSession,
      id,
      startedAt: new Date(),
      lastActivity: new Date(),
    };
    this.analyticsSessions.set(insertSession.sessionId, session);
    return session;
  }

  async updateAnalyticsSession(sessionId: string, updates: Partial<AnalyticsSession>): Promise<void> {
    const session = this.analyticsSessions.get(sessionId);
    if (session) {
      this.analyticsSessions.set(sessionId, { ...session, ...updates, lastActivity: new Date() });
    }
  }

  async getAnalyticsSession(sessionId: string): Promise<AnalyticsSession | undefined> {
    return this.analyticsSessions.get(sessionId);
  }

  async createAnalyticsEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const id = randomUUID();
    const event: AnalyticsEvent = {
      ...insertEvent,
      id,
      element: insertEvent.element ?? null,
      scrollDepth: insertEvent.scrollDepth ?? null,
      timeOnPage: insertEvent.timeOnPage ?? null,
      timestamp: new Date(),
    };
    this.analyticsEvents.push(event);
    return event;
  }

  private getSessionsInRange(from: Date, to: Date): AnalyticsSession[] {
    return Array.from(this.analyticsSessions.values()).filter(
      s => s.startedAt >= from && s.startedAt <= to
    );
  }

  private getEventsInRange(from: Date, to: Date): AnalyticsEvent[] {
    return this.analyticsEvents.filter(
      e => e.timestamp >= from && e.timestamp <= to
    );
  }

  async getAnalyticsSummary(from: Date, to: Date): Promise<AnalyticsSummary> {
    const sessions = this.getSessionsInRange(from, to);
    const events = this.getEventsInRange(from, to);

    const totalVisitors = sessions.length;
    const newVisitors = sessions.filter(s => !s.isReturning).length;
    const returningVisitors = sessions.filter(s => s.isReturning).length;
    const totalPageViews = events.filter(e => e.eventType === 'pageview').length;
    const totalCtaClicks = events.filter(e => e.eventType === 'cta_click').length;
    const avgDuration = sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length)
      : 0;

    const deviceBreakdown = {
      desktop: sessions.filter(s => s.device === 'desktop').length,
      tablet: sessions.filter(s => s.device === 'tablet').length,
      mobile: sessions.filter(s => s.device === 'mobile').length,
    };

    const referrerBreakdown = {
      direct: sessions.filter(s => s.referrerSource === 'direct').length,
      google: sessions.filter(s => s.referrerSource === 'google').length,
      social: sessions.filter(s => s.referrerSource === 'social').length,
      other: sessions.filter(s => s.referrerSource === 'other').length,
    };

    return { totalVisitors, newVisitors, returningVisitors, totalPageViews, totalCtaClicks, avgDuration, deviceBreakdown, referrerBreakdown };
  }

  async getDailyStats(from: Date, to: Date): Promise<DailyStat[]> {
    const sessions = this.getSessionsInRange(from, to);
    const events = this.getEventsInRange(from, to);

    const dateMap = new Map<string, DailyStat>();

    const getDate = (d: Date) => d.toISOString().split('T')[0];

    for (const s of sessions) {
      const date = getDate(s.startedAt);
      if (!dateMap.has(date)) {
        dateMap.set(date, { date, visitors: 0, newVisitors: 0, returningVisitors: 0, pageViews: 0, ctaClicks: 0 });
      }
      const stat = dateMap.get(date)!;
      stat.visitors++;
      if (s.isReturning) stat.returningVisitors++; else stat.newVisitors++;
    }

    for (const e of events) {
      const date = getDate(e.timestamp);
      if (!dateMap.has(date)) {
        dateMap.set(date, { date, visitors: 0, newVisitors: 0, returningVisitors: 0, pageViews: 0, ctaClicks: 0 });
      }
      const stat = dateMap.get(date)!;
      if (e.eventType === 'pageview') stat.pageViews++;
      if (e.eventType === 'cta_click') stat.ctaClicks++;
    }

    return Array.from(dateMap.values()).sort((a, b) => a.date.localeCompare(b.date));
  }

  async getPageStats(from: Date, to: Date): Promise<PageStat[]> {
    const sessions = this.getSessionsInRange(from, to);
    const events = this.getEventsInRange(from, to);

    const pageMap = new Map<string, { views: number; entries: number; exits: number; durations: number[]; scrollDepths: number[] }>();

    const ensure = (page: string) => {
      if (!pageMap.has(page)) pageMap.set(page, { views: 0, entries: 0, exits: 0, durations: [], scrollDepths: [] });
      return pageMap.get(page)!;
    };

    for (const e of events.filter(e => e.eventType === 'pageview')) {
      ensure(e.page).views++;
    }

    for (const s of sessions) {
      ensure(s.entryPage).entries++;
    }

    for (const e of events.filter(e => e.eventType === 'exit')) {
      const p = ensure(e.page);
      p.exits++;
      if (e.timeOnPage !== null && e.timeOnPage > 0) p.durations.push(e.timeOnPage);
    }

    // Scroll depth: take max scroll depth per session per page, then average those
    const scrollBySessionPage = new Map<string, number>();
    for (const e of events.filter(e => e.eventType === 'scroll' && e.scrollDepth !== null)) {
      const key = `${e.sessionId}::${e.page}`;
      const cur = scrollBySessionPage.get(key) ?? 0;
      if ((e.scrollDepth ?? 0) > cur) scrollBySessionPage.set(key, e.scrollDepth!);
    }
    for (const [key, depth] of scrollBySessionPage) {
      const page = key.split('::')[1];
      ensure(page).scrollDepths.push(depth);
    }

    return Array.from(pageMap.entries()).map(([page, data]) => ({
      page,
      views: data.views,
      entries: data.entries,
      exits: data.exits,
      avgDuration: data.durations.length > 0 ? Math.round(data.durations.reduce((a, b) => a + b, 0) / data.durations.length) : 0,
      avgScrollDepth: data.scrollDepths.length > 0 ? Math.round(data.scrollDepths.reduce((a, b) => a + b, 0) / data.scrollDepths.length) : 0,
    })).sort((a, b) => b.views - a.views);
  }

  async getCtaStats(from: Date, to: Date): Promise<CtaStat[]> {
    const events = this.getEventsInRange(from, to);
    const ctaEvents = events.filter(e => e.eventType === 'cta_click' && e.element);

    const ctaMap = new Map<string, { clicks: number; page: string }>();
    for (const e of ctaEvents) {
      const key = `${e.element}__${e.page}`;
      if (!ctaMap.has(key)) {
        ctaMap.set(key, { clicks: 0, page: e.page });
      }
      ctaMap.get(key)!.clicks++;
    }

    return Array.from(ctaMap.entries()).map(([key, data]) => ({
      element: key.split('__')[0],
      clicks: data.clicks,
      page: data.page,
    })).sort((a, b) => b.clicks - a.clicks);
  }

  async getUserFlows(from: Date, to: Date): Promise<FlowStep[]> {
    const sessions = this.getSessionsInRange(from, to);
    const events = this.getEventsInRange(from, to);

    const flowMap = new Map<string, number>();

    for (const session of sessions) {
      const sessionEvents = events
        .filter(e => e.sessionId === session.sessionId && (e.eventType === 'pageview' || e.eventType === 'cta_click'))
        .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

      for (let i = 0; i < sessionEvents.length - 1; i++) {
        const ev = sessionEvents[i];
        const nextEv = sessionEvents[i + 1];
        // Skip if both are CTA clicks (only track page→page or page→cta transitions)
        if (ev.eventType === 'cta_click') continue;
        const fromNode = ev.page;
        const toNode = nextEv.eventType === 'cta_click'
          ? `cta:${nextEv.element || 'unknown'}`
          : nextEv.page;
        const key = `${fromNode} → ${toNode}`;
        flowMap.set(key, (flowMap.get(key) || 0) + 1);
      }
    }

    return Array.from(flowMap.entries())
      .map(([key, count]) => {
        const parts = key.split(' → ');
        return { from: parts[0], to: parts[1], count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }

  async clearAnalyticsData(): Promise<void> {
    this.analyticsSessions.clear();
    this.analyticsEvents = [];
  }
}

export class DbStorage implements IStorage {
  private get db() { return getDb(); }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const result = await this.db.insert(contactInquiries).values(insertInquiry).returning();
    return result[0];
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return this.db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
  }

  async createAnalyticsSession(insertSession: InsertAnalyticsSession): Promise<AnalyticsSession> {
    const result = await this.db.insert(analyticsSessions).values(insertSession).returning();
    return result[0];
  }

  async updateAnalyticsSession(sessionId: string, updates: Partial<AnalyticsSession>): Promise<void> {
    await this.db.update(analyticsSessions)
      .set({ ...updates, lastActivity: new Date() })
      .where(eq(analyticsSessions.sessionId, sessionId));
  }

  async getAnalyticsSession(sessionId: string): Promise<AnalyticsSession | undefined> {
    const result = await this.db.select().from(analyticsSessions).where(eq(analyticsSessions.sessionId, sessionId));
    return result[0];
  }

  async createAnalyticsEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const result = await this.db.insert(analyticsEvents).values(insertEvent).returning();
    return result[0];
  }

  async getAnalyticsSummary(from: Date, to: Date): Promise<AnalyticsSummary> {
    const sessions = await this.db.select().from(analyticsSessions)
      .where(and(gte(analyticsSessions.startedAt, from), lte(analyticsSessions.startedAt, to)));

    const eventsResult = await this.db.select().from(analyticsEvents)
      .where(and(gte(analyticsEvents.timestamp, from), lte(analyticsEvents.timestamp, to)));

    const totalVisitors = sessions.length;
    const newVisitors = sessions.filter(s => !s.isReturning).length;
    const returningVisitors = sessions.filter(s => s.isReturning).length;
    const totalPageViews = eventsResult.filter(e => e.eventType === 'pageview').length;
    const totalCtaClicks = eventsResult.filter(e => e.eventType === 'cta_click').length;
    const avgDuration = sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length)
      : 0;

    const deviceBreakdown = {
      desktop: sessions.filter(s => s.device === 'desktop').length,
      tablet: sessions.filter(s => s.device === 'tablet').length,
      mobile: sessions.filter(s => s.device === 'mobile').length,
    };
    const referrerBreakdown = {
      direct: sessions.filter(s => s.referrerSource === 'direct').length,
      google: sessions.filter(s => s.referrerSource === 'google').length,
      social: sessions.filter(s => s.referrerSource === 'social').length,
      other: sessions.filter(s => s.referrerSource === 'other').length,
    };

    return { totalVisitors, newVisitors, returningVisitors, totalPageViews, totalCtaClicks, avgDuration, deviceBreakdown, referrerBreakdown };
  }

  async getDailyStats(from: Date, to: Date): Promise<DailyStat[]> {
    const sessions = await this.db.select().from(analyticsSessions)
      .where(and(gte(analyticsSessions.startedAt, from), lte(analyticsSessions.startedAt, to)));
    const eventsResult = await this.db.select().from(analyticsEvents)
      .where(and(gte(analyticsEvents.timestamp, from), lte(analyticsEvents.timestamp, to)));

    const dateMap = new Map<string, DailyStat>();
    const getDate = (d: Date) => new Date(d).toISOString().split('T')[0];

    for (const s of sessions) {
      const date = getDate(s.startedAt);
      if (!dateMap.has(date)) dateMap.set(date, { date, visitors: 0, newVisitors: 0, returningVisitors: 0, pageViews: 0, ctaClicks: 0 });
      const stat = dateMap.get(date)!;
      stat.visitors++;
      if (s.isReturning) stat.returningVisitors++; else stat.newVisitors++;
    }
    for (const e of eventsResult) {
      const date = getDate(e.timestamp);
      if (!dateMap.has(date)) dateMap.set(date, { date, visitors: 0, newVisitors: 0, returningVisitors: 0, pageViews: 0, ctaClicks: 0 });
      const stat = dateMap.get(date)!;
      if (e.eventType === 'pageview') stat.pageViews++;
      if (e.eventType === 'cta_click') stat.ctaClicks++;
    }

    return Array.from(dateMap.values()).sort((a, b) => a.date.localeCompare(b.date));
  }

  async getPageStats(from: Date, to: Date): Promise<PageStat[]> {
    const sessions = await this.db.select().from(analyticsSessions)
      .where(and(gte(analyticsSessions.startedAt, from), lte(analyticsSessions.startedAt, to)));
    const eventsResult = await this.db.select().from(analyticsEvents)
      .where(and(gte(analyticsEvents.timestamp, from), lte(analyticsEvents.timestamp, to)));

    const pageMap = new Map<string, { views: number; entries: number; exits: number; durations: number[]; scrollDepths: number[] }>();

    const ensure = (page: string) => {
      if (!pageMap.has(page)) pageMap.set(page, { views: 0, entries: 0, exits: 0, durations: [], scrollDepths: [] });
      return pageMap.get(page)!;
    };

    for (const e of eventsResult.filter(e => e.eventType === 'pageview')) {
      ensure(e.page).views++;
    }
    for (const s of sessions) {
      ensure(s.entryPage).entries++;
    }
    for (const e of eventsResult.filter(e => e.eventType === 'exit')) {
      const p = ensure(e.page);
      p.exits++;
      if (e.timeOnPage !== null && e.timeOnPage > 0) p.durations.push(e.timeOnPage);
    }

    // Scroll depth: take max scroll depth per session per page, then average those
    const scrollBySessionPage = new Map<string, number>();
    for (const e of eventsResult.filter(e => e.eventType === 'scroll' && e.scrollDepth !== null)) {
      const key = `${e.sessionId}::${e.page}`;
      const cur = scrollBySessionPage.get(key) ?? 0;
      if ((e.scrollDepth ?? 0) > cur) scrollBySessionPage.set(key, e.scrollDepth!);
    }
    for (const [key, depth] of scrollBySessionPage) {
      const page = key.split('::')[1];
      ensure(page).scrollDepths.push(depth);
    }

    return Array.from(pageMap.entries()).map(([page, data]) => ({
      page,
      views: data.views,
      entries: data.entries,
      exits: data.exits,
      avgDuration: data.durations.length > 0 ? Math.round(data.durations.reduce((a, b) => a + b, 0) / data.durations.length) : 0,
      avgScrollDepth: data.scrollDepths.length > 0 ? Math.round(data.scrollDepths.reduce((a, b) => a + b, 0) / data.scrollDepths.length) : 0,
    })).sort((a, b) => b.views - a.views);
  }

  async getCtaStats(from: Date, to: Date): Promise<CtaStat[]> {
    const eventsResult = await this.db.select().from(analyticsEvents)
      .where(and(gte(analyticsEvents.timestamp, from), lte(analyticsEvents.timestamp, to)));

    const ctaMap = new Map<string, { clicks: number; page: string }>();
    for (const e of eventsResult.filter(e => e.eventType === 'cta_click' && e.element)) {
      const key = `${e.element}__${e.page}`;
      if (!ctaMap.has(key)) ctaMap.set(key, { clicks: 0, page: e.page });
      ctaMap.get(key)!.clicks++;
    }

    return Array.from(ctaMap.entries()).map(([key, data]) => ({
      element: key.split('__')[0],
      clicks: data.clicks,
      page: data.page,
    })).sort((a, b) => b.clicks - a.clicks);
  }

  async getUserFlows(from: Date, to: Date): Promise<FlowStep[]> {
    const sessions = await this.db.select().from(analyticsSessions)
      .where(and(gte(analyticsSessions.startedAt, from), lte(analyticsSessions.startedAt, to)));
    const eventsResult = await this.db.select().from(analyticsEvents)
      .where(and(gte(analyticsEvents.timestamp, from), lte(analyticsEvents.timestamp, to)));

    const flowMap = new Map<string, number>();
    for (const session of sessions) {
      const sessionEvents = eventsResult
        .filter(e => e.sessionId === session.sessionId && (e.eventType === 'pageview' || e.eventType === 'cta_click'))
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

      for (let i = 0; i < sessionEvents.length - 1; i++) {
        const ev = sessionEvents[i];
        const nextEv = sessionEvents[i + 1];
        if (ev.eventType === 'cta_click') continue;
        const fromNode = ev.page;
        const toNode = nextEv.eventType === 'cta_click'
          ? `cta:${nextEv.element || 'unknown'}`
          : nextEv.page;
        const key = `${fromNode} → ${toNode}`;
        flowMap.set(key, (flowMap.get(key) || 0) + 1);
      }
    }

    return Array.from(flowMap.entries())
      .map(([key, count]) => {
        const parts = key.split(' → ');
        return { from: parts[0], to: parts[1], count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }

  async clearAnalyticsData(): Promise<void> {
    await this.db.delete(analyticsEvents);
    await this.db.delete(analyticsSessions);
  }
}

export const storage: IStorage = hasDatabaseUrl() ? new DbStorage() : new MemStorage();
