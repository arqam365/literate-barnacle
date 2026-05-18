'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// 5 months from 2026-05-18 = October 18, 2026 — Riyadh pilot target launch
const LAUNCH_DATE = new Date('2026-10-18T00:00:00+03:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function calcTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Pad({ n }: { n: number }) {
  return <span className="font-mono tabular-nums">{String(n).padStart(2, '0')}</span>
}

function Divider() {
  return <span className="text-white/25 mx-0.5 font-mono">:</span>
}

export function CountdownBanner() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calcTimeLeft())
    const id = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time || time.total <= 0) return null

  return (
    <div className="mt-[58px] bg-[#0C1E35] border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: label */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B6644] animate-pulse" />
          <span
            className="text-[11px] font-medium text-white/70 uppercase"
            style={{ letterSpacing: '0.09em' }}
          >
            Riyadh Pilot Waitlist
          </span>
          <span className="hidden sm:block text-white/20 text-[11px]">·</span>
          <span className="hidden sm:block text-[11px] text-white/40" style={{ fontWeight: 300 }}>
            Limited cohort · 30 restaurants · 15 suppliers
          </span>
        </div>

        {/* Right: countdown + CTA */}
        <div className="flex items-center gap-4">
          {/* Countdown digits */}
          <div className="flex items-center text-[13px] text-white/80">
            <span className="text-[10px] text-white/30 font-medium uppercase mr-2" style={{ letterSpacing: '0.06em' }}>
              Opens in
            </span>
            <Pad n={time.days} />
            <span className="text-white/30 mx-1 text-[11px]">d</span>
            <Pad n={time.hours} />
            <Divider />
            <Pad n={time.minutes} />
            <Divider />
            <Pad n={time.seconds} />
          </div>

          <Link
            href="#access"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-white/80 hover:text-white transition-colors uppercase"
            style={{ letterSpacing: '0.06em' }}
          >
            Join Waitlist
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
