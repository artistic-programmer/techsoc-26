import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP mailer used by the /connect contact form.
 * Configure via environment variables (see .env.example).
 */

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Mailer is not configured: set SMTP_HOST, SMTP_USER and SMTP_PASS");
  }

  const port = Number(SMTP_PORT) || 465;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function sendContactMail(msg: ContactMessage) {
  const to = process.env.CONTACT_TO || "tech-society@iiit-bh.ac.in";
  const from = process.env.MAIL_FROM || `TechSoc Website <${process.env.SMTP_USER}>`;
  const subject = `[${msg.category}] ${msg.subject || "New message"} — ${msg.fullName}`;

  const text = [
    `Name: ${msg.fullName}`,
    `Email: ${msg.email}`,
    `Category: ${msg.category}`,
    `Subject: ${msg.subject || "-"}`,
    "",
    msg.message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:14px;color:#121212">
      <h2 style="margin:0 0 12px">New message from techsoc /connect</h2>
      <table cellpadding="4" style="border-collapse:collapse">
        <tr><td><b>Name</b></td><td>${escapeHtml(msg.fullName)}</td></tr>
        <tr><td><b>Email</b></td><td><a href="mailto:${escapeHtml(msg.email)}">${escapeHtml(msg.email)}</a></td></tr>
        <tr><td><b>Category</b></td><td>${escapeHtml(msg.category)}</td></tr>
        <tr><td><b>Subject</b></td><td>${escapeHtml(msg.subject || "-")}</td></tr>
      </table>
      <hr style="margin:16px 0" />
      <div style="white-space:pre-wrap">${escapeHtml(msg.message)}</div>
    </div>`;

  await getTransporter().sendMail({
    from,
    to,
    replyTo: `${msg.fullName} <${msg.email}>`,
    subject,
    text,
    html,
  });
}
