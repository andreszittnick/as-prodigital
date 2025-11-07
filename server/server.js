import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Mail-Konfiguration (IONOS)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.de",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "info@as-prodigital.de",
    pass: process.env.SMTP_PASS, // dein IONOS-Mailpasswort (kommt gleich als Env)
  },
});

// 🔹 Route für alle Kontaktformulare
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  try {
    await transporter.sendMail({
      from: `"AS ProDigital Kontaktformular" <info@as-prodigital.de>`,
      to: "info@as-prodigital.de",
      replyTo: email,
      subject: subject || "Neue Anfrage über as-prodigital.de",
      text: `Neue Anfrage:\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Fehler beim Senden:", err);
    res.status(500).json({ success: false });
  }
});

// 🔹 Statische Dateien (falls du z. B. „public“-Ordner hast)
app.use(express.static("public"));

app.listen(3000, () => console.log("📨 Mailserver läuft auf Port 3000"));
