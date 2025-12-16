import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email};
}

async function getResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail
  };
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
  try {
    const { client, fromEmail } = await getResendClient();
    
    const htmlContent = `
      <h2>Neue Kontaktanfrage von ${inquiry.firstName} ${inquiry.lastName}</h2>
      <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
      ${inquiry.companyName ? `<p><strong>Firma:</strong> ${inquiry.companyName}</p>` : ''}
      <p><strong>E-Mail:</strong> ${inquiry.email}</p>
      ${inquiry.phone ? `<p><strong>Telefon:</strong> ${inquiry.phone}</p>` : ''}
      <p><strong>Gewünschter Service:</strong> ${inquiry.service}</p>
      ${inquiry.message ? `<p><strong>Nachricht:</strong><br/>${inquiry.message}</p>` : ''}
    `;

    const result = await client.emails.send({
      from: fromEmail || 'AS ProDigital <onboarding@resend.dev>',
      to: 'info@as-prodigital.de',
      subject: `Neue Kontaktanfrage: ${inquiry.service} - ${inquiry.firstName} ${inquiry.lastName}`,
      html: htmlContent,
      replyTo: inquiry.email
    });

    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}