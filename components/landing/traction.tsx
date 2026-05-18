'use client'

import { useEffect, useRef } from 'react'

const phase1Targets = [
  { metric: 'Active Restaurants', target: '30+', benchmark: 'KASO: 100+ in 2 months' },
  { metric: 'Active Suppliers', target: '15+', benchmark: 'Riyadh pilot cohort' },
  { metric: 'Daily Orders (run-rate)', target: '100+', benchmark: 'KASO: hit this in 2 months' },
  { metric: 'Time-to-First Order', target: '< 72 hrs', benchmark: 'From restaurant activation' },
  { metric: 'ZATCA Compliance', target: '100%', benchmark: 'Zero tolerance — audit exposure' },
  { metric: '6-Month Retention', target: '75%+', benchmark: 'Platform stickiness proof' },
  { metric: 'App Store Rating', target: '4.2+', benchmark: 'App Store + Play Store' },
  { metric: 'Payment Success Rate', target: '97%+ Mada', benchmark: '92%+ Tabby BNPL' },
]

const leadingIndicators = [
  {
    number: '01',
    name: 'Time-to-Second-Order (TTSO)',
    healthy: 'Under 7 days = healthy',
    warning: 'Over 14 days = churn risk',
    description: 'The single most predictive metric. A restaurant that reorders quickly is integrating the platform into daily operations.',
  },
  {
    number: '02',
    name: 'Fill Rate',
    healthy: '92%+ target',
    warning: 'Below 88% = supplier crisis',
    description: 'Percentage of orders fully delivered as ordered. Below 88% triggers supplier intervention — this is the number that kills kitchens.',
  },
  {
    number: '03',
    name: 'Suppliers per Restaurant',
    healthy: '3+ by Month 6',
    warning: '1 supplier = not using marketplace',
    description: 'Restaurants using only 1 supplier are not experiencing the platform — they have a digital WhatsApp. 3+ means they are in the network.',
  },
]

export function Traction() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="traction">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Go-to-Market · Phase 1 Targets
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            The Riyadh pilot is not a soft launch. It is a controlled experiment.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Every target below generates the data that justifies Phase 2 investment and a seed fundraise.
            Structure the pilot accordingly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phase 1 KPI Table */}
          <div className="animate-fade-up">
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden">
              <div className="px-5 py-3 bg-[#0C1E35] flex items-center justify-between">
                <span className="text-[11px] font-medium text-white/60 uppercase" style={{ letterSpacing: '0.09em' }}>
                  Phase 1 Targets · Month 12
                </span>
                <span className="text-[11px] font-medium text-white/40 uppercase" style={{ letterSpacing: '0.09em' }}>
                  Riyadh Pilot
                </span>
              </div>
              <div className="divide-y divide-[#E2DFD9]">
                {phase1Targets.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 bg-white hover:bg-[#F9F8F5] transition-colors">
                    <div className="px-5 py-3">
                      <span className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300 }}>{row.metric}</span>
                    </div>
                    <div className="px-5 py-3 border-l border-[#E2DFD9]">
                      <span className="font-mono text-[13px] text-[#0C1E35] font-medium block">{row.target}</span>
                      <span className="text-[11px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>{row.benchmark}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Three Leading Indicators */}
          <div className="animate-fade-up space-y-3">
            <div className="mb-5">
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase" style={{ letterSpacing: '0.09em' }}>
                The Three Numbers That Predict Everything
              </span>
            </div>
            {leadingIndicators.map((indicator, i) => (
              <div key={i} className="border border-[#E2DFD9] rounded-[8px] p-5 bg-white">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-[#1A4BD8] mt-0.5 flex-shrink-0">{indicator.number}</span>
                  <div>
                    <h3 className="text-[15px] text-[#0C1E35] font-medium mb-2">{indicator.name}</h3>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className="text-[12px] text-[#0B6644] font-mono">{indicator.healthy}</span>
                      <span className="text-[12px] text-[#8C3A3A] font-mono">{indicator.warning}</span>
                    </div>
                    <p className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.5 }}>
                      {indicator.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Pilot cohort target */}
            <div className="border border-[#E2DFD9] rounded-[8px] p-5 bg-[#F6F5F1]">
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>
                Target Pilot Cohort Mix
              </span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {[
                  ['5', 'independent QSRs'],
                  ['5', 'cafés'],
                  ['5', 'casual dining'],
                  ['5', 'small chains (3–10 outlets)'],
                  ['5', 'cloud kitchens ★'],
                ].map(([n, label], i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-mono text-[13px] text-[#0C1E35] font-medium">{n}</span>
                    <span className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300 }}>{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#8C9BAB] mt-3" style={{ fontWeight: 300 }}>
                ★ Cloud kitchens are disproportionately valuable — they order frequently, lack legacy supplier relationships, and are run by tech-comfortable operators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
