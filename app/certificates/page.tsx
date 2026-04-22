import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CertificatesPage() {
  const certificates = [
    '/images/certificates/appreciation certificte.jpeg',
    '/images/certificates/international pride certificate.jpeg',
    '/images/certificates/legend-certificate.jpeg',
    '/images/certificates/pride of tamilnadu certificate.jpeg',
    '/images/certificates/street dance certificate.jpeg',
    '/images/certificates/with certificate.jpeg',
    '/images/certificates/world-record-certificate.jpeg',
    '/images/certificates/ceritificate-one.jpeg',
  ]

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[5%]">
        <div className="text-center mb-16">
          <div className="section-label mb-4">OUR ACHIEVEMENTS</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Certificates & <em className="gold-text not-italic">Awards</em>
          </h1>
          <p className="text-[#888] max-w-2xl mx-auto text-[16px] md:text-[18px]">
            Recognizing excellence and dedication in the world of dance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, i) => (
            <div key={i} className="group relative rounded-[16px] overflow-hidden bg-[#1A1A1A] border border-[#c9a84c33] aspect-[4/3]">
              <img src={cert} alt={`Certificate ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
