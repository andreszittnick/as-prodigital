// Email service using Resend - works on both Replit and Render.com
import { Resend } from 'resend';

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendContactNotification(inquiry: {
  firstName: string;
  lastName: string;
  companyName?: string | null;
  email: string;
  phone?: string | null;
  service: string;
  message?: string | null;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.error('RESEND_API_KEY not configured - email not sent');
    return null;
  }

  try {
    const htmlContent = `
      <h2>Neue Kontaktanfrage von ${inquiry.firstName} ${inquiry.lastName}</h2>
      <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
      ${inquiry.companyName ? `<p><strong>Firma:</strong> ${inquiry.companyName}</p>` : ''}
      <p><strong>E-Mail:</strong> ${inquiry.email}</p>
      ${inquiry.phone ? `<p><strong>Telefon:</strong> ${inquiry.phone}</p>` : ''}
      <p><strong>Gewünschter Service:</strong> ${inquiry.service}</p>
      ${inquiry.message ? `<p><strong>Nachricht:</strong><br/>${inquiry.message.replace(/\n/g, '<br/>')}</p>` : ''}
    `;

    const subject = `Neue Kontaktanfrage: ${inquiry.service} - ${inquiry.firstName} ${inquiry.lastName}`;

    const result = await resend.emails.send({
      from: 'AS-ProDigital <onboarding@resend.dev>',
      to: 'info@as-prodigital.de',
      replyTo: inquiry.email,
      subject: subject,
      html: htmlContent,
    });

    console.log('Email sent successfully via Resend:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
