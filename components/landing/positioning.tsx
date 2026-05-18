'use client'

import { useEffect, useRef } from 'react'

const competitors = [
  { name: 'Choco', assetModel: 'Asset-light SaaS', revenue: 'Subscription only', geo: 'EU / US', zatca: 'Not applicable', bnpl: 'None', arabic: 'No', moat: 'None' },
  { name: 'Hyperpure', assetModel: 'Asset-heavy distributor', revenue: 'Markup on goods', geo: 'India only', zatca: 'Not applicable', bnpl: 'None', arabic: 'No', moat: 'None' },
  { name: 'Kaso', assetModel: 'Asset-light SaaS', revenue: 'Subscription + opaque fintech', geo: 'UAE + KSA', zatca: 'Not disclosed', bnpl: 'Partial, single-provider', arabic: 'Partial', moat: 'Early stage' },
]

const mawrid = { 
  name: 'Mawrid', 
  assetModel: 'Asset-light + embedded fintech', 
  revenue: 'Take-rate + credit spread + SaaS', 
  geo: 'KSA-first', 
  zatca: 'Live at launch', 
  bnpl: 'Dual-sourced (Tabby + Tamara)', 
  arabic: 'From day one', 
  moat: 'Core architecture' 
}

const headers = [
  { key: 'assetModel', label: 'Asset model' },
  { key: 'revenue', label: 'Revenue model' },
  { key: 'geo', label: 'Geography' },
  { key: 'zatca', label: 'ZATCA Phase 2' },
  { key: 'bnpl', label: 'Embedded BNPL' },
  { key: 'arabic', label: 'Arabic-native' },
  { key: 'moat', label: 'Fintech data moat' },
]

export function Positioning() {
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
    <section ref={sectionRef} className="py-24" id="positioning">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Market Position
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Differentiated by architecture, not by feature count.
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Each competitor has validated a piece of the thesis. None has assembled the full stack 
            required for Saudi-native procurement infrastructure.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="animate-fade-up overflow-x-auto">
          <div className="min-w-[800px] border border-[#E2DFD9] rounded-[10px] overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-5 bg-[#0C1E35]">
              <div className="p-4 text-[11px] font-medium text-white/60 uppercase" style={{ letterSpacing: '0.05em' }}></div>
              {competitors.map((c) => (
                <div key={c.name} className="p-4 text-[13px] font-medium text-white/70">{c.name}</div>
              ))}
              <div className="p-4 text-[13px] font-semibold text-white bg-[#172D47]">{mawrid.name}</div>
            </div>

            {/* Data Rows */}
            {headers.map((header, rowIndex) => (
              <div 
                key={header.key} 
                className={`grid grid-cols-5 ${rowIndex !== headers.length - 1 ? 'border-b border-[#E2DFD9]' : ''}`}
              >
                <div className="p-4 text-[12px] font-medium text-[#5A6A7D] bg-[#F6F5F1]">{header.label}</div>
                {competitors.map((c) => (
                  <div 
                    key={c.name} 
                    className="p-4 text-[13px] text-[#8C9BAB] bg-white hover:bg-[#F9F8F5] transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {c[header.key as keyof typeof c]}
                  </div>
                ))}
                <div 
                  className="p-4 text-[13px] text-[#0C1E35] font-medium bg-[#FAFCFF]"
                >
                  {mawrid[header.key as keyof typeof mawrid]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Framing Line */}
        <p className="text-[15px] text-[#5A6A7D] mt-8 text-center animate-fade-up" style={{ fontWeight: 300 }}>
          Kaso validates the market. Choco proves the model. We are building what neither can become in KSA.
        </p>
      </div>
    </section>
  )
}
