'use client'

import { useEffect, useRef } from 'react'

const painPoints = [
  {
    label: 'Fragmented Ordering',
    title: 'WhatsApp threads, voice notes, handwritten lists per supplier',
    description: 'Every supplier relationship managed through informal channels. No audit trail, no order history, no accountability.'
  },
  {
    label: 'Pricing Opacity',
    title: 'No landed price visibility; VAT calculated manually post-delivery',
    description: 'Actual procurement costs unknown until invoice arrives days later. CFOs flying blind on true spend.'
  },
  {
    label: 'Invoice Chaos',
    title: 'Manual PDF invoices, no ZATCA compliance, audit exposure',
    description: 'Paper invoices, Excel tracking, Phase 2 mandate creates existential compliance risk for every transaction.'
  },
  {
    label: 'Payment Friction',
    title: 'Cash on delivery or 30-day informal credit, no digital trail',
    description: 'No working capital optimization. Suppliers carry risk, restaurants carry cash. No one wins.'
  },
  {
    label: 'Zero Procurement Visibility',
    title: 'No spend analytics, no category breakdown, no forecasting signal',
    description: 'CFOs cannot forecast, cannot benchmark, cannot optimize. Procurement is a black box to the business.'
  },
  {
    label: 'Supplier Accountability Gap',
    title: 'No fill-rate tracking, no on-time metrics, no dispute resolution',
    description: 'No performance data. Relationships run on goodwill alone. When goodwill fails, so does the kitchen.'
  }
]

export function Problem() {
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
    <section ref={sectionRef} className="py-24" id="problem">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            The Broken Status Quo
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Saudi restaurant procurement runs on WhatsApp and goodwill.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            The Kingdom&apos;s restaurant sector processes billions in procurement annually through fragmented, 
            manual workflows. No visibility. No compliance. No infrastructure.
          </p>
        </div>

        {/* Pain Points Grid - Hairline technique */}
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
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8">
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                {point.label}
              </span>
              <h3 className="text-[17px] text-[#0C1E35] font-medium mb-2">{point.title}</h3>
              <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
