'use client'

import { useEffect, useRef } from 'react'

const phases = [
  {
    number: '0',
    name: 'Foundation & Discovery',
    timeline: 'Months 1–4',
    outcome: 'Legal entity, MISA/CR, ZATCA partner selected, PRD locked from 20+ customer interviews, 10 restaurant + 5 supplier pilot commitments in writing.',
    trigger: 'PRD signed. MISA license issued. ZATCA contract executed. Payment gateway sandbox live.',
    raise: null,
  },
  {
    number: '1',
    name: 'MVP — Riyadh Pilot',
    timeline: 'Months 5–12',
    outcome: 'Restaurant app live on App Store + Play Store. Supplier portal. Admin dashboard. Full ZATCA clearance. 30+ paying restaurants, 100+ daily orders.',
    trigger: '100+ daily orders for 4 consecutive weeks. ZATCA audit: zero failed invoices. 6-month retention ≥ 70%.',
    raise: 'Seed raise initiated — KASO raised $10.5M seed at this stage',
  },
  {
    number: '2',
    name: 'Marketplace Expansion',
    timeline: 'Months 13–18',
    outcome: 'Open supplier discovery. Near-expiry surplus channel. Supplier mobile app. Cloud kitchen + catering segment. Jeddah pipeline fully qualified.',
    trigger: '100+ active Riyadh restaurants. Marketplace live. Near-expiry active with 3+ suppliers. Seed round complete.',
    raise: null,
  },
  {
    number: '3',
    name: 'Intelligence & Monetization',
    timeline: 'Months 19–24',
    outcome: 'AI demand forecasting. Supplier SaaS billing (SAR 499–2,999/mo). Promoted placements. Jeddah live — 20+ restaurants, 8+ suppliers.',
    trigger: '20 suppliers on paid plans. SAR 50M+ annualized GMV. Series A pitch deck complete.',
    raise: null,
  },
  {
    number: '4',
    name: 'Fintech & Enterprise',
    timeline: 'Months 25–32',
    outcome: 'Supplier early settlement (1.5–3% fee via SAMA partner). Restaurant credit facility. Enterprise chain accounts (consolidated PO). Dammam live.',
    trigger: '500+ active restaurants. SAR 150M+ annualized GMV. 3+ enterprise chains. Series A closed.',
    raise: 'Series A target — Supy raised $8M Series A at comparable stage',
  },
  {
    number: '5',
    name: 'Platform Scale',
    timeline: 'Months 33–42',
    outcome: 'AI menu intelligence + smart reorder. Supplier brand awareness product (self-serve). Formal penetration test. Data licensing revenue stream.',
    trigger: 'SAR 400M+ annualized GMV. Penetration test passed. 1,000+ active restaurants.',
    raise: null,
  },
  {
    number: '6',
    name: 'Regional Vision & Series B',
    timeline: 'Months 43–60',
    outcome: 'Kuwait → UAE → Qatar expansion. Agtech / Saudi-grown supplier category. Government MOU (Monsha\'at, Saudi Green Initiative). IPO-readiness framework.',
    trigger: 'SAR 1B+ annualized GMV. Government partnership signed. Series B closed or IPO process initiated.',
    raise: 'Series B / IPO — Jahez listed on Tadawul 2022; Foodics $170M Series C',
  },
]

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-fade-up')
            elements.forEach((el, index) => {
              setTimeout(() => { el.classList.add('visible') }, index * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="roadmap">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Build Roadmap · 2025–2030
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Six phases. Clear triggers. No guesswork.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            What separates a platform that reaches 5,000 restaurants from one that dies in pilot is not the technology.
            It is the sequence. Marketplace → fintech → AI. In that order.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-px animate-fade-up" style={{ border: '1px solid #E2DFD9', borderRadius: '10px', overflow: 'hidden' }}>
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className="bg-white grid lg:grid-cols-[80px_1fr_1fr] gap-0"
              style={{ borderTop: i > 0 ? '1px solid #E2DFD9' : 'none' }}
            >
              {/* Phase number */}
              <div className="hidden lg:flex flex-col items-center justify-start pt-6 pb-4 border-r border-[#E2DFD9] bg-[#F6F5F1]">
                <span className="font-mono text-[22px] font-medium text-[#0C1E35]">{phase.number}</span>
                <div className="w-px flex-1 bg-[#E2DFD9] mt-3" />
              </div>

              {/* Main content */}
              <div className="p-6 lg:border-r border-[#E2DFD9]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="lg:hidden font-mono text-[11px] text-[#8C9BAB] mt-0.5">PHASE {phase.number}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-[16px] text-[#0C1E35] font-medium">{phase.name}</h3>
                      <span className="font-mono text-[11px] text-[#8C9BAB]">{phase.timeline}</span>
                    </div>
                    <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trigger + raise */}
              <div className="px-6 py-6 bg-[#FAFAF8]">
                <div className="mb-3">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>
                    Exit Trigger
                  </span>
                  <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                    {phase.trigger}
                  </p>
                </div>
                {phase.raise && (
                  <div className="mt-3 pt-3 border-t border-[#E2DFD9]">
                    <span className="text-[10px] font-medium text-[#1A4BD8] uppercase block mb-1" style={{ letterSpacing: '0.09em' }}>
                      Fundraise Signal
                    </span>
                    <p className="text-[12px] text-[#1A4BD8]" style={{ fontWeight: 400 }}>
                      {phase.raise}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#8C9BAB] mt-6 text-center animate-fade-up" style={{ fontWeight: 300 }}>
          Timelines run from SOW signature date. Each phase has hard exit triggers — not calendar dates.
        </p>
      </div>
    </section>
  )
}
