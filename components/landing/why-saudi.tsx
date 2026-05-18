'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: 'SAR 112B', label: 'GCC F&B sector, 2026' },
  { value: '72%', label: 'Restaurant operators still using WhatsApp for procurement' },
  { value: '6.1%', label: 'Annual F&B market CAGR through 2031' },
  { value: 'Zero', label: 'Fully ZATCA-compliant B2B procurement platforms in market today' }
]

export function WhySaudi() {
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
    <section ref={sectionRef} className="py-24" id="why-saudi">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text */}
          <div className="animate-fade-up">
            <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
              The Market
            </span>
            <h2 
              className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
              style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
            >
              The largest untouched procurement opportunity in the GCC.
            </h2>
            <p className="text-[17px] text-[#5A6A7D] mb-8" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              Vision 2030 is transforming Saudi Arabia into a hospitality powerhouse. Restaurant count is 
              growing at 8% annually. Yet procurement infrastructure remains stuck in the pre-digital era.
            </p>
            <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              SAMA&apos;s fintech leadership has created the rails for embedded finance. Phase 2 ZATCA mandates 
              are forcing digital invoicing adoption. The structural conditions for procurement digitization 
              have never been stronger. The window is now.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="animate-fade-up">
            <div 
              className="grid grid-cols-2"
              style={{
                gap: '1px',
                background: '#E2DFD9',
                border: '1px solid #E2DFD9',
                borderRadius: '10px',
                overflow: 'hidden'
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 lg:p-8">
                  <span 
                    className="font-serif text-[32px] lg:text-[40px] text-[#0C1E35] font-semibold block mb-2"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
