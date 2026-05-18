'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stages = [
  {
    stage: 'Pre-Seed',
    timing: 'Now',
    status: 'active',
    description: 'SOW signed. Founders + angels fund Phase 0 + first 6 months of Phase 1 operations.',
    trigger: 'Decision to build. Team assembled. Partner agreements signed.',
    comparable: null,
  },
  {
    stage: 'Seed',
    timing: 'Month 12–16',
    status: 'upcoming',
    description: 'App live. 30+ paying restaurants. 100+ daily orders. ZATCA audit clean. Riyadh pilot data packaged into investor deck.',
    trigger: '4 consecutive weeks of 100+ daily orders. 6-month retention ≥ 70%.',
    comparable: 'KASO raised $2.1M pre-seed at this stage; $10.5M seed after 2 years.',
  },
  {
    stage: 'Series A',
    timing: 'Month 28–32',
    status: 'upcoming',
    description: 'Jeddah + Dammam live. Supplier fintech vertical operational. 500+ restaurants. SAR 150M+ annualized GMV. Enterprise chains.',
    trigger: 'SAR 150M+ GMV. 500+ active restaurants. Series A deck + data room complete.',
    comparable: 'Supy raised $8M Series A at 42 countries, tripling revenue.',
  },
  {
    stage: 'Series B',
    timing: 'Month 48–54',
    status: 'upcoming',
    description: 'GCC expansion underway. AI layer proven. SAR 1B+ annualized GMV. IPO-readiness framework active.',
    trigger: 'SAR 1B+ GMV. Kuwait + UAE operational. Government partnership signed.',
    comparable: 'KASO\'s likely next raise. Foodics raised $170M Series C at 17,500 outlets.',
  },
]

const exitComps = [
  { company: 'Jahez', market: 'KSA food delivery', event: 'IPO on Tadawul', year: '2022', note: 'KSA-native foodtech listing' },
  { company: 'Foodics', market: 'MENA restaurant SaaS', event: '$170M Series C', year: '2023', note: '17,500 F&B outlets' },
  { company: 'KASO', market: 'UAE/KSA B2B food', event: '$10.5M Seed', year: '2023', note: 'Closest comp. KSA layer still open.' },
]

export function Fundraising() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24" id="investors">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-14">
          <div className="animate-fade-up">
            <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
              Investment
            </span>
            <h2
              className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
              style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
            >
              Each stage unlocks when the market demands it.
            </h2>
            <p className="text-[17px] text-[#5A6A7D] mb-8" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              No fundraising stage is on a calendar. Each is gated by operating milestones.
              The investor who enters at seed gets two years of compounding before Series A is possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#access" className="btn-primary">
                Request Investor Deck
              </Link>
              <Link href="#contact" className="btn-outline">
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* Exit comparables */}
          <div className="animate-fade-up">
            <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
              Exit Comparables
            </span>
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden">
              {exitComps.map((comp, i) => (
                <div
                  key={i}
                  className="p-5 bg-white"
                  style={{ borderTop: i > 0 ? '1px solid #E2DFD9' : 'none' }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-[15px] text-[#0C1E35] font-medium">{comp.company}</span>
                    <span className="font-mono text-[12px] text-[#8C9BAB]">{comp.year}</span>
                  </div>
                  <p className="text-[13px] text-[#5A6A7D] mb-1" style={{ fontWeight: 300 }}>{comp.market}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#1A4BD8] font-medium">{comp.event}</span>
                    <span className="text-[#E2DFD9]">·</span>
                    <span className="text-[12px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>{comp.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fundraising stages */}
        <div className="animate-fade-up" style={{ border: '1px solid #E2DFD9', borderRadius: '10px', overflow: 'hidden' }}>
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-[160px_1fr_1fr] ${stage.status === 'active' ? 'bg-[#0C1E3508]' : 'bg-white'}`}
              style={{ borderTop: i > 0 ? '1px solid #E2DFD9' : 'none' }}
            >
              {/* Stage label */}
              <div className="flex flex-col justify-start p-5 lg:border-r border-[#E2DFD9]">
                <div className="flex items-center gap-2 mb-1">
                  {stage.status === 'active' && (
                    <span className="w-2 h-2 rounded-full bg-[#0B6644] flex-shrink-0" />
                  )}
                  <span className="text-[15px] text-[#0C1E35] font-medium">{stage.stage}</span>
                </div>
                <span className="font-mono text-[12px] text-[#8C9BAB]">{stage.timing}</span>
              </div>

              {/* Description */}
              <div className="p-5 lg:border-r border-[#E2DFD9]">
                <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                  {stage.description}
                </p>
                {stage.comparable && (
                  <p className="text-[12px] text-[#1A4BD8] mt-2" style={{ fontWeight: 400 }}>
                    {stage.comparable}
                  </p>
                )}
              </div>

              {/* Trigger */}
              <div className="p-5 bg-[#FAFAF8]">
                <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>
                  Unlock Trigger
                </span>
                <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                  {stage.trigger}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
