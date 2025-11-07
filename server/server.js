// server/server.js
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

/* -------------------- MAIL (IONOS) -------------------- */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.de",
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_PORT || "587") === "465", // nur bei 465 true
  auth: {
    user: process.env.SMTP_USER, // z.B. info@as-prodigital.de
    pass: process.env.SMTP_PASS,
  },
});

/* -------------------- API: Kontakt -------------------- */
app.post("/api/contact", async (req, res) => {
  try {
    const b = req.body || {};
    const pick = (...xs) => xs.find(v => typeof v === "string" && v.trim()) || "";

    // Eingaben flexibel abfangen (verschiedene Formularnamen)
    const firstName = pick(b.firstName, b.vorname, b.name);
    const lastName  = pick(b.lastName, b.nachname);
    const fullName  = [firstName, lastName].filter(Boolean).join(" ") || pick(b.fullname, b.kontaktname);
    const company   = pick(b.companyName, b.firma, b.unternehmen);
    const email     = pick(b.email, b.mail);
    const phone     = pick(b.phone, b.telefon, b.tel);
    const service   = pick(b.service, b.option, b.interesse);
    const subject   = pick(b.subject, b.betreff) || "Neue Kontaktanfrage";
    const message   = pick(b.message, b.nachricht, b.msg, b.text, b.beschreibung, b.inhalt);

    if (!message) return res.status(400).json({ success: false, error: "message fehlt" });

    const text =
      `Neue Anfrage über as-prodigital.de\n\n` +
      `Name: ${fullName || ""}\n` +
      `Firma: ${company || ""}\n` +
      `E-Mail: ${email || ""}\n` +
      `Telefon: ${phone || ""}\n` +
      `Service: ${service || ""}\n\n` +
      `Nachricht:\n${message || ""}\n`;

    await transporter.sendMail({
      from: `"AS ProDigital Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email || undefined,
      subject,
      text,
    });

    console.log("✅ Mail versendet von", req.get("referer") || "unbekannt");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Mail-Fehler:", err);
    return res.status(500).json({ success: false, error: "MAIL_FAILED" });
  }
});

/* -------------------- STATIC: Frontend -------------------- */
/** Vite-Build liegt je nach Setup in dist/public ODER dist.
 *  Wir prüfen beides und nehmen, was existiert.
 */
const candidateDirs = [
  path.resolve(__dirname, "../dist/public"),
  path.resolve(__dirname, "../dist"),
];

let publicDir = candidateDirs.find((p) => fs.existsSync(p));
if (!publicDir) {
  // Fallback: Projektwurzel (nur zur Sicherheit)
  publicDir = path.resolve(__dirname, "../dist");
}
console.log("📁 Serving static from:", publicDir);

app.use(express.static(publicDir));

/** SPA-Fallback: immer index.html zurückgeben,
 *  NACH den statischen Dateien registrieren.
 */
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

/* -------------------- START -------------------- */
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
