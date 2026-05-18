import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── Required env vars (set in .env.local) ────────────────────────────────────
//   SMTP_HOST       e.g. smtp.gmail.com | smtp.office365.com | mail.yourdomain.com
//   SMTP_PORT       e.g. 587 (STARTTLS) | 465 (SSL)
//   SMTP_SECURE     "true" for port 465, "false" for 587
//   SMTP_USER       your SMTP login (usually your email address)
//   SMTP_PASS       your SMTP password or app-specific password
//   CONTACT_EMAIL   where submissions are delivered (e.g. contact@mawrid.sa)
//   FROM_EMAIL      display sender (e.g. "Mawrid Site <noreply@mawrid.sa>")
// ─────────────────────────────────────────────────────────────────────────────

interface FormBody {
  type: string
  name: string
  company?: string
  contact?: string
  city?: string
  message?: string
}

function subject(b: FormBody): string {
  const labels: Record<string, string> = {
    investor: `Investor Deck Request — ${b.name}${b.company ? ` · ${b.company}` : ''}`,
    restaurant: `Early Access — ${b.name} · ${b.company ?? ''} (${b.city ?? ''})`,
    supplier: `Supplier Sign-Up — ${b.name} · ${b.company ?? ''}`,
    partner: `Partnership Enquiry — ${b.name} · ${b.company ?? ''}`,
  }
  return labels[b.type] ?? `Mawrid Form Submission — ${b.type}`
}

function buildHtml(b: FormBody): string {
  const rows: [string, string][] = [
    ['Form', b.type],
    ['Name', b.name],
    ...(b.company ? [['Company / Fund', b.company] as [string, string]] : []),
    ...(b.contact ? [['Contact', b.contact] as [string, string]] : []),
    ...(b.city ? [['City', b.city] as [string, string]] : []),
  ]

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:8px 14px;background:#f6f5f1;font-size:12px;font-weight:600;color:#5a6a7d;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;border-bottom:1px solid #e2dfd9">${k}</td>
          <td style="padding:8px 14px;font-size:13px;color:#0c1e35;border-bottom:1px solid #e2dfd9">${v}</td>
        </tr>`
    )
    .join('')

  const msgBlock = b.message
    ? `<div style="margin-top:16px;padding:14px;background:#f6f5f1;border-radius:6px;font-size:13px;color:#5a6a7d;line-height:1.6">
        <strong style="display:block;color:#0c1e35;margin-bottom:6px">Message</strong>
        ${b.message.replace(/\n/g, '<br/>')}
       </div>`
    : ''

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f0efec;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:540px;margin:0 auto">
    <div style="background:#0c1e35;border-radius:8px 8px 0 0;padding:18px 22px;display:flex;align-items:center;gap:10px">
      <div style="width:22px;height:22px;background:rgba(255,255,255,0.15);border-radius:4px;display:flex;align-items:center;justify-content:center">
        <span style="color:white;font-size:12px;font-weight:700">M</span>
      </div>
      <span style="color:white;font-size:15px;font-weight:600">Mawrid — New Form Submission</span>
    </div>
    <div style="background:white;border:1px solid #e2dfd9;border-top:none;border-radius:0 0 8px 8px;padding:20px 22px">
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2dfd9;border-radius:6px;overflow:hidden">
        <tbody>${tableRows}</tbody>
      </table>
      ${msgBlock}
      <p style="margin-top:20px;margin-bottom:0;font-size:11px;color:#8c9bab">
        Sent from mawrid.sa contact form · ${new Date().toISOString()}
      </p>
    </div>
  </div>
</body>
</html>`
}

function buildText(b: FormBody): string {
  return [
    `Form: ${b.type}`,
    `Name: ${b.name}`,
    b.company && `Company: ${b.company}`,
    b.contact && `Contact: ${b.contact}`,
    b.city && `City: ${b.city}`,
    b.message && `\nMessage:\n${b.message}`,
    `\nSent from mawrid.sa`,
  ]
    .filter(Boolean)
    .join('\n')
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function POST(req: NextRequest) {
  let body: FormBody

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.name || !body.type) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const smtpReady = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS

  if (!smtpReady) {
    console.log('[contact form — SMTP not configured, logging to console]')
    console.log(body)
    return NextResponse.json({ success: true })
  }

  const transporter = createTransporter()
  const to = process.env.CONTACT_EMAIL ?? 'contact@mawrid.sa'
  const from = process.env.FROM_EMAIL ?? `Mawrid Site <${process.env.SMTP_USER}>`

  try {
    await transporter.sendMail({
      from,
      to,
      subject: subject(body),
      text: buildText(body),
      html: buildHtml(body),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] SMTP send failed:', err)
    return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
  }
}
