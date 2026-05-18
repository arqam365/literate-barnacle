'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#platform', label: 'Platform' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#investors', label: 'Investors' },
    { href: '#team', label: 'Team' },
    { href: '#access', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[58px] transition-colors duration-200 border-b border-[#E2DFD9]`}
      style={{
        backgroundColor: isScrolled ? 'rgba(246,245,241,0.98)' : 'rgba(246,245,241,0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-[26px] h-[26px] bg-[#0C1E35] rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
              <rect x="1" y="1" width="5" height="5" fill="currentColor" opacity="0.6" />
              <rect x="8" y="1" width="5" height="5" fill="currentColor" />
              <rect x="1" y="8" width="5" height="5" fill="currentColor" />
              <rect x="8" y="8" width="5" height="5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <span className="font-serif text-[#0C1E35] text-lg font-semibold" style={{ letterSpacing: '-0.025em' }}>
            Mawrid
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#5A6A7D] hover:text-[#0C1E35] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="#access" className="btn-outline text-[13px] py-2 px-4">
            Request Access
          </Link>
          <Link href="#partner" className="btn-primary text-[13px] py-2 px-4">
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-[#0C1E35]" aria-label="Toggle menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#F6F5F1]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[15px] text-[#2D3D50] hover:text-[#0C1E35] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E2DFD9]">
                <Link href="#access" className="btn-outline text-center text-[14px]">
                  Request Access
                </Link>
                <Link href="#partner" className="btn-primary text-center text-[14px]">
                  Partner With Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
