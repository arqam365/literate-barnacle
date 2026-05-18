'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function Thesis() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#0C1E35]" id="thesis">
      <div className="max-w-[900px] mx-auto px-5 lg:px-10">
        {/* Eyebrow */}
        <span 
          className="text-[11px] font-medium text-white/40 uppercase block mb-8 animate-fade-up"
          style={{ letterSpacing: '0.09em' }}
        >
          Thesis
        </span>

        {/* Headline Quote */}
        <blockquote 
          className="font-serif text-[28px] md:text-[40px] lg:text-[48px] text-white italic mb-10 animate-fade-up"
          style={{ lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          &ldquo;The next layer of restaurant infrastructure in the GCC will not be a marketplace. It will be an operating system.&rdquo;
        </blockquote>

        {/* Body Text */}
        <p 
          className="text-[17px] text-white/60 max-w-[640px] mb-12 animate-fade-up"
          style={{ fontWeight: 300, lineHeight: 1.6 }}
        >
          We are building the procurement rail that every Saudi restaurant will need to operate compliantly, 
          efficiently, and at scale. The data we accumulate is the defensibility. The compliance stack is the moat.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up">
          <Link href="#access" className="btn-white">
            Request Early Access
          </Link>
          <Link href="#deck" className="btn-outline-white">
            Investor Deck
          </Link>
        </div>
      </div>
    </section>
  )
}
