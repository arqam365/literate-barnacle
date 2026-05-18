import Link from 'next/link'

const footerLinks = {
  Platform: [
    { label: 'Supplier Network', href: '#platform' },
    { label: 'Ordering System', href: '#products' },
    { label: 'Payments', href: '#finance' },
    { label: 'Financing', href: '#finance' },
    { label: 'ZATCA Invoicing', href: '#compliance' },
    { label: 'Analytics', href: '#data-moat' },
  ],
  Company: [
    { label: 'About', href: '#thesis' },
    { label: 'Investors', href: '#why-saudi' },
    { label: 'Partner Program', href: '#thesis' },
  ],
  Contact: [
    { label: 'Riyadh, Saudi Arabia', href: '#', isText: true },
    { label: 'contact@mawrid.sa', href: 'mailto:contact@mawrid.sa' },
  ],
}

const trustBadges = ['ZATCA Phase 2', 'PDPL Compliant', 'SAMA Ecosystem', 'AWS Bahrain']

export function Footer() {
  return (
    <footer className="bg-[#0C1E35] border-t border-white/[0.07]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-[26px] h-[26px] bg-white rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#0C1E35]">
                  <rect x="1" y="1" width="5" height="5" fill="currentColor" opacity="0.6" />
                  <rect x="8" y="1" width="5" height="5" fill="currentColor" />
                  <rect x="1" y="8" width="5" height="5" fill="currentColor" />
                  <rect x="8" y="8" width="5" height="5" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <span className="font-serif text-white text-lg font-semibold" style={{ letterSpacing: '-0.025em' }}>
                Mawrid
              </span>
            </Link>
            <p className="text-[14px] text-white/50 mb-6" style={{ fontWeight: 300, lineHeight: 1.5 }}>
              Procurement infrastructure for Saudi Arabia.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span 
                  key={badge}
                  className="text-[10px] font-medium text-white/35 uppercase border border-white/15 px-2 py-1 rounded"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[13px] font-medium text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isText ? (
                      <span
                        className="text-[13px] text-white/50"
                        style={{ fontWeight: 300 }}
                      >
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.07]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright & Legal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p className="text-[13px] text-white/30" style={{ fontWeight: 300 }}>
                2026 Mawrid Technologies. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">
                  Terms
                </Link>
                <Link href="#" className="text-[12px] text-white/30 hover:text-white/50 transition-colors">
                  Security
                </Link>
              </div>
            </div>

            {/* Security Note */}
            <div className="flex items-center">
              <p className="text-[11px] text-white/25" style={{ fontWeight: 300 }}>
                Enterprise-grade encryption. In-Kingdom data residency. SOC 2 in progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
