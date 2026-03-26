import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { Lock, Download, Users, Eye, MousePointer, Clock, Monitor, Smartphone, Tablet, TrendingUp, ArrowRight, RefreshCw } from "lucide-react";

const API_PASSWORD_KEY = "asp_dashboard_pw";

interface AnalyticsSummary {
  totalVisitors: number;
  newVisitors: number;
  returningVisitors: number;
  totalPageViews: number;
  totalCtaClicks: number;
  avgDuration: number;
  deviceBreakdown: { desktop: number; tablet: number; mobile: number };
  referrerBreakdown: { direct: number; google: number; social: number; other: number };
}

interface DailyStat {
  date: string;
  visitors: number;
  newVisitors: number;
  returningVisitors: number;
  pageViews: number;
  ctaClicks: number;
}

interface PageStat {
  page: string;
  views: number;
  entries: number;
  exits: number;
  avgDuration: number;
  avgScrollDepth: number;
}

interface CtaStat {
  element: string;
  clicks: number;
  page: string;
}

interface FlowStep {
  from: string;
  to: string;
  count: number;
}

function formatSeconds(s: number): string {
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}m ${sec}s`;
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
}

type DateRange = "today" | "7" | "30" | "custom";

function isValidDate(s: string): boolean {
  if (!s || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s);
  return !isNaN(d.getTime());
}

function getDateParams(range: DateRange, customFrom: string, customTo: string): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const fmt = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = fmt(now);

  if (range === "today") return `from=${today}&to=${today}`;
  if (range === "7") {
    const from = new Date(now);
    from.setDate(from.getDate() - 6);
    return `from=${fmt(from)}&to=${today}`;
  }
  if (range === "30") {
    const from = new Date(now);
    from.setDate(from.getDate() - 29);
    return `from=${fmt(from)}&to=${today}`;
  }
  // custom: validate both dates; fall back to last 30 days on invalid input
  if (isValidDate(customFrom) && isValidDate(customTo) && customFrom <= customTo) {
    return `from=${customFrom}&to=${customTo}`;
  }
  const fallback = new Date(now);
  fallback.setDate(fallback.getDate() - 29);
  return `from=${fmt(fallback)}&to=${today}`;
}

type PageSortKey = "views" | "entries" | "exits" | "avgDuration" | "avgScrollDepth";

export default function Analytics() {
  const [password, setPassword] = useState(() => sessionStorage.getItem(API_PASSWORD_KEY) || "");
  const [inputPw, setInputPw] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!sessionStorage.getItem(API_PASSWORD_KEY));
  const [dateRange, setDateRange] = useState<DateRange>("30");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [pageSort, setPageSort] = useState<PageSortKey>("views");
  const [pageSortDir, setPageSortDir] = useState<"desc" | "asc">("desc");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const dateParams = getDateParams(dateRange, customFrom, customTo);
  const headers = { "x-analytics-password": password };

  const { data: summary } = useQuery<AnalyticsSummary>({
    queryKey: ["/api/analytics/summary", dateParams, password],
    queryFn: () => fetch(`/api/analytics/summary?${dateParams}`, { headers }).then(r => {
      if (r.status === 401) throw new Error("Unauthorized");
      return r.json();
    }),
    enabled: isLoggedIn,
    retry: false,
  });

  const { data: daily } = useQuery<DailyStat[]>({
    queryKey: ["/api/analytics/daily", dateParams, password],
    queryFn: () => fetch(`/api/analytics/daily?${dateParams}`, { headers }).then(r => r.json()),
    enabled: isLoggedIn,
    retry: false,
  });

  const { data: pages } = useQuery<PageStat[]>({
    queryKey: ["/api/analytics/pages", dateParams, password],
    queryFn: () => fetch(`/api/analytics/pages?${dateParams}`, { headers }).then(r => r.json()),
    enabled: isLoggedIn,
    retry: false,
  });

  const { data: cta } = useQuery<CtaStat[]>({
    queryKey: ["/api/analytics/cta", dateParams, password],
    queryFn: () => fetch(`/api/analytics/cta?${dateParams}`, { headers }).then(r => r.json()),
    enabled: isLoggedIn,
    retry: false,
  });

  const { data: flows } = useQuery<FlowStep[]>({
    queryKey: ["/api/analytics/flows", dateParams, password],
    queryFn: () => fetch(`/api/analytics/flows?${dateParams}`, { headers }).then(r => r.json()),
    enabled: isLoggedIn,
    retry: false,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/analytics/summary?from=2020-01-01&to=2020-01-01`, {
      headers: { "x-analytics-password": inputPw }
    });
    if (res.status === 401) {
      setLoginError(true);
      return;
    }
    setPassword(inputPw);
    sessionStorage.setItem(API_PASSWORD_KEY, inputPw);
    setIsLoggedIn(true);
    setLoginError(false);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: ["/api/analytics/summary"] });
    await queryClient.invalidateQueries({ queryKey: ["/api/analytics/daily"] });
    await queryClient.invalidateQueries({ queryKey: ["/api/analytics/pages"] });
    await queryClient.invalidateQueries({ queryKey: ["/api/analytics/cta"] });
    await queryClient.invalidateQueries({ queryKey: ["/api/analytics/flows"] });
    setIsRefreshing(false);
  };

  const handleExportPDF = async () => {
    const jspdfModule = await import("jspdf");
    const jsPDF = jspdfModule.jsPDF ?? jspdfModule.default;
    const autoTableModule = await import("jspdf-autotable");
    const autoTableFn = autoTableModule.default ?? autoTableModule;

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = doc.internal.pageSize.getWidth();
    const BLUE = [25, 36, 59] as [number, number, number];
    const ORANGE = [250, 82, 25] as [number, number, number];
    const LGRAY = [245, 247, 250] as [number, number, number];
    const rangeLbl = dateRange === "today" ? "Heute" : dateRange === "7" ? "Letzte 7 Tage" : dateRange === "30" ? "Letzte 30 Tage" : `${customFrom} – ${customTo}`;
    const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
    const autoTable = (opts: object) => autoTableFn(doc, opts);
    let y = 0;

    // ── Header bar ──────────────────────────────────────────────────────────
    doc.setFillColor(...BLUE);
    doc.rect(0, 0, W, 24, "F");
    doc.setFillColor(...ORANGE);
    doc.rect(0, 22, W, 2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("AS ProDigital", 12, 10);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("Analytics Report", 12, 17);
    doc.setFontSize(9);
    doc.text(`Zeitraum: ${rangeLbl}`, W / 2, 10, { align: "center" });
    doc.text(`Erstellt: ${today}`, W - 12, 10, { align: "right" });
    doc.text("as-prodigital.de", W - 12, 17, { align: "right" });

    y = 32;

    // ── Section: KPI Übersicht ───────────────────────────────────────────────
    doc.setTextColor(...BLUE);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Kennzahlen im Überblick", 12, y);
    y += 6;

    const kpis = [
      { label: "Besucher gesamt", value: String(summary?.totalVisitors ?? 0) },
      { label: "Neue Besucher", value: String(summary?.newVisitors ?? 0) },
      { label: "Wiederkehrend", value: String(summary?.returningVisitors ?? 0) },
      { label: "Seitenaufrufe", value: String(summary?.totalPageViews ?? 0) },
      { label: "CTA-Klicks", value: String(summary?.totalCtaClicks ?? 0) },
      { label: "Ø Verweildauer", value: summary ? formatSeconds(summary.avgDuration) : "0s" },
    ];

    const kpiW = (W - 24) / 3;
    kpis.forEach((k, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const bx = 12 + col * kpiW;
      const by = y + row * 18;
      doc.setFillColor(...LGRAY);
      doc.roundedRect(bx, by, kpiW - 4, 14, 2, 2, "F");
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(k.label, bx + 4, by + 5);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...BLUE);
      doc.text(k.value, bx + 4, by + 12);
    });

    y += 42;

    // ── Section: Gerät & Herkunft ────────────────────────────────────────────
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...BLUE);
    doc.text("Gerät & Herkunft", 12, y);
    y += 5;

    const db = summary?.deviceBreakdown ?? { desktop: 0, tablet: 0, mobile: 0 };
    const rb = summary?.referrerBreakdown ?? { direct: 0, google: 0, social: 0, other: 0 };
    const totalD = (db.desktop + db.tablet + db.mobile) || 1;
    const totalR = (rb.direct + rb.google + rb.social + rb.other) || 1;

    autoTable({
      startY: y,
      margin: { left: 12, right: 12 },
      tableWidth: (W - 24) / 2 - 3,
      head: [["Gerät", "Besucher", "Anteil"]],
      body: [
        ["Desktop", db.desktop, `${Math.round(db.desktop / totalD * 100)}%`],
        ["Tablet", db.tablet, `${Math.round(db.tablet / totalD * 100)}%`],
        ["Mobil", db.mobile, `${Math.round(db.mobile / totalD * 100)}%`],
      ],
      headStyles: { fillColor: BLUE, textColor: 255, fontSize: 8, fontStyle: "bold" },
      bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
      alternateRowStyles: { fillColor: LGRAY },
      columnStyles: { 1: { halign: "center" }, 2: { halign: "center" } },
      theme: "grid",
    });

    const deviceEndY = (doc as any).lastAutoTable.finalY;

    autoTable({
      startY: y,
      margin: { left: W / 2 + 3, right: 12 },
      tableWidth: (W - 24) / 2 - 3,
      head: [["Herkunft", "Besucher", "Anteil"]],
      body: [
        ["Direkt", rb.direct, `${Math.round(rb.direct / totalR * 100)}%`],
        ["Google", rb.google, `${Math.round(rb.google / totalR * 100)}%`],
        ["Social", rb.social, `${Math.round(rb.social / totalR * 100)}%`],
        ["Sonstige", rb.other, `${Math.round(rb.other / totalR * 100)}%`],
      ],
      headStyles: { fillColor: BLUE, textColor: 255, fontSize: 8, fontStyle: "bold" },
      bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
      alternateRowStyles: { fillColor: LGRAY },
      columnStyles: { 1: { halign: "center" }, 2: { halign: "center" } },
      theme: "grid",
    });

    y = Math.max(deviceEndY, (doc as any).lastAutoTable.finalY) + 8;

    // ── Section: Seiten ──────────────────────────────────────────────────────
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...BLUE);
    doc.text("Seiten-Performance", 12, y);
    y += 4;

    const sortedPages = [...(pages ?? [])].sort((a, b) => b.views - a.views);
    autoTable({
      startY: y,
      margin: { left: 12, right: 12 },
      head: [["Seite", "Aufrufe", "Einstiege", "Absprünge", "Ø Zeit", "Ø Scroll"]],
      body: sortedPages.map(p => [
        p.page,
        p.views,
        p.entries,
        p.exits,
        p.avgDuration > 0 ? formatSeconds(p.avgDuration) : "–",
        p.avgScrollDepth > 0 ? `${p.avgScrollDepth}%` : "–",
      ]),
      headStyles: { fillColor: BLUE, textColor: 255, fontSize: 8, fontStyle: "bold" },
      bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
      alternateRowStyles: { fillColor: LGRAY },
      columnStyles: {
        0: { cellWidth: 55 },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
      },
      theme: "grid",
    });

    y = (doc as any).lastAutoTable.finalY + 8;

    // ── Section: CTA-Klicks ──────────────────────────────────────────────────
    if ((cta ?? []).length > 0) {
      if (y > 220) { doc.addPage(); y = 20; }
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...BLUE);
      doc.text("CTA-Klicks Ranking", 12, y);
      y += 4;

      autoTable({
        startY: y,
        margin: { left: 12, right: 12 },
        head: [["Rang", "CTA-Element", "Seite", "Klicks"]],
        body: (cta ?? []).map((c, i) => [i + 1, c.element, c.page, c.clicks]),
        headStyles: { fillColor: ORANGE, textColor: 255, fontSize: 8, fontStyle: "bold" },
        bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
        alternateRowStyles: { fillColor: LGRAY },
        columnStyles: {
          0: { halign: "center", cellWidth: 12 },
          3: { halign: "center", cellWidth: 18 },
        },
        theme: "grid",
      });

      y = (doc as any).lastAutoTable.finalY + 8;
    }

    // ── Section: Häufige Wege ────────────────────────────────────────────────
    if ((flows ?? []).length > 0) {
      if (y > 220) { doc.addPage(); y = 20; }
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...BLUE);
      doc.text("Häufige Nutzerwege", 12, y);
      y += 4;

      autoTable({
        startY: y,
        margin: { left: 12, right: 12 },
        head: [["Rang", "Von", "Nach", "Häufigkeit"]],
        body: (flows ?? []).map((f, i) => [i + 1, f.from, f.to, `${f.count}×`]),
        headStyles: { fillColor: BLUE, textColor: 255, fontSize: 8, fontStyle: "bold" },
        bodyStyles: { fontSize: 8, textColor: [40, 40, 40] },
        alternateRowStyles: { fillColor: LGRAY },
        columnStyles: {
          0: { halign: "center", cellWidth: 12 },
          3: { halign: "center", cellWidth: 22 },
        },
        theme: "grid",
      });
    }

    // ── Footer on every page ─────────────────────────────────────────────────
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let p = 1; p <= pageCount; p++) {
      doc.setPage(p);
      doc.setFillColor(...BLUE);
      doc.rect(0, 287, W, 10, "F");
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(255, 255, 255);
      doc.text("AS ProDigital – Vertraulicher Analytics Report", 12, 293);
      doc.text(`Seite ${p} von ${pageCount}`, W - 12, 293, { align: "right" });
    }

    doc.save(`as-prodigital-analytics-${new Date().toISOString().split("T")[0]}.pdf`);
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Analytics Login</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center" style={{ background: "#19243b" }}>
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#fa5219" }}>
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
              <p className="text-slate-500 text-sm mt-1">AS ProDigital Dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Passwort"
                value={inputPw}
                onChange={e => { setInputPw(e.target.value); setLoginError(false); }}
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition ${loginError ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-orange-200"}`}
              />
              {loginError && <p className="text-red-500 text-xs">Falsches Passwort</p>}
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold text-sm transition hover:opacity-90"
                style={{ background: "#fa5219" }}
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const deviceTotal = summary ? (summary.deviceBreakdown.desktop + summary.deviceBreakdown.tablet + summary.deviceBreakdown.mobile) || 1 : 1;
  const refTotal = summary ? (summary.referrerBreakdown.direct + summary.referrerBreakdown.google + summary.referrerBreakdown.social + summary.referrerBreakdown.other) || 1 : 1;

  const rangeLbl = dateRange === "today" ? "Heute" : dateRange === "7" ? "Letzte 7 Tage" : dateRange === "30" ? "Letzte 30 Tage" : "Eigener Zeitraum";

  return (
    <>
      <Helmet>
        <title>Analytics – AS ProDigital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ background: "#f0f2f5", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ background: "#19243b" }} className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl">AS ProDigital Analytics</h1>
            <p className="text-slate-400 text-xs mt-0.5">{rangeLbl}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportPDF}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition hover:opacity-80"
              style={{ background: "#fa5219" }}
            >
              <Download className="w-4 h-4" />
              PDF exportieren
            </button>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-700 text-white transition hover:bg-slate-600 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
              Aktualisieren
            </button>
            <button
              onClick={() => { sessionStorage.removeItem(API_PASSWORD_KEY); setIsLoggedIn(false); setPassword(""); }}
              className="text-slate-400 text-xs hover:text-white transition"
            >
              Abmelden
            </button>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="px-6 py-4 flex items-center gap-3 flex-wrap">
          {([["today", "Heute"], ["7", "7 Tage"], ["30", "30 Tage"], ["custom", "Eigener Zeitraum"]] as [DateRange, string][]).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setDateRange(val)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${dateRange === val ? "text-white border-transparent" : "text-slate-600 bg-white border-slate-200 hover:border-orange-300"}`}
              style={dateRange === val ? { background: "#fa5219", borderColor: "#fa5219" } : {}}
            >
              {label}
            </button>
          ))}
          {dateRange === "custom" && (
            <div className="flex items-center gap-2">
              <input type="date" value={customFrom} onChange={e => setCustomFrom(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white" />
              <span className="text-slate-400 text-sm">bis</span>
              <input type="date" value={customTo} onChange={e => setCustomTo(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white" />
            </div>
          )}
        </div>

        <div ref={dashboardRef} className="px-6 pb-8 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <KpiCard icon={<Users className="w-5 h-5" />} label="Besucher gesamt" value={summary?.totalVisitors ?? 0} color="#19243b" />
            <KpiCard icon={<TrendingUp className="w-5 h-5" />} label="Neue Besucher" value={summary?.newVisitors ?? 0} color="#fa5219" />
            <KpiCard icon={<Users className="w-5 h-5" />} label="Wiederkehrend" value={summary?.returningVisitors ?? 0} color="#2563eb" />
            <KpiCard icon={<Eye className="w-5 h-5" />} label="Seitenaufrufe" value={summary?.totalPageViews ?? 0} color="#16a34a" />
            <KpiCard icon={<MousePointer className="w-5 h-5" />} label="CTA-Klicks" value={summary?.totalCtaClicks ?? 0} color="#9333ea" />
          </div>

          {/* Secondary KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-slate-500 text-sm">Ø Verweildauer</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{formatSeconds(summary?.avgDuration ?? 0)}</p>
            </div>

            {/* Device Breakdown */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-500 text-sm mb-3 font-medium">Gerät</p>
              <div className="space-y-2">
                <DeviceBar icon={<Monitor className="w-4 h-4" />} label="Desktop" value={summary?.deviceBreakdown.desktop ?? 0} total={deviceTotal} color="#19243b" />
                <DeviceBar icon={<Tablet className="w-4 h-4" />} label="Tablet" value={summary?.deviceBreakdown.tablet ?? 0} total={deviceTotal} color="#fa5219" />
                <DeviceBar icon={<Smartphone className="w-4 h-4" />} label="Mobil" value={summary?.deviceBreakdown.mobile ?? 0} total={deviceTotal} color="#2563eb" />
              </div>
            </div>

            {/* Referrer Breakdown */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-500 text-sm mb-3 font-medium">Herkunft</p>
              <div className="space-y-2">
                <DeviceBar icon={null} label="Direct" value={summary?.referrerBreakdown.direct ?? 0} total={refTotal} color="#19243b" />
                <DeviceBar icon={null} label="Google" value={summary?.referrerBreakdown.google ?? 0} total={refTotal} color="#fa5219" />
                <DeviceBar icon={null} label="Social" value={summary?.referrerBreakdown.social ?? 0} total={refTotal} color="#2563eb" />
                <DeviceBar icon={null} label="Sonstige" value={summary?.referrerBreakdown.other ?? 0} total={refTotal} color="#9333ea" />
              </div>
            </div>
          </div>

          {/* Daily Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-slate-900 font-semibold mb-4">
              Besucherverlauf –{" "}
              {dateRange === "today" ? "Heute" : dateRange === "7" ? "Letzte 7 Tage" : dateRange === "30" ? "Letzte 30 Tage" : `${customFrom} bis ${customTo}`}
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={daily ?? []} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" tickFormatter={formatDate} tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} allowDecimals={false} />
                <Tooltip
                  formatter={(val: number, name: string) => [val, name]}
                  labelFormatter={(label) => new Date(label).toLocaleDateString("de-DE")}
                  contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="visitors" name="Besucher gesamt" stroke="#19243b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="newVisitors" name="Neue Besucher" stroke="#fa5219" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pages + CTA + Flows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Pages Table */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-slate-900 font-semibold mb-4">Seiten</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400 border-b border-slate-100">
                      <th className="pb-2 font-medium">Seite</th>
                      {(["views", "entries", "exits", "avgDuration", "avgScrollDepth"] as PageSortKey[]).map(key => {
                        const labels: Record<PageSortKey, string> = { views: "Aufrufe", entries: "Einstiege", exits: "Absprünge", avgDuration: "Ø Zeit", avgScrollDepth: "Scroll" };
                        const active = pageSort === key;
                        return (
                          <th
                            key={key}
                            className="pb-2 font-medium text-right cursor-pointer hover:text-slate-700 select-none"
                            onClick={() => {
                              if (pageSort === key) setPageSortDir(d => d === "desc" ? "asc" : "desc");
                              else { setPageSort(key); setPageSortDir("desc"); }
                            }}
                          >
                            {labels[key]}{active ? (pageSortDir === "desc" ? " ↓" : " ↑") : ""}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {[...(pages ?? [])]
                      .sort((a, b) => pageSortDir === "desc" ? b[pageSort] - a[pageSort] : a[pageSort] - b[pageSort])
                      .map((p: PageStat, i: number) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                          <td className="py-2 text-slate-700 truncate max-w-[120px]" title={p.page}>{p.page}</td>
                          <td className="py-2 text-right text-slate-900 font-medium">{p.views}</td>
                          <td className="py-2 text-right text-slate-500">{p.entries}</td>
                          <td className="py-2 text-right text-slate-500">{p.exits}</td>
                          <td className="py-2 text-right text-slate-500">{p.avgDuration > 0 ? formatSeconds(p.avgDuration) : "-"}</td>
                          <td className="py-2 text-right text-slate-500">{p.avgScrollDepth > 0 ? `${p.avgScrollDepth}%` : "-"}</td>
                        </tr>
                      ))}
                    {(!pages || pages.length === 0) && (
                      <tr><td colSpan={6} className="py-8 text-center text-slate-400 text-sm">Noch keine Daten</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              {/* CTA Clicks */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-slate-900 font-semibold mb-4">CTA-Klicks</h2>
                {(cta ?? []).length === 0 ? (
                  <p className="text-slate-400 text-sm text-center py-4">Noch keine Daten</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="text-left text-slate-500 font-medium pb-2 pr-4">#</th>
                          <th className="text-left text-slate-500 font-medium pb-2 pr-4">Button / Link</th>
                          <th className="text-left text-slate-500 font-medium pb-2 pr-4">Seite</th>
                          <th className="text-right text-slate-500 font-medium pb-2">Klicks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(cta ?? []).map((c: CtaStat, i: number) => (
                          <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition">
                            <td className="py-2.5 pr-4 text-slate-400 text-xs">{i + 1}</td>
                            <td className="py-2.5 pr-4 font-medium text-slate-800">{c.element}</td>
                            <td className="py-2.5 pr-4 text-slate-500 text-xs">{c.page}</td>
                            <td className="py-2.5 text-right">
                              <span className="inline-block font-bold text-sm px-2.5 py-0.5 rounded-full" style={{ background: "#fff3ee", color: "#fa5219" }}>{c.clicks}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* User Flows */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-slate-900 font-semibold mb-4">Häufige Wege</h2>
                <div className="space-y-2">
                  {(flows ?? []).map((f: FlowStep, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-slate-500 w-5 text-right text-xs">{i + 1}.</span>
                      <span className="text-slate-700 truncate max-w-[100px]" title={f.from}>{f.from}</span>
                      <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
                      <span className="text-slate-700 truncate max-w-[100px]" title={f.to}>{f.to}</span>
                      <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#fff3ee", color: "#fa5219" }}>{f.count}×</span>
                    </div>
                  ))}
                  {(!flows || flows.length === 0) && (
                    <p className="text-slate-400 text-sm text-center py-4">Noch keine Daten</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function KpiCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color }}>{icon}</span>
        <span className="text-slate-500 text-xs">{label}</span>
      </div>
      <p className="text-3xl font-bold text-slate-900">{value.toLocaleString("de-DE")}</p>
    </div>
  );
}

function DeviceBar({ icon, label, value, total, color }: { icon: React.ReactNode | null; label: string; value: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon && <span className="text-slate-400 w-4">{icon}</span>}
      <span className="text-slate-600 w-16">{label}</span>
      <div className="flex-1 bg-slate-100 rounded-full h-2">
        <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-slate-500 text-xs w-10 text-right">{pct}%</span>
      <span className="text-slate-400 text-xs w-6 text-right">{value}</span>
    </div>
  );
}
