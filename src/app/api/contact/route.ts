import { sendContactMail } from "@/lib/mailer";
import { siteConfig } from "@/data/siteConfig";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { fullName: 100, email: 200, subject: 200, message: 5000 };

// Basic per-IP rate limit (best-effort; resets on server restart / per instance)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (str(body.website)) {
    return Response.json({ ok: true });
  }

  const fullName = str(body.fullName);
  const email = str(body.email);
  const subject = str(body.subject);
  const message = str(body.message);
  const category = siteConfig.contactFormCategories.includes(str(body.category))
    ? str(body.category)
    : "Other";

  if (!fullName || !email || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (
    fullName.length > LIMITS.fullName ||
    email.length > LIMITS.email ||
    subject.length > LIMITS.subject ||
    message.length > LIMITS.message
  ) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  try {
    await sendContactMail({ fullName, email, category, subject, message });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] failed to send mail:", err);
    return Response.json(
      { error: "Couldn't send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
