'use client'

import { useEffect, useRef } from 'react'

const capabilities = [
  {
    number: '01',
    title: 'Supplier Network Engine',
    description: 'Multi-supplier catalog, tiered pricing, MOQ rules, stock toggle, real-time availability. The directory layer that makes procurement possible.'
  },
  {
    number: '02',
    title: 'Ordering System',
    description: '3-tap multi-supplier cart, recurring orders, branch management, Arabic-native UI. Ordering rebuilt for operational speed.'
  },
  {
    number: '03',
    title: 'Payment Orchestration',
    description: 'Mada, Apple Pay, STC Pay at checkout. T+1 supplier settlement via escrow. The payment rail restaurants and suppliers both need.'
  },
  {
    number: '04',
    title: 'Embedded Financing',
    description: 'BNPL via Tabby and Tamara. Revolving credit via Lendo for chain accounts. Credit infrastructure built into every transaction.'
  },
  {
    number: '05',
    title: 'ZATCA Invoicing',
    description: 'Phase 2 Fatoora clearance on every order. XML + QR. Real-time. Zero manual work. Compliance is automated, not aspirational.'
  },
  {
    number: '06',
    title: 'Procurement Intelligence',
    description: 'Spend by category, supplier scorecards, fill-rate trends, anomaly detection. The visibility layer that enables optimization.'
  }
]

export function Platform() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="platform">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            The Platform
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            One operational layer. Six interconnected modules.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Not a marketplace. Not a point solution. A complete procurement operating system 
            designed for how Saudi restaurants actually operate.
          </p>
        </div>

        {/* Capabilities Grid - Hairline technique */}
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
          {capabilities.map((cap) => (
            <div key={cap.number} className="bg-white p-8">
              <span className="font-mono text-[11px] text-[#1A4BD8] block mb-4">{cap.number}</span>
              <h3 className="text-[18px] text-[#0C1E35] font-medium mb-3">{cap.title}</h3>
              <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
