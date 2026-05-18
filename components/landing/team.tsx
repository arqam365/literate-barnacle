'use client'

import { useEffect, useRef } from 'react'

const advisors = [
  {
    role: 'ZATCA & Regulatory',
    description: 'ZATCA Phase 2 certified e-invoicing partner. Handles spec changes and Fatoora clearance infrastructure.',
    type: 'Partner',
  },
  {
    role: 'Payment Infrastructure',
    description: 'HyperPay or Moyasar gateway. Mada, Apple Pay, STC Pay, Tabby BNPL. Merchant agreements in progress.',
    type: 'Partner',
  },
  {
    role: 'Legal & PDPL Compliance',
    description: 'KSA local legal partner for PDPL gap assessment, data residency decision, and MISA license application.',
    type: 'Partner',
  },
]

const openRoles = [
  { title: 'Head of Supplier Operations', requirement: 'Regional F&B experience. Can be expat.' },
  { title: 'Customer Success (Saudi national)', requirement: 'Required before headcount reaches 3 — Nitaqat compliance.' },
  { title: 'Finance & Compliance Lead', requirement: 'Saudi national. Accounting-Saudization aware.' },
]

export function Team() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-fade-up')
            elements.forEach((el, index) => {
              setTimeout(() => { el.classList.add('visible') }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="team">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Team
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Founder-led. Saudi-first. Built to stay.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Every successful B2B marketplace in MENA — KASO, Supy, Foodics — shares one characteristic in its early stage:
            the founders were personally present for every anchor customer relationship. Not sales reps. The founders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Founder card */}
          <div className="lg:col-span-1 animate-fade-up">
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden h-full">
              <div className="bg-[#0C1E35] px-6 py-8 flex flex-col items-start">
                {/* Avatar placeholder */}
                <div
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-5"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-[18px] text-white font-medium mb-1">Founder / CEO</h3>
                <p className="text-[13px] text-white/50 mb-4" style={{ fontWeight: 300 }}>Saudi national · Riyadh</p>
                <span
                  className="inline-block text-[10px] font-medium text-white/40 uppercase border border-white/15 px-2 py-1 rounded"
                  style={{ letterSpacing: '0.05em' }}
                >
                  Anchors Nitaqat Compliance
                </span>
              </div>
              <div className="p-6 bg-white">
                <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                  The Riyadh pilot is not a product launch. It is a relationship-building exercise that happens
                  to have an app attached to it. The founder runs every anchor customer interaction personally
                  through Month 18.
                </p>
              </div>
            </div>
          </div>

          {/* Partner ecosystem + open roles */}
          <div className="lg:col-span-2 space-y-4 animate-fade-up">
            {/* Partners */}
            <div>
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                Partner Ecosystem
              </span>
              <div className="space-y-2">
                {advisors.map((advisor, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-[#E2DFD9] rounded-[8px] bg-white">
                    <span
                      className="text-[10px] font-medium text-[#5A6A7D] uppercase border border-[#E2DFD9] px-2 py-1 rounded flex-shrink-0 mt-0.5"
                      style={{ letterSpacing: '0.05em' }}
                    >
                      {advisor.type}
                    </span>
                    <div>
                      <p className="text-[14px] text-[#0C1E35] font-medium mb-1">{advisor.role}</p>
                      <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300 }}>{advisor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open roles */}
            <div>
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                Hiring in Phase 0–1
              </span>
              <div
                className="rounded-[8px] overflow-hidden"
                style={{ border: '1px solid #E2DFD9' }}
              >
                {openRoles.map((role, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 px-5 py-4 bg-white"
                    style={{ borderTop: i > 0 ? '1px solid #E2DFD9' : 'none' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1A4BD8] flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-[14px] text-[#0C1E35] font-medium">{role.title}</p>
                      <p className="text-[13px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>{role.requirement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
