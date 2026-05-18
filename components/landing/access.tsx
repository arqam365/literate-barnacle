'use client'

import { useEffect, useRef, useState } from 'react'

type FormType = 'investor' | 'restaurant' | 'supplier' | 'partner'
type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  company: string
  contact: string
  city: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', company: '', contact: '', city: '', message: '' }

const TABS: { id: FormType; label: string; cta: string; icon: string }[] = [
  { id: 'investor', label: 'Investor Deck', cta: 'Request Deck', icon: '↗' },
  { id: 'restaurant', label: 'Early Access', cta: 'Join Waitlist', icon: '→' },
  { id: 'supplier', label: 'Supplier Sign-Up', cta: 'Apply as Supplier', icon: '→' },
  { id: 'partner', label: 'Partner With Us', cta: 'Send Enquiry', icon: '→' },
]

const CONFIG: Record<FormType, {
  fields: (keyof FormState)[]
  placeholders: Partial<Record<keyof FormState, string>>
  helpText: string
  successTitle: string
  successBody: string
  deckLink?: boolean
}> = {
  investor: {
    fields: ['name', 'email', 'company', 'contact'],
    placeholders: {
      name: 'Your name',
      email: 'Email address',
      company: 'Fund or firm name',
      contact: 'WhatsApp or phone',
    },
    helpText: 'Deck delivered to your email within 24 hours.',
    successTitle: 'Request received.',
    successBody: 'We\'ll send the investor deck to your email within 24 hours. No follow-up unless you request one.',
    deckLink: true,
  },
  restaurant: {
    fields: ['name', 'email', 'company', 'city', 'contact'],
    placeholders: {
      name: 'Your name',
      email: 'Email address',
      company: 'Restaurant name',
      city: 'Riyadh · Jeddah · Other',
      contact: 'WhatsApp number',
    },
    helpText: 'We\'ll contact you within 48 hours to arrange a demo.',
    successTitle: 'You\'re on the waitlist.',
    successBody: 'Riyadh pilot is limited to 30 restaurants. We\'ll be in touch within 48 hours to confirm your spot and arrange a demo.',
  },
  supplier: {
    fields: ['name', 'email', 'company', 'city', 'contact', 'message'],
    placeholders: {
      name: 'Your name',
      email: 'Email address',
      company: 'Company name',
      city: 'City',
      contact: 'WhatsApp or phone',
      message: 'What do you supply? (produce, dry goods, dairy, specialty…)',
    },
    helpText: 'Riyadh pilot open to 15 anchor suppliers.',
    successTitle: 'Application received.',
    successBody: 'We review every supplier application. Expect a call within 48 hours. Riyadh pilot targets 15 anchor suppliers.',
  },
  partner: {
    fields: ['name', 'email', 'company', 'contact', 'message'],
    placeholders: {
      name: 'Your name',
      email: 'Email address',
      company: 'Organisation name',
      contact: 'WhatsApp or phone',
      message: 'Describe the opportunity — integration, distribution, investment, advisory…',
    },
    helpText: 'We review every partnership enquiry. Response within 3 business days.',
    successTitle: 'Enquiry sent.',
    successBody: 'We review every partnership enquiry personally. You\'ll hear from us within 3 business days.',
  },
}

