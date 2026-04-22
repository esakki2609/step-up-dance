import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Step Up Dance Academy | Best Dance Classes for Kids & Adults',
  description: 'Professional dance training for children and adults. Classical, Bollywood, Hip-Hop, Contemporary, Fitness & Yoga. Award-winning academy with 1000+ students.',
  keywords: ['dance academy','dance classes for kids','dance classes for adults','Bollywood dance','classical dance','hip hop dance','contemporary dance','dance school near me','Step Up Dance Academy'],
  openGraph: {
    title: 'Step Up Dance Academy | Train. Perform. Shine.',
    description: 'Award-winning dance training for children and adults.',
    type: 'website',
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
