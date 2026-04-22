import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CelebritiesPage() {
  const celebrities = [
    '/images/celebrities/with celebrity five.jpeg',
    '/images/celebrities/with celebrity four.jpeg',
    '/images/celebrities/with celebrity six.jpeg',
    '/images/celebrities/with celebrity three.jpeg',
    '/images/celebrities/with prabhu deva.jpeg',
    '/images/celebrities/with celebrity two.jpeg',
    '/images/celebrities/with-celebrity-one.jpeg',
  ]

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[5%]">
        <div className="text-center mb-16">
          <div className="section-label mb-4">INDUSTRY EXPOSURE</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Celebrity <em className="gold-text not-italic">Moments</em>
          </h1>
          <p className="text-[#888] max-w-2xl mx-auto text-[16px] md:text-[18px]">
            Sharing the stage and moments with legends of the dance and entertainment industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {celebrities.map((celeb, i) => (
            <div key={i} className="group relative rounded-[16px] overflow-hidden bg-[#1A1A1A] border border-[#c9a84c33] aspect-square">
              <img src={celeb} alt={`Celebrity ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="btn-outline">
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
