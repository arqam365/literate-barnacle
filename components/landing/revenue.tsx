'use client'

import { useEffect, useRef } from 'react'

const streams = [
  {
    phase: 'Phase 1',
    label: 'Order Commission',
    description: 'Percentage take-rate on every order GMV processed through the platform.',
    detail: 'Active from first transaction. Scales directly with order volume.',
    color: '#1A4BD8',
  },
  {
    phase: 'Phase 1',
    label: 'BNPL Distribution Fee',
    description: 'Referral / distribution fee earned when restaurants use Tabby or Tamara BNPL at checkout.',
    detail: 'Credit risk carried by the licensed fintech. We earn the fee.',
    color: '#1A4BD8',
  },
  {
    phase: 'Phase 3',
    label: 'Supplier SaaS Subscription',
    description: 'Tiered monthly subscription for suppliers based on order volume processed through the platform.',
    detail: 'SAR 499/mo · up to 50 orders\nSAR 1,499/mo · up to 200 orders\nSAR 2,999/mo · unlimited + brand visibility',
    color: '#0B6644',
  },
  {
    phase: 'Phase 3',
    label: 'Promoted Placements',
    description: 'Self-serve supplier marketing dashboard — banner placements, push notification campaigns, category spotlights.',
    detail: 'Equivalent to KASO Konnect. Suppliers purchase visibility within the restaurant app.',
    color: '#0B6644',
  },
  {
    phase: 'Phase 4',
    label: 'Credit Spread (Fintech)',
    description: 'Supplier early settlement at 1.5–3% fee (invoice factoring via SAMA-licensed partner). Restaurant extended credit facility at 1–2% platform fee.',
    detail: 'Platform earns the spread. Credit underwriting via licensed partner — not own balance sheet.',
    color: '#7C4DBA',
  },
  {
    phase: 'Phase 5',
    label: 'Data Licensing',
    description: 'Anonymized benchmark reports sold to FMCG brands, food importers, hotel groups, and government bodies.',
    detail: 'SAR 50,000–500,000/report · annual subscriptions. PDPL-compliant. Zero marginal cost per sale.',
    color: '#5A6A7D',
  },
]

export function Revenue() {
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
    <section ref={sectionRef} className="py-24" id="revenue">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[640px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Revenue Architecture
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Six revenue streams that compound as the platform grows.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Transaction revenue from day one. SaaS revenue from Phase 3. Credit spread from Phase 4.
            Data licensing from Phase 5. Each layer unlocks without cannibalizing the prior.
          </p>
        </div>

        {/* Revenue Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-fade-up"
          style={{
            gap: '1px',
            background: '#E2DFD9',
            border: '1px solid #E2DFD9',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {streams.map((stream, i) => (
            <div key={i} className="bg-white p-7">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-block text-[10px] font-medium uppercase px-2 py-1 rounded border"
                  style={{
                    letterSpacing: '0.05em',
                    color: stream.color,
                    borderColor: stream.color + '40',
                    backgroundColor: stream.color + '08',
                  }}
                >
                  {stream.phase}
                </span>
              </div>
              <h3 className="text-[16px] text-[#0C1E35] font-medium mb-2">{stream.label}</h3>
              <p className="text-[14px] text-[#5A6A7D] mb-3" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                {stream.description}
              </p>
              <p className="text-[12px] text-[#8C9BAB] font-mono whitespace-pre-line" style={{ lineHeight: 1.6 }}>
                {stream.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 animate-fade-up grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: '#E2DFD9', border: '1px solid #E2DFD9', borderRadius: '10px', overflow: 'hidden' }}>
          <div className="bg-[#F6F5F1] p-6 text-center">
            <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>Revenue type</span>
            <span className="text-[15px] text-[#0C1E35] font-medium">Transaction</span>
            <span className="text-[13px] text-[#5A6A7D] block" style={{ fontWeight: 300 }}>Phases 1–6</span>
          </div>
          <div className="bg-[#F6F5F1] p-6 text-center">
            <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>Revenue type</span>
            <span className="text-[15px] text-[#0C1E35] font-medium">Recurring SaaS</span>
            <span className="text-[13px] text-[#5A6A7D] block" style={{ fontWeight: 300 }}>Phase 3 onwards</span>
          </div>
          <div className="bg-[#F6F5F1] p-6 text-center">
            <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-2" style={{ letterSpacing: '0.09em' }}>Revenue type</span>
            <span className="text-[15px] text-[#0C1E35] font-medium">Fintech + Data</span>
            <span className="text-[13px] text-[#5A6A7D] block" style={{ fontWeight: 300 }}>Phases 4–5 onwards</span>
          </div>
        </div>
      </div>
    </section>
  )
}
