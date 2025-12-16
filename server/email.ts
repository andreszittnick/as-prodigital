// Gmail Integration for sending contact form notifications
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  if (!hostname) {
    throw new Error('REPLIT_CONNECTORS_HOSTNAME not set - Gmail integration not available');
  }

  const response = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );
  
  const data = await response.json();
  console.log('Gmail connection response:', JSON.stringify(data, null, 2));
  
  connectionSettings = data.items?.[0];

  if (!connectionSettings) {
    throw new Error('Gmail not connected - please connect Gmail in the Replit integrations panel');
  }

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!accessToken) {
    throw new Error('Gmail access token not found');
  }
  return accessToken;
}

async function getGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

function createEmail(to: string, subject: string, htmlContent: string, replyTo: string): string {
  const emailLines = [
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    '',
    htmlContent
  ];
  
  const email = emailLines.join('\r\n');
  return Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
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
    const gmail = await getGmailClient();
    
    const htmlContent = `
      <h2>Neue Kontaktanfrage von ${inquiry.firstName} ${inquiry.lastName}</h2>
      <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
      ${inquiry.companyName ? `<p><strong>Firma:</strong> ${inquiry.companyName}</p>` : ''}
      <p><strong>E-Mail:</strong> ${inquiry.email}</p>
      ${inquiry.phone ? `<p><strong>Telefon:</strong> ${inquiry.phone}</p>` : ''}
      <p><strong>Gewünschter Service:</strong> ${inquiry.service}</p>
      ${inquiry.message ? `<p><strong>Nachricht:</strong><br/>${inquiry.message}</p>` : ''}
    `;

    const subject = `Neue Kontaktanfrage: ${inquiry.service} - ${inquiry.firstName} ${inquiry.lastName}`;
    const rawEmail = createEmail('info@as-prodigital.de', subject, htmlContent, inquiry.email);

    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: rawEmail
      }
    });

    console.log('Email sent successfully via Gmail:', result.data);
    return result.data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
