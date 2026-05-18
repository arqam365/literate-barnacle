'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function Hero() {
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
    <section ref={sectionRef} className="pt-[58px]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-start">
          {/* Left Column - Text (Left-aligned, NOT centered) */}
          <div className="animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[18px] h-px bg-[#1A4BD8]" />
              <span className="text-[11px] font-medium text-[#1A4BD8] uppercase" style={{ letterSpacing: '0.09em' }}>
                Saudi Arabia · B2B Procurement Infrastructure
              </span>
            </div>

            {/* Headline - Spectral serif */}
            <h1 
              className="font-serif text-[40px] md:text-[60px] lg:text-[72px] text-[#0C1E35] font-bold mb-6"
              style={{ lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Procurement infrastructure<br />
              <span className="italic font-semibold">for Saudi restaurants.</span>
            </h1>

            {/* Subheadline - IBM Plex Sans */}
            <p 
              className="text-[17px] lg:text-[19px] text-[#5A6A7D] max-w-[520px] mb-10"
              style={{ fontWeight: 300, lineHeight: 1.6 }}
            >
              Ordering, supplier operations, embedded payments, BNPL financing, and ZATCA-native invoicing in one operational layer.
            </p>

            {/* CTAs - Left-aligned */}
            <div className="flex flex-wrap gap-3">
              <Link href="#access" className="btn-primary">
                Request Access
              </Link>
              <Link href="#partner" className="btn-outline">
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Right Column - Operational Visualization */}
          <div className="animate-fade-up lg:mt-4">
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden bg-white">
              {/* Header Bar */}
              <div className="bg-[#F6F5F1] px-4 py-3 flex items-center justify-between border-b border-[#E2DFD9]">
                <span className="text-[11px] font-medium text-[#5A6A7D] uppercase" style={{ letterSpacing: '0.09em' }}>
                  Procurement Lifecycle · Live
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B6644]" />
                  <span className="text-[11px] font-medium text-[#0B6644] uppercase" style={{ letterSpacing: '0.09em' }}>
                    Active
                  </span>
                </div>
              </div>

              {/* Data Grid - 4 columns */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#E2DFD9]">
                <div className="p-4 border-r border-b lg:border-b-0 border-[#E2DFD9]">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                    Order Intake
                  </span>
                  <p className="text-[13px] text-[#0C1E35] font-medium mb-1">Al Fakhir Kitchen, RUH</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">4 SKUs</p>
                  <p className="font-mono text-[11px] text-[#0C1E35] font-medium">SAR 3,240</p>
                </div>
                <div className="p-4 border-b lg:border-b-0 lg:border-r border-[#E2DFD9]">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                    Supplier Match
                  </span>
                  <p className="text-[13px] text-[#0C1E35] font-medium mb-1">AlSaad Fresh Dist.</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">Fill: 98.4%</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">ETA: 16hrs</p>
                </div>
                <div className="p-4 border-r border-[#E2DFD9]">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                    Payment Routing
                  </span>
                  <p className="text-[13px] text-[#0C1E35] font-medium mb-1">Mada Confirmed</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">Tabby BNPL</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">T+1 Settlement</p>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-3" style={{ letterSpacing: '0.09em' }}>
                    ZATCA Cleared
                  </span>
                  <p className="text-[13px] text-[#0C1E35] font-medium mb-1">Phase 2 Fatoora</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">QR Signed</p>
                  <p className="font-mono text-[11px] text-[#5A6A7D]">Ref #8841</p>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="grid grid-cols-3 divide-x divide-[#E2DFD9]">
                <div className="p-4 text-center">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-1" style={{ letterSpacing: '0.09em' }}>
                    GMV Today
                  </span>
                  <span className="font-mono text-[13px] text-[#0C1E35] font-medium">SAR 284K</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-1" style={{ letterSpacing: '0.09em' }}>
                    Active Orders
                  </span>
                  <span className="font-mono text-[13px] text-[#0C1E35] font-medium">147</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-[10px] font-medium text-[#8C9BAB] uppercase block mb-1" style={{ letterSpacing: '0.09em' }}>
                    Avg Fill
                  </span>
                  <span className="font-mono text-[13px] text-[#0C1E35] font-medium">97.2%</span>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 justify-center lg:justify-start">
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase" style={{ letterSpacing: '0.09em' }}>
                ZATCA Phase 2 Certified
              </span>
              <span className="text-[#C9C5BC]">·</span>
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase" style={{ letterSpacing: '0.09em' }}>
                PDPL Compliant
              </span>
              <span className="text-[#C9C5BC]">·</span>
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase" style={{ letterSpacing: '0.09em' }}>
                Mada Enabled
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
