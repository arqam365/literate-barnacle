'use client'

import { useEffect, useRef } from 'react'

const kasoTimeline = [
  { date: 'Jun 2021', event: 'First restaurant. First order.' },
  { date: 'Aug 2021', event: '100+ daily orders — 2 months in.' },
  { date: 'Oct 2021', event: 'Full supplier marketplace live.' },
  { date: 'Jul 2023', event: '$10.5M seed round closed.' },
]

const fundingStats = [
  { value: '$4.2B', label: 'Raised by MENA foodtech scaleups since 2010', sub: '70% raised in the last 2.5 years' },
  { value: '27%', label: 'KSA share of GCC foodtech funding', sub: 'Despite having the largest F&B market in the GCC' },
  { value: '$704M', label: 'VC invested in restaurant SaaS in 2022', sub: '10× the 2013 figure — investors expect major winners' },
  { value: '11M T', label: 'GCC food waste annually (FAO)', sub: 'KSA alone generates 4.5M+ tonnes — a platform solving this is politically aligned' },
]

export function MarketProof() {
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
    <section ref={sectionRef} className="py-24" id="market-proof">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Market Validation
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            The market has already been proven. The KSA layer hasn&apos;t been built.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            KASO launched in the UAE and validated the thesis. They retrofitted Arabic and ZATCA later.
            We are building KSA-native from day one — the advantage that compounds over time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* KASO Timeline */}
          <div className="animate-fade-up">
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden bg-white">
              <div className="px-6 py-4 bg-[#F6F5F1] border-b border-[#E2DFD9] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#5A6A7D] uppercase" style={{ letterSpacing: '0.09em' }}>
                  KASO — The Proof Point
                </span>
                <span className="text-[11px] font-medium text-[#0B6644] uppercase" style={{ letterSpacing: '0.09em' }}>
                  UAE-first · Now KSA
                </span>
              </div>
              <div className="divide-y divide-[#E2DFD9]">
                {kasoTimeline.map((item, i) => (
                  <div key={i} className="flex gap-5 px-6 py-4">
                    <span className="font-mono text-[11px] text-[#8C9BAB] w-[68px] flex-shrink-0 pt-0.5">{item.date}</span>
                    <span className="text-[14px] text-[#0C1E35]" style={{ fontWeight: 400, lineHeight: 1.5 }}>{item.event}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-[#F6F5F1] border-t border-[#E2DFD9]">
                <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                  The sequence is non-negotiable: marketplace → fintech → AI.
                  This roadmap encodes that sequence for KSA specifically.
                </p>
              </div>
            </div>
          </div>

          {/* Funding Context */}
          <div
            className="grid grid-cols-2 animate-fade-up"
            style={{
              gap: '1px',
              background: '#E2DFD9',
              border: '1px solid #E2DFD9',
              borderRadius: '10px',
              overflow: 'hidden',
              alignContent: 'start',
            }}
          >
            {fundingStats.map((stat, i) => (
              <div key={i} className="bg-white p-6">
                <span
                  className="font-serif text-[28px] lg:text-[32px] text-[#0C1E35] font-semibold block mb-1"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  {stat.value}
                </span>
                <p className="text-[13px] text-[#5A6A7D] mb-1" style={{ fontWeight: 500, lineHeight: 1.4 }}>
                  {stat.label}
                </p>
                <p className="text-[12px] text-[#8C9BAB]" style={{ fontWeight: 300, lineHeight: 1.4 }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Framing line */}
        <div className="animate-fade-up border-l-2 border-[#1A4BD8] pl-5">
          <p className="text-[15px] text-[#0C1E35]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
            UAE platforms like KASO and Supy entered KSA as an afterthought — retrofitting Arabic, adjusting for ZATCA.
            Your platform is Saudi-native from day one.{' '}
            <span className="text-[#5A6A7D]" style={{ fontWeight: 300 }}>
              That is an advantage that compounds over time.
            </span>
          </p>
          <p className="text-[12px] text-[#8C9BAB] mt-2" style={{ fontWeight: 300 }}>
            Source: Lucidity Insights / Foodics MENA Foodtech Report 2023
          </p>
        </div>
      </div>
    </section>
  )
}
