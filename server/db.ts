import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

let _db: ReturnType<typeof drizzle> | null = null;
let _pool: InstanceType<typeof Pool> | null = null;

export function getDb() {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    _pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
    _db = drizzle(_pool, { schema });
  }
  return _db;
}

export function hasDatabaseUrl(): boolean {
  return !!process.env.DATABASE_URL;
}

/**
 * Creates the analytics tables if they do not already exist.
 * Called once at server startup to ensure the schema is provisioned
 * without requiring a manual db:push step.
 */
export async function ensureAnalyticsTables(): Promise<void> {
  if (!process.env.DATABASE_URL) return;
  try {
    const db = getDb();
    // Use raw pool for DDL statements
    const pool = _pool!;
    await pool.query(`
      CREATE TABLE IF NOT EXISTS analytics_sessions (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id TEXT NOT NULL UNIQUE,
        visitor_id TEXT NOT NULL,
        is_returning BOOLEAN NOT NULL DEFAULT false,
        entry_page TEXT NOT NULL,
        device TEXT NOT NULL,
        referrer_source TEXT NOT NULL,
        started_at TIMESTAMP DEFAULT NOW() NOT NULL,
        last_activity TIMESTAMP DEFAULT NOW() NOT NULL,
        page_count INTEGER NOT NULL DEFAULT 1,
        duration INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS analytics_events (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id TEXT NOT NULL,
        event_type TEXT NOT NULL,
        page TEXT NOT NULL,
        element TEXT,
        scroll_depth INTEGER,
        time_on_page INTEGER,
        timestamp TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    void db; // ensure getDb() was called to init the pool
  } catch (err) {
    console.warn("[db] ensureAnalyticsTables failed (non-fatal):", err);
  }
}
