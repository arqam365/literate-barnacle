'use client'

import { useEffect, useRef } from 'react'

const moatSignals = [
  {
    quote: 'Revenue trajectory signal',
    title: 'Order Frequency & Value',
    description: '12-week rolling procurement cadence per restaurant. Revenue trajectory signal that no bank has without us.'
  },
  {
    quote: 'Creditworthiness indicator',
    title: 'On-Time Payment Rate',
    description: 'Cross-supplier payment behavior. The most accurate creditworthiness signal available for SMB restaurants.'
  },
  {
    quote: 'Stability indicator',
    title: 'Supplier Concentration Risk',
    description: 'Dependency ratio per restaurant. Stability indicator for credit line sizing and risk assessment.'
  },
  {
    quote: 'Operational quality proxy',
    title: 'Dispute & Credit-Note Rate',
    description: 'Kitchen stability proxy. Operational quality signal for underwriting and supplier ranking.'
  },
  {
    quote: 'Demand-side signal',
    title: 'Foodics POS Integration',
    description: 'Consumer ticket size and revenue capacity. The demand-side signal that closes the underwriting loop.'
  },
  {
    quote: 'Structural stability signal',
    title: 'Sijil Aqari + CR Vintage',
    description: 'Formal business age and property registration. Structural stability signal unavailable to pure consumer fintechs.'
  }
]

export function DataMoat() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-fade-up')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="data-moat">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Intelligence Infrastructure
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Every transaction generates underwriting intelligence.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            The data accumulated through procurement operations creates credit signals that no traditional 
            lender can access. This is the defensibility layer.
          </p>
        </div>

        {/* Data Moat Grid - 3x2 */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-fade-up"
          style={{
            gap: '1px',
            background: '#E2DFD9',
            border: '1px solid #E2DFD9',
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          {moatSignals.map((signal, index) => (
            <div key={index} className="bg-white p-8">
              <p 
                className="font-serif text-[13px] text-[#1A4BD8] italic mb-4"
              >
                {signal.quote}
              </p>
              <h3 className="text-[17px] text-[#0C1E35] font-medium mb-2">{signal.title}</h3>
              <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
