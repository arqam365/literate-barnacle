import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface FormBody {
  type: string
  name: string
  email?: string
  company?: string
  contact?: string
  city?: string
  message?: string
}

const TYPE_LABELS: Record<string, string> = {
  investor: 'Investor Deck Request',
  restaurant: 'Early Access — Restaurant',
  supplier: 'Supplier Sign-Up',
  partner: 'Partnership Enquiry',
}

function subject(b: FormBody): string {
  const label = TYPE_LABELS[b.type] ?? b.type
  const who = [b.name, b.company].filter(Boolean).join(' · ')
  const loc = b.city ? ` (${b.city})` : ''
  return `${label} — ${who}${loc}`
}

function buildHtml(b: FormBody): string {
  const label = TYPE_LABELS[b.type] ?? b.type

  const rows: [string, string][] = [
    ['Name', b.name],
    ...(b.email ? [['Email', b.email] as [string, string]] : []),
    ...(b.company ? [['Company / Fund', b.company] as [string, string]] : []),
    ...(b.contact ? [['WhatsApp / Phone', b.contact] as [string, string]] : []),
    ...(b.city ? [['City', b.city] as [string, string]] : []),
  ]

  const tableRows = rows
    .map(([k, v]) => {
      const isEmail = k === 'Email'
      const valHtml = isEmail
        ? `<a href="mailto:${v}" style="color:#1a4bd8;text-decoration:none">${v}</a>`
        : v
      return `<tr>
        <td style="padding:10px 16px;background:#f6f5f1;font-size:11px;font-weight:600;color:#5a6a7d;text-transform:uppercase;letter-spacing:0.07em;white-space:nowrap;border-bottom:1px solid #e2dfd9;width:160px">${k}</td>
        <td style="padding:10px 16px;font-size:13px;color:#0c1e35;border-bottom:1px solid #e2dfd9">${valHtml}</td>
      </tr>`
    })
    .join('')

  const msgBlock = b.message
    ? `<div style="margin-top:18px;padding:14px 16px;background:#f6f5f1;border-radius:6px;border:1px solid #e2dfd9">
        <p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#5a6a7d;text-transform:uppercase;letter-spacing:0.07em">Message</p>
        <p style="margin:0;font-size:13px;color:#0c1e35;line-height:1.65">${b.message.replace(/\n/g, '<br/>')}</p>
       </div>`
    : ''

  const replyHint = b.email
    ? `<a href="mailto:${b.email}" style="display:inline-block;margin-top:16px;padding:8px 16px;background:#0c1e35;color:white;font-size:12px;font-weight:500;border-radius:5px;text-decoration:none">Reply to ${b.name}</a>`
    : ''

  const ts = new Date().toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Riyadh',
  }) + ' AST'

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:32px 16px;background:#edecea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif">
  <div style="max-width:520px;margin:0 auto">

    <!-- Header -->
    <div style="background:#0c1e35;border-radius:10px 10px 0 0;padding:20px 24px;display:flex;align-items:center;gap:12px">
      <div style="width:32px;height:32px;background:rgba(255,255,255,0.12);border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <span style="color:white;font-size:14px;font-weight:700;line-height:1">M</span>
      </div>
      <div>
        <p style="margin:0;color:rgba(255,255,255,0.5);font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.09em">New Submission</p>
        <p style="margin:0;color:white;font-size:15px;font-weight:600">${label}</p>
      </div>
    </div>

    <!-- Body -->
    <div style="background:white;border:1px solid #e2dfd9;border-top:none;border-radius:0 0 10px 10px;padding:22px 24px">

      <!-- Data table -->
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2dfd9;border-radius:7px;overflow:hidden">
        <tbody>${tableRows}</tbody>
      </table>

      ${msgBlock}
      ${replyHint}

      <!-- Footer -->
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f0efec;display:flex;align-items:center;justify-content:space-between;gap:8px">
        <p style="margin:0;font-size:11px;color:#b0a89e">mawrid.sa contact form</p>
        <p style="margin:0;font-size:11px;color:#b0a89e">${ts}</p>
      </div>
    </div>

  </div>
