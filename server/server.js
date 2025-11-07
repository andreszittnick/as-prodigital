import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port für Render
const PORT = process.env.PORT || 3000;

// Nodemailer-Transport (IONOS)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.de",
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_PORT || "587") === "465", // true nur bei 465
  auth: {
    user: process.env.SMTP_USER, // z.B. info@as-prodigital.de
    pass: process.env.SMTP_PASS,
  },
});

// Ein Endpunkt für ALLE Kontaktformulare
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
    return res.status(200).json({ success: true, message: "OK" });
  } catch (err) {
    console.error("❌ Mail-Fehler:", err);
    return res.status(500).json({ success: false, error: "MAIL_FAILED" });
  }
});

// (optional) statische Dateien
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
