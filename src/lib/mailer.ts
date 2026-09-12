import nodemailer from 'nodemailer';

export function getTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      : undefined
  });
}

export async function sendContactEmail(params: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const officeEmail = process.env.OFFICE_EMAIL;
  if (!officeEmail) {
    throw new Error('OFFICE_EMAIL is not configured');
  }

  const transport = getTransport();

  await transport.sendMail({
    from: process.env.MAIL_FROM || `"UEDS Website" <no-reply@ueds.org>`,
    to: officeEmail,
    replyTo: params.email,
    subject: `[Website Contact] ${params.subject || 'New message from website'}`,
    text: `Name: ${params.name}\nEmail: ${params.email}\nPhone: ${params.phone || '-'}\n\nMessage:\n${params.message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(params.phone || '-')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(params.message).replace(/\n/g, '<br/>')}</p>
    `
  });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
