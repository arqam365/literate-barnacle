'use client'

import { useEffect, useRef } from 'react'

const complianceItems = [
  {
    badge: 'ZATCA Phase 2',
    title: 'Fatoora Real-Time Clearance',
    description: 'Every B2B invoice cleared in real-time. XML + QR + PDF. Spec-change absorbed by certified partner.'
  },
  {
    badge: 'PDPL',
    title: 'In-Kingdom Data Residency',
    description: 'All data stored in-Kingdom. AWS Bahrain (me-south-1). Saudi personal data never leaves KSA.'
  },
  {
    badge: 'SFDA',
    title: 'Food Safety Chain-of-Custody',
    description: 'Supplier SFDA establishment number captured and verified at onboarding. Traceability by default.'
  },
  {
    badge: 'Mada',
    title: 'Certified Payment Processing',
    description: '~80% of Saudi card transactions. Certified via HyperPay or Moyasar. Non-negotiable for B2B.'
  },
  {
    badge: 'SAMA',
    title: 'Licensed Fintech Partners',
    description: 'All BNPL partners (Tabby, Tamara) are SAMA-licensed. Credit line partners CMA-licensed.'
  }
]

export function Compliance() {
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
    <section ref={sectionRef} className="py-24" id="compliance">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Compliance
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Regulatory infrastructure, not an afterthought.
          </h2>
        </div>

        {/* Compliance Grid - 5 columns on desktop */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 animate-fade-up"
          style={{
            gap: '1px',
            background: '#E2DFD9',
            border: '1px solid #E2DFD9',
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          {complianceItems.map((item, index) => (
            <div key={index} className="bg-white p-6">
              <span 
                className="inline-block text-[10px] font-medium text-[#0C1E35] uppercase border border-[#0C1E35] px-2 py-1 rounded mb-4"
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

        {/* Footer Note */}
        <p className="text-[13px] text-[#8C9BAB] mt-8 text-center animate-fade-up">
          All compliance obligations met at platform launch — not roadmap items.
        </p>
      </div>
    </section>
  )
}
