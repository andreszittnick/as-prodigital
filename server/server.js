import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// --- Mail (IONOS) ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.de",
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_PORT || "587") === "465",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

// API: Kontakt
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, companyName, email, phone, service, message, subject } = req.body;
  const text =
    `Neue Anfrage über as-prodigital.de\n\n` +
    `Name: ${firstName || ""} ${lastName || ""}\n` +
    `Firma: ${companyName || ""}\n` +
    `E-Mail: ${email || ""}\n` +
    `Telefon: ${phone || ""}\n` +
    `Service: ${service || ""}\n\n` +
    `Nachricht:\n${message || ""}\n`;

  try {
    await transporter.sendMail({
      from: `"AS ProDigital Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email || undefined,
      subject: subject || "Neue Kontaktanfrage",
      text,
    });
    console.log("✅ Mail versendet");
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Mail-Fehler:", err);
    res.status(500).json({ success: false });
  }
});

// --- STATIC: dist/public ausliefern ---
const publicDir = path.resolve(__dirname, "../dist/public");
app.use(express.static(publicDir));
// SPA-Fallback (wichtig, sonst "Cannot GET /")
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
