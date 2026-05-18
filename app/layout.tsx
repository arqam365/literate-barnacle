import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mawrid | Restaurant Procurement Operating System for Saudi Arabia',
  description: 'Ordering, supplier operations, payments, financing, and ZATCA-native workflows in one operational layer. The procurement infrastructure for Saudi restaurants.',
  keywords: ['restaurant procurement', 'Saudi Arabia', 'ZATCA', 'B2B', 'supply chain', 'fintech', 'Vision 2030'],
  authors: [{ name: 'Mawrid' }],
  openGraph: {
    title: 'Mawrid | Restaurant Procurement Operating System',
    description: 'Procurement infrastructure for Saudi restaurants.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mawrid | Restaurant Procurement Operating System',
    description: 'Procurement infrastructure for Saudi restaurants.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
