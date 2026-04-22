'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    { q: 'Do you offer dance classes for adult beginners?', a: 'Yes. We offer dedicated adult beginner batches in Bollywood, Contemporary, Classical and Fitness Dance. No prior experience needed.' },
    { q: 'What is the minimum age to join?', a: 'We accept students from age 3 in our Tiny Tots program.' },
    { q: 'Do adults get to perform on stage?', a: 'Absolutely. Adults participate in annual events, recitals and special performances alongside all students.' },
    { q: 'How long to learn Bollywood dance?', a: 'Most students become stage-ready within 3–6 months of regular practice.' },
    { q: 'Do you offer free trial classes?', a: 'Yes — your first class is completely free. Book via our form or WhatsApp.' },
    { q: 'What dance styles do you teach?', a: 'Classical, Bollywood, Hip-Hop, Contemporary, Fitness Dance and Yoga — for all ages from 3 to adult.' },
    { q: 'Is dance good for fitness and weight loss?', a: 'Yes. Dance burns 400–600 calories per hour and improves cardiovascular health, flexibility and muscle tone.' },
    { q: 'Are children and adult batches separate?', a: 'Yes. All batches are completely separate with age-appropriate content and teaching styles.' }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#0A0A0A] py-16 px-6 md:py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="section-label">QUESTIONS & ANSWERS</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked <em className="gold-text not-italic">Questions</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#c9a84c33] rounded-[10px] overflow-hidden bg-[#1A1A1A]"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#FAFAFA] pr-4">{faq.q}</span>
                <span className="text-[#C9A84C] text-xl transition-transform duration-300 transform" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-[#888] leading-[1.6]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
