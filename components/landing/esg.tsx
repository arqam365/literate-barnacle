'use client'

import { useEffect, useRef } from 'react'

const alignments = [
  {
    badge: 'Saudi Green Initiative',
    title: 'Food Waste Reduction Infrastructure',
    description: 'GCC generates 11M tonnes of food waste annually. Saudi Arabia alone: 4.5M+ tonnes. The platform\'s near-expiry channel and AI demand forecasting generate measurable, auditable waste reduction metrics.',
  },
  {
    badge: 'Vision 2030',
    title: 'Food Security & Self-Sufficiency',
    description: 'GCC countries import 80–90% of food consumption. Vision 2030 mandates tripling domestic food production. Our "Saudi Grown" marketplace category (Phase 6) connects restaurants directly with local agtech producers.',
  },
  {
    badge: 'PIF Alignment',
    title: 'Supply Chain Transparency',
    description: 'PIF\'s stated investment priorities include supply chain visibility. A platform that generates documented GMV, fill-rate, and waste-reduction data is a natural co-investment story for institutional Saudi capital.',
  },
  {
    badge: 'Monsha\'at',
    title: 'SME Supplier Enablement',
    description: 'Saudi SME General Authority actively supports F&B SMEs. Platform as recommended procurement tool for Monsha\'at-registered restaurants. Government distribution with zero acquisition cost.',
  },
]

export function ESG() {
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
    <section ref={sectionRef} className="py-24" id="esg">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-14">
          <div className="animate-fade-up">
            <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
              ESG · Vision 2030 Alignment
            </span>
            <h2
              className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
              style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
            >
              Infrastructure that governments want to fund.
            </h2>
            <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              KASO co-founders: <em>&ldquo;Our approach not only benefits restaurants and suppliers, boosting profit margins
              by 15%, but also contributes to the fight against climate change.&rdquo;</em>
            </p>
            <p className="text-[17px] text-[#5A6A7D] mt-4" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              Build this narrative from Phase 1. It is a PIF co-investment story, a government partnership story,
              and a Series A differentiator — all at once.
            </p>
          </div>

          {/* Key stats */}
          <div
            className="grid grid-cols-2 animate-fade-up"
            style={{
              gap: '1px',
              background: '#E2DFD9',
              border: '1px solid #E2DFD9',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {[
              { value: '11M T', label: 'GCC food waste annually', sub: '4.5M+ tonnes in Saudi Arabia alone' },
              { value: '80–90%', label: 'GCC food import dependency', sub: 'National security priority for Saudi government' },
              { value: '15%', label: 'Profit margin uplift', sub: 'KASO\'s documented result for platform users' },
              { value: '2030', label: 'Vision 2030 food mandate', sub: 'Triple domestic food production target' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6">
                <span
                  className="font-serif text-[28px] text-[#0C1E35] font-semibold block mb-1"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  {stat.value}
                </span>
                <p className="text-[13px] text-[#5A6A7D] mb-1" style={{ fontWeight: 500 }}>{stat.label}</p>
                <p className="text-[12px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alignment Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 animate-fade-up"
          style={{
            gap: '1px',
            background: '#E2DFD9',
            border: '1px solid #E2DFD9',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {alignments.map((item, i) => (
            <div key={i} className="bg-white p-6">
              <span
                className="inline-block text-[10px] font-medium text-[#0B6644] uppercase border border-[#0B664440] bg-[#0B664408] px-2 py-1 rounded mb-4"
                style={{ letterSpacing: '0.05em' }}
              >
                {item.badge}
              </span>
              <h3 className="text-[15px] text-[#0C1E35] font-medium mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
