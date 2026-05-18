'use client'

import { useEffect, useRef } from 'react'

const paths = [
  {
    number: '01',
    title: 'Pay Now',
    methods: 'Mada · Apple Pay · STC Pay',
    detail: 'Settlement to supplier T+1 via escrow',
    active: true
  },
  {
    number: '02',
    title: 'Pay in 30',
    methods: 'Tabby or Tamara (SAMA-licensed BNPL)',
    detail: 'Fintech carries credit risk. Not us.',
    active: false
  },
  {
    number: '03',
    title: 'Credit Line',
    methods: 'Lendo or Forus (CMA-licensed)',
    detail: 'Revolving credit for chain accounts. Underwritten on platform order data.',
    active: false
  }
]

export function Finance() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="finance">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text */}
          <div className="animate-fade-up">
            <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
              Embedded Finance
            </span>
            <h2 
              className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
              style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
            >
              Credit infrastructure built into every order.
            </h2>
            <p className="text-[17px] text-[#5A6A7D] mb-6" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              Every checkout presents three payment paths. Instant settlement for suppliers. 
              Working capital flexibility for restaurants. Risk carried by licensed fintechs, not by us.
            </p>
            <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
              This is not a payment gateway. This is procurement finance infrastructure — 
              the layer that makes B2B transactions flow like consumer commerce.
            </p>
          </div>

          {/* Right Column - Payment Paths Card */}
          <div className="animate-fade-up">
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden bg-white">
              {paths.map((path, index) => (
                <div 
                  key={path.number}
                  className={`p-6 flex gap-4 ${index !== paths.length - 1 ? 'border-b border-[#E2DFD9]' : ''}`}
                >
                  <div 
                    className="w-1 self-stretch rounded-full"
                    style={{ backgroundColor: path.active ? '#0C1E35' : '#E2DFD9' }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[11px] text-[#8C9BAB]">PATH {path.number}</span>
                      <span className="text-[15px] text-[#0C1E35] font-medium">{path.title}</span>
                    </div>
                    <p className="text-[14px] text-[#5A6A7D] mb-1">{path.methods}</p>
                    <p className="text-[13px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>{path.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Insight */}
            <p 
              className="font-serif text-[18px] text-[#0C1E35] italic mt-8"
              style={{ lineHeight: 1.5 }}
            >
              &ldquo;The underwriting data we accumulate is the asset fintechs cannot replicate without us.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
