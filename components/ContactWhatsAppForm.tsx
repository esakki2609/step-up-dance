'use client'

import { FormEvent, useState } from 'react'

const WHATSAPP_NUMBER = '919952162600'

export default function ContactWhatsAppForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedPhone) {
      return
    }

    const text = [
      'Hello Step Up Dance Academy,',
      '',
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Message: ${trimmedMessage || 'Interested in admissions and class timings.'}`,
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your Name"
        className="w-full bg-[#0b0b0b] border border-[#2e2e2e] rounded-lg px-4 py-3 text-[#f2f2f2] focus:outline-none focus:border-[#C9A84C]"
      />
      <input
        type="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone Number"
        className="w-full bg-[#0b0b0b] border border-[#2e2e2e] rounded-lg px-4 py-3 text-[#f2f2f2] focus:outline-none focus:border-[#C9A84C]"
      />
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Your Message"
        rows={4}
        className="w-full bg-[#0b0b0b] border border-[#2e2e2e] rounded-lg px-4 py-3 text-[#f2f2f2] focus:outline-none focus:border-[#C9A84C]"
      />
      <button type="submit" className="btn-gold w-full text-center active:scale-95">
        Submit Enquiry
      </button>
    </form>
  )
}
