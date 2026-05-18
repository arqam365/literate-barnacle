'use client'

import { useEffect, useRef } from 'react'

const products = [
  {
    name: 'Restaurant App',
    tag: 'Mobile · KMP',
    features: [
      'Supplier discovery',
      'Catalog browsing',
      'Multi-supplier cart',
      'Pay Now / BNPL',
      'Order tracking',
      'ZATCA invoice center',
      'Spend analytics',
      'Arabic RTL'
    ]
  },
  {
    name: 'Supplier Dashboard',
    tag: 'Web · Next.js',
    features: [
      'Catalog management',
      'Order intake queue',
      'Accept/partial/reject',
      'Auto-generated ZATCA invoices',
      'Payout reconciliation',
      'Customer fill-rate scorecard'
    ]
  },
  {
    name: 'Admin & Operations',
    tag: 'Web · Next.js',
    features: [
      'Restaurant KYC approvals',
      'Supplier onboarding',
      'Order monitoring',
      'Dispute resolution',
      'Payout management',
      'GMV analytics',
      'Compliance audit log'
    ]
  },
  {
    name: 'Analytics & Intelligence Layer',
    tag: 'Internal',
    features: [
      'Procurement behavior signals',
      'Supplier performance index',
      'Payment pattern modeling',
      'Underwriting data pipeline',
      'Foodics POS integration',
      'SAMA Open Banking (Phase 3)'
    ]
  }
]

export function Products() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="products">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-[640px] mb-12 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Product Ecosystem
          </span>
          <h2 
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            Four surfaces. One unified platform.
          </h2>
        </div>

        {/* Products Grid - 2x2 */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 animate-fade-up"
          style={{
            gap: '1px',
            background: '#E2DFD9',
            border: '1px solid #E2DFD9',
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          {products.map((product, index) => (
            <div key={index} className="bg-white p-8">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#E2DFD9]">
                <h3 className="text-[18px] text-[#0C1E35] font-medium">{product.name}</h3>
                <span 
                  className="text-[11px] font-medium text-[#5A6A7D] uppercase"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {product.tag}
                </span>
              </div>
              
              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-[14px] text-[#5A6A7D]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#0B6644] flex-shrink-0">
                      <path d="M11.5 4L5.5 10L2.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontWeight: 300 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