</body>
</html>`
}

const CONFIRMATION_COPY: Record<string, { subject: string; body: string }> = {
  investor: {
    subject: 'Your investor deck request — Mawrid',
    body: "We've received your request and will send the Mawrid investor deck to this email within 24 hours. No follow-up unless you ask for one.",
  },
  restaurant: {
    subject: 'You\'re on the Mawrid waitlist',
    body: "You're on the Riyadh pilot waitlist. We'll be in touch within 48 hours to confirm your spot and arrange a demo. The cohort is limited to 30 restaurants — priority goes to first commitments.",
  },
  supplier: {
    subject: 'Supplier application received — Mawrid',
    body: "We've received your supplier application and will review it shortly. Expect a call within 48 hours. The Riyadh pilot targets 15 anchor suppliers.",
  },
  partner: {
    subject: 'Partnership enquiry received — Mawrid',
    body: "We've received your enquiry and review every partnership request personally. You'll hear from us within 3 business days.",
  },
}

function buildConfirmationHtml(b: FormBody): string {
  const copy = CONFIRMATION_COPY[b.type] ?? {
    subject: '',
    body: "We've received your submission and will be in touch shortly.",
  }

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:32px 16px;background:#edecea;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif">
  <div style="max-width:520px;margin:0 auto">

    <!-- Header -->
    <div style="background:#0c1e35;border-radius:10px 10px 0 0;padding:20px 24px;display:flex;align-items:center;gap:12px">
      <div style="width:32px;height:32px;background:rgba(255,255,255,0.12);border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <span style="color:white;font-size:14px;font-weight:700;line-height:1">M</span>
      </div>
      <div>
        <p style="margin:0;color:rgba(255,255,255,0.5);font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.09em">Mawrid · KSA</p>
        <p style="margin:0;color:white;font-size:15px;font-weight:600">Submission confirmed</p>
      </div>
    </div>

    <!-- Body -->
    <div style="background:white;border:1px solid #e2dfd9;border-top:none;border-radius:0 0 10px 10px;padding:28px 24px">

      <p style="margin:0 0 6px;font-size:15px;font-weight:600;color:#0c1e35">Hi ${b.name},</p>
      <p style="margin:0 0 20px;font-size:14px;color:#5a6a7d;line-height:1.65;font-weight:300">${copy.body}</p>

      <div style="padding:14px 16px;background:#f6f5f1;border-radius:7px;border:1px solid #e2dfd9">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#5a6a7d;text-transform:uppercase;letter-spacing:0.07em">Direct contact</p>
        <a href="mailto:contact@mawrid.sa" style="font-size:13px;color:#1a4bd8;text-decoration:none">contact@mawrid.sa</a>
      </div>

      <!-- Footer -->
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #f0efec">
        <p style="margin:0;font-size:11px;color:#b0a89e">Mawrid · Riyadh, Saudi Arabia · mawrid.sa</p>
      </div>
    </div>

  </div>
</body>
</html>`
}

function buildText(b: FormBody): string {
  return [
    `${TYPE_LABELS[b.type] ?? b.type}`,
    `──────────────────`,
    `Name:     ${b.name}`,
    b.email && `Email:    ${b.email}`,
    b.company && `Company:  ${b.company}`,
    b.contact && `Phone:    ${b.contact}`,
    b.city && `City:     ${b.city}`,
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
    console.log('[contact form — SMTP not configured]', body)
    return NextResponse.json({ success: true })
  }

  const transporter = createTransporter()
  const to = process.env.CONTACT_EMAIL ?? 'contact@mawrid.sa'
  const from = process.env.FROM_EMAIL ?? `Mawrid Site <${process.env.SMTP_USER}>`

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: body.email || undefined,
      subject: subject(body),
      text: buildText(body),
      html: buildHtml(body),
    })

    if (body.email) {
      const confirmation = CONFIRMATION_COPY[body.type]
      if (confirmation) {
        await transporter.sendMail({
          from,
          to: body.email,
          replyTo: to,
          subject: confirmation.subject,
          html: buildConfirmationHtml(body),
          text: `Hi ${body.name},\n\n${confirmation.body}\n\nDirect contact: contact@mawrid.sa\n\nMawrid · Riyadh, Saudi Arabia`,
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] SMTP error:', err)
    return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 })
  }
}
