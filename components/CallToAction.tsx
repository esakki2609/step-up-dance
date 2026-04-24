'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section id="contact" className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Gold Radial Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 py-20 px-6 md:py-24 lg:py-28 text-center max-w-[800px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="section-label">CONTACT US</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
            Get in <em className="gold-text not-italic">Touch</em>
          </h2>
          
          <div className="bg-[#111] border border-[#c9a84c30] rounded-[16px] p-8 md:p-10 mb-10 text-left md:text-center shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Step Up Dance Academy</h3>
            <p className="text-[#888] text-[15px] md:text-[16px] leading-[1.8] mb-6">
              KSP Complex, Opposite Thiyagaraja Nagar,<br className="hidden md:block" />
              Opposite E B Office, Sivanthi Patti Road,<br className="hidden md:block" />
              Sivanthipatti, Tirunelveli-627011, Tamil Nadu
            </p>
            <p className="text-[#C9A84C] text-[18px] font-bold tracking-[1px] mb-2">
              📞 +91 6383788537
            </p>
          </div>

          <div className="flex justify-center w-full">
            <a 
              href="https://wa.me/916383788537" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-[#FAFAFA] font-bold py-[16px] px-[40px] rounded-[50px] text-[15px] tracking-[1px] uppercase transition-all hover:opacity-85 hover:scale-[1.03] shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
