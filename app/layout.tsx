import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Step Up Dance Academy | Best Dance Classes for Kids & Adults',
  description: 'Professional dance training for children and adults. Trendy, Bollywood, Hip-Hop, Contemporary, and Commercial Dance. Award-winning academy with 1000+ students.',
  keywords: ['dance academy','dance classes for kids','dance classes for adults','Bollywood dance','trendy dance','commercial dance','hip hop dance','contemporary dance','dance school near me','Step Up Dance Academy'],
  icons: {
    icon: '/images/logo/step-up-dance-logo.jpeg',
    shortcut: '/images/logo/step-up-dance-logo.jpeg',
    apple: '/images/logo/step-up-dance-logo.jpeg',
  },
  openGraph: {
    title: 'Step Up Dance Academy | Train. Perform. Shine.',
    description: 'Award-winning dance training for children and adults.',
    type: 'website',
    images: [
      {
        url: '/images/logo/step-up-dance-logo.jpeg',
        width: 512,
        height: 512,
        alt: 'Step Up Dance Academy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Step Up Dance Academy | Train. Perform. Shine.',
    description: 'Award-winning dance training for children and adults.',
    images: ['/images/logo/step-up-dance-logo.jpeg'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
