import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealSection from '@/components/RevealSection'
import ContactWhatsAppForm from '@/components/ContactWhatsAppForm'

export const metadata: Metadata = {
  title: 'Step Up Dance Academy | Professional Dance Training in Tirunelveli',
  description:
    'Join Step Up Dance Academy for professional dance classes, curriculum-based training, certification support, stage performance opportunities, and industry-focused mentorship for kids and adults.',
  keywords: [
    'dance academy in tirunelveli',
    'professional dance classes',
    'dance master training',
    'dance curriculum',
    'dance certification',
    'bollywood dance classes',
    'hip hop dance classes',
    'kids dance classes',
    'adult dance classes',
    'choreography training',
  ],
}

export default function Home() {
  const curriculum = [
    'Foundation, rhythm, posture, and body alignment',
    'Bollywood, hip-hop, freestyle, and fusion choreography',
    'Stage performance skills and team synchronization',
    'Competition and event preparation with rehearsal plans',
    'Music interpretation, confidence, and expressive movement',
    'Assessment-based progression for long-term growth',
  ]

  const faqItems = [
    {
      question: 'Who can join Step Up Dance Academy?',
      answer:
        'We train kids, teens, college students, and adults with separate learning paths for beginners and advanced performers.',
    },
    {
      question: 'Do you provide certificates after training?',
      answer:
        'Yes. Students receive certificates through academy milestones, performances, and selected recognition programs.',
    },
    {
      question: 'Are classes available for working professionals?',
      answer:
        'Yes. We offer flexible batch timings, including evening and weekend slots for professionals and college students.',
    },
    {
      question: 'Can students participate in stage shows and competitions?',
      answer:
        'Absolutely. We regularly prepare students for stage performances, cultural events, and competition-level presentations.',
    },
  ]

  const studentDanceImages = [
    '/images/students/students dance five.jpeg',
    '/images/students/students dance four.jpeg',
    '/images/students/students dance six.jpeg',
    '/images/students/students dance three.jpeg',
  ]

  const certificates = [
    { src: '/images/certificates/legend-certificate.jpeg', title: 'The Little Legends Certificate', year: 2025 },
    { src: '/images/certificates/breaking international certificate.jpeg', title: 'Breaking International Certificate', year: 2024 },
    { src: '/images/certificates/dance done certificate.jpeg', title: 'Dance Done Certificate', year: 2024 },
    { src: '/images/certificates/international pride certificate (2).jpeg', title: 'International Pride Certificate', year: 2024 },
    { src: '/images/certificates/world-record-certificate.jpeg', title: 'World Record Certificate', year: 2023 },
    { src: '/images/certificates/with certificate.jpeg', title: 'Performance Recognition Certificate', year: 2023 },
    { src: '/images/certificates/pride of tamilnadu certificate.jpeg', title: 'Pride of Tamil Nadu Certificate', year: 2023 },
    { src: '/images/certificates/street dance certificate.jpeg', title: 'Street Dance Certificate', year: 2023 },
    { src: '/images/certificates/international pride certificate.jpeg', title: 'International Pride Certificate', year: 2022 },
    { src: '/images/certificates/appreciation certificte.jpeg', title: 'Appreciation Certificate', year: 2022 },
    { src: '/images/certificates/ceritificate-one.jpeg', title: 'Certificate of Achievement', year: 2021 },
  ]

  return (
    <main>
      <Navbar />

      <section className="relative min-h-[86svh] w-full flex items-center pt-[92px] pb-[12px] overflow-hidden scroll-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_dance_crew_2.jpg"
            alt="Step Up Dance Academy students performing"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[50%_28%] md:object-center"
            style={{ filter: 'brightness(1.16) contrast(1.08) saturate(1.08)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/35 to-[#0A0A0A]/70" />
        </div>

        <div className="relative z-10 px-6 lg:px-[8%] max-w-[780px]">
          <span className="inline-block bg-[#c9a84c1a] border border-[#c9a84c59] text-[#C9A84C] text-[10px] tracking-[4px] py-[6px] px-[16px] rounded-[50px] mb-5 uppercase">
            Professional Dance Academy
          </span>
          <h1 className="text-[clamp(42px,6vw,74px)] font-black leading-[1.1] mb-5">
            Master Dance With Structured Training And Stage Confidence
          </h1>
          <p className="text-[15px] md:text-[17px] text-[#dddddd] leading-[1.8] max-w-[620px] mb-7">
            Step Up Dance Academy delivers curriculum-led dance education, performance training, and certification-focused guidance for children and adults who want professional growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/#contact-page"
              className="btn-gold active:scale-95"
            >
              Join Now
            </a>
            <a
              href="/#curriculum"
              className="btn-outline active:scale-95"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      <RevealSection id="academy-intro" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden border border-[#c9a84c30]">
            <Image
              src="/images/dance_master.jpeg"
              alt="Dance master at Step Up Dance Academy"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="section-label">Dance Master & Academy Intro</div>
            <h2 className="text-3xl md:text-5xl mb-5">Professional Mentorship For Serious Learners</h2>
            <p className="text-[#bfbfbf] leading-[1.9] mb-6">
              Our dance master trains students with a strong focus on foundation, discipline, choreography quality, and stage presentation. The academy is built for students who want real skill development instead of casual short-term practice.
            </p>
            <p className="text-[#bfbfbf] leading-[1.9]">
              Every batch follows a planned progression so students improve in technique, rhythm, expression, and performance confidence throughout the year.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="industry-contacts" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Industry Contacts</div>
          <h2 className="text-3xl md:text-5xl mb-7">Network That Supports Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'Choreographers and performance directors',
              'Event and cultural show organizers',
              'Studio collaborators and talent coordinators',
            ].map((item) => (
              <div key={item} className="gold-card !p-6 interactive-lift">
                <p className="text-[#e7e7e7] text-[16px] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="curriculum" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Curriculum</div>
          <h2 className="text-3xl md:text-5xl mb-7">Structured Dance Curriculum For Every Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {curriculum.map((item) => (
              <div key={item} className="border border-[#c9a84c26] rounded-xl p-5 bg-[#121212] interactive-lift">
                <p className="text-[#d5d5d5] leading-[1.8]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="certificates" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Certificates</div>
          <h2 className="text-3xl md:text-5xl mb-7">Achievement Certifications And Recognitions</h2>
          <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#c9a84c33_transparent]">
            <div className="flex gap-5 md:gap-6 min-w-max snap-x snap-mandatory">
              {certificates.map((certificate) => (
                <div
                  key={certificate.src}
                  className="w-[260px] md:w-[300px] shrink-0 snap-start bg-gradient-to-b from-[#171717] to-[#111111] rounded-2xl overflow-hidden border border-[#c9a84c40] interactive-lift"
                >
                  <div className="relative h-[320px] md:h-[360px] p-3">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0b0b0b]">
                      <Image
                        src={certificate.src}
                        alt={certificate.title}
                        fill
                        sizes="(max-width: 768px) 260px, 300px"
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] tracking-[2px] uppercase text-[#C9A84C]">Year</span>
                      <span className="text-[12px] font-semibold text-[#25D366]">{certificate.year}</span>
                    </div>
                    <p className="text-[14px] text-[#e8e8e8] leading-[1.5]">{certificate.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#8d8d8d] text-[13px] mt-4">
            Scroll horizontally to view all certificates (ordered by latest year first).
          </p>
        </div>
      </RevealSection>

      <RevealSection id="students-gallery" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="section-label">Students Dance & Certificate Images</div>
          <h2 className="text-3xl md:text-5xl mb-7">Student Performance Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {studentDanceImages.map((src, index) => (
              <div key={src} className="relative h-[300px] rounded-xl overflow-hidden border border-[#c9a84c33] interactive-lift">
                <Image
                  src={src}
                  alt={`Students dance training ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative h-[320px] rounded-xl overflow-hidden border border-[#c9a84c33] interactive-lift">
              <Image
                src="/images/students/with students certificates one.jpeg"
                alt="Students with certificates at Step Up Dance Academy"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[320px] rounded-xl overflow-hidden border border-[#c9a84c33] interactive-lift">
              <Image
                src="/images/students/with students certificates two.jpeg"
                alt="Students receiving dance certificates"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="faq" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="section-label">Frequently Asked Questions</div>
          <h2 className="text-3xl md:text-5xl mb-7">Everything Parents And Students Ask</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="bg-[#121212] border border-[#c9a84c26] rounded-xl p-5">
                <summary className="cursor-pointer text-[18px] text-[#f2f2f2] font-medium">{item.question}</summary>
                <p className="text-[#bbbbbb] leading-[1.8] mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact-page" className="py-8 md:py-10 px-6 lg:px-[6%] mixed-theme-section scroll-mt-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="section-label">Get In Touch</div>
            <h2 className="text-3xl md:text-5xl mb-5">Visit Or Contact Step Up Dance Academy</h2>
            <p className="text-[#c8c8c8] leading-[1.9] mb-6">
              KSP Complex, Opposite Thiyagaraja Nagar, Opposite E B Office, Sivanthi Patti Road, Sivanthipatti, Tirunelveli-627011, Tamil Nadu
            </p>
            <p className="text-[#e5e5e5] mb-2">Phone: +91 6383788537</p>
            <p className="text-[#e5e5e5] mb-3">Email: info@stepupdanceacademy.com</p>
            <p className="text-[#25D366] font-medium mb-8">WhatsApp us directly for admissions and class timings.</p>
            <a
              href="https://wa.me/916383788537"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold active:scale-95"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="bg-[#121212] border border-[#c9a84c33] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl mb-5">Send Enquiry</h3>
            <ContactWhatsAppForm />
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  )
}
