import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Palveet Saluja - Software Engineer',
  description: 'Full-stack engineer building AI-powered products and scalable systems',
  keywords: ['Software Engineer', 'Full-stack Developer', 'iOS Developer', 'AI/ML Engineer', 'React', 'Next.js', 'Swift'],
  authors: [{ name: 'Palveet Saluja' }],
  openGraph: {
    title: 'Palveet Saluja - Software Engineer',
    description: 'Full-stack engineer building AI-powered products and scalable systems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}



