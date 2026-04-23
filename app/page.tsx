import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import AdultPrograms from '@/components/AdultPrograms'
import WhyUs from '@/components/WhyUs'
import Students from '@/components/Students'
import CelebritySection from '@/components/CelebritySection'
import Trainer from '@/components/Trainer'
import Achievements from '@/components/Achievements'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Trainer />
      <Programs />
      <WhyUs />
      <Students />
      <Achievements />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}