export function Access() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<FormType>('investor')
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<FormState>(EMPTY)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleTabChange = (tab: FormType) => {
    setActiveTab(tab)
    setStatus('idle')
    setForm(EMPTY)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, ...form }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const cfg = CONFIG[activeTab]
  const currentTab = TABS.find(t => t.id === activeTab)!

  return (
    <section ref={sectionRef} className="py-24" id="access">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="max-w-[600px] mb-14 animate-fade-up">
          <span className="text-[11px] font-medium text-[#1A4BD8] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
            Get Involved
          </span>
          <h2
            className="font-serif text-[32px] md:text-[44px] text-[#0C1E35] font-semibold mb-6"
            style={{ lineHeight: 1.15, letterSpacing: '-0.018em' }}
          >
            The window is open.{' '}
            <span className="italic font-semibold">The build starts now.</span>
          </h2>
          <p className="text-[17px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
            Investor, restaurant, supplier, or partner — the Riyadh pilot cohort is limited.
            Priority goes to the first commitments.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* ── Form Column ── */}
          <div className="animate-fade-up">

            {/* Tab strip */}
            <div className="flex mb-6 rounded-[8px] overflow-hidden border border-[#E2DFD9] bg-[#F6F5F1]">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="flex-1 py-3 text-[12px] font-medium transition-all duration-150 relative"
                  style={{
                    letterSpacing: '0.025em',
                    background: activeTab === tab.id ? '#0C1E35' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : '#5A6A7D',
                    borderRight: '1px solid #E2DFD9',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Success state */}
            {status === 'success' ? (
              <div className="border border-[#E2DFD9] rounded-[10px] bg-white overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-9 h-9 rounded-full bg-[#0B6644] flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[17px] text-[#0C1E35] font-medium mb-1">{cfg.successTitle}</h3>
                      <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                        {cfg.successBody}
                      </p>
                    </div>
                  </div>

                  {cfg.deckLink && (
                    <div className="bg-[#F6F5F1] rounded-[8px] p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[13px] text-[#0C1E35] font-medium">Mawrid Investor Deck</p>
                        <p className="text-[12px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>Will be sent to your email · PDF</p>
                      </div>
                      <a
                        href="mailto:contact@mawrid.sa?subject=Investor Deck Follow-up"
                        className="btn-primary text-[12px] py-2 px-4"
                      >
                        Email us directly
                      </a>
                    </div>
                  )}

                  <button
                    onClick={() => { setStatus('idle'); setForm(EMPTY) }}
                    className="mt-5 text-[13px] text-[#1A4BD8] hover:underline"
                  >
                    Submit another enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {cfg.fields.map((field) => (
                  field === 'message' ? (
                    <textarea
                      key={field}
                      placeholder={cfg.placeholders[field]}
                      value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-[#E2DFD9] rounded-[7px] text-[14px] text-[#0C1E35] bg-white outline-none focus:border-[#0C1E35] transition-colors resize-none placeholder:text-[#C5C0B8]"
                      style={{ fontWeight: 300 }}
                    />
                  ) : (
                    <input
                      key={field}
                      type={field === 'email' ? 'email' : 'text'}
                      required={field !== 'city'}
                      placeholder={cfg.placeholders[field]}
                      value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      className="w-full px-4 py-3 border border-[#E2DFD9] rounded-[7px] text-[14px] text-[#0C1E35] bg-white outline-none focus:border-[#0C1E35] transition-colors placeholder:text-[#C5C0B8]"
                      style={{ fontWeight: 300 }}
                    />
                  )
                ))}

                {status === 'error' && (
                  <p className="text-[13px] text-red-500 py-1">
                    Something went wrong — please email us directly at{' '}
                    <a href="mailto:contact@mawrid.sa" className="underline">contact@mawrid.sa</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-3.5 text-[13px]"
                  style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="16" strokeDashoffset="8" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </span>
                  ) : currentTab.cta}
                </button>

                <p className="text-[12px] text-[#8C9BAB] text-center pt-1" style={{ fontWeight: 300 }}>
                  {cfg.helpText}
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4 animate-fade-up">

            {/* Status card */}
            <div className="border border-[#E2DFD9] rounded-[10px] overflow-hidden">
              <div className="px-5 py-4 bg-[#0C1E35] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0B6644] animate-pulse" />
                <span className="text-[12px] font-medium text-white/80">Pre-Seed Stage · Phase 0 in Progress</span>
              </div>
              <div className="bg-white p-5 space-y-4">
                {[
                  { label: 'Customer discovery', value: 'In progress', active: true },
                  { label: 'MISA license application', value: 'Pending', active: false },
                  { label: 'ZATCA partner selection', value: 'Evaluating', active: false },
                  { label: 'Riyadh pilot cohort', value: '0 / 30 restaurants', active: false },
                  { label: 'Seed raise target', value: 'Month 12–16', active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[13px] text-[#5A6A7D]" style={{ fontWeight: 300 }}>{item.label}</span>
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: item.active ? '#0B6644' : '#8C9BAB' }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="border border-[#E2DFD9] rounded-[10px] p-5 bg-white">
              <span className="text-[11px] font-medium text-[#8C9BAB] uppercase block mb-4" style={{ letterSpacing: '0.09em' }}>
                Direct Contact
              </span>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] text-[#8C9BAB] mb-0.5" style={{ letterSpacing: '0.05em' }}>EMAIL</p>
                  <a
                    href="mailto:contact@mawrid.sa"
                    className="text-[14px] text-[#0C1E35] hover:text-[#1A4BD8] transition-colors"
                  >
                    contact@mawrid.sa
                  </a>
                </div>
                <div>
                  <p className="text-[11px] text-[#8C9BAB] mb-0.5" style={{ letterSpacing: '0.05em' }}>LOCATION</p>
                  <p className="text-[14px] text-[#5A6A7D]" style={{ fontWeight: 300 }}>Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>

            {/* Deck download */}
            <div className="border border-[#E2DFD9] rounded-[10px] p-5 bg-[#F6F5F1]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[13px] text-[#0C1E35] font-medium">Investor Deck</p>
                  <p className="text-[12px] text-[#8C9BAB]" style={{ fontWeight: 300 }}>Mawrid · KSA B2B Procurement</p>
                </div>
                <span className="text-[10px] font-medium text-[#1A4BD8] uppercase border border-[#1A4BD840] px-2 py-1 rounded" style={{ letterSpacing: '0.05em' }}>
                  PDF
                </span>
              </div>
              <button
                onClick={() => handleTabChange('investor')}
                className="btn-primary w-full justify-center py-2.5 text-[12px]"
              >
                Request Deck
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
