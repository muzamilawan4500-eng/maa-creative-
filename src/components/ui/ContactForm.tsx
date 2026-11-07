'use client'
import { useState } from 'react'

interface FormData {
  name: string
  brand: string
  email: string
  whatsapp: string
  category: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const categories = ['Clothing', 'Gym', 'E-commerce', 'Food & Restaurant', 'Perfume', 'Salon', 'Real Estate', 'Other']

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '', brand: '', email: '', whatsapp: '', category: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.brand.trim()) e.brand = 'Brand name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email'
    if (!formData.whatsapp.trim()) e.whatsapp = 'WhatsApp number is required'
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.whatsapp)) e.whatsapp = 'Enter a valid number'
    if (!formData.category) e.category = 'Please select a category'
    if (!formData.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // TODO: Replace NEXT_PUBLIC_FORMSPREE_ID in .env.local with your Formspree form ID
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID
    try {
      if (id) {
        const res = await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        setStatus(res.ok ? 'success' : 'error')
      } else {
        // Mailto fallback
        const sub = encodeURIComponent(`New inquiry from ${formData.brand}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nBrand: ${formData.brand}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nCategory: ${formData.category}\n\n${formData.message}`
        )
        const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'maapakaging@gmail.com'
        window.location.href = `mailto:${email}?subject=${sub}&body=${body}`
        setStatus('success')
      }
    } catch { setStatus('error') }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: '' }))
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-playfair font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-[#6B7280]">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  const inputCls = (f: string) =>
    `w-full bg-[#0A0A0A] border rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors ${errors[f] ? 'border-red-500' : 'border-[#1F1F1F]'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={inputCls('name')} />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input type="text" name="brand" placeholder="Brand Name" value={formData.brand} onChange={handleChange} className={inputCls('brand')} />
          {errors.brand && <p className="text-red-400 text-sm mt-1">{errors.brand}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={inputCls('email')} />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <input type="tel" name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} className={inputCls('whatsapp')} />
          {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
        </div>
      </div>
      <div>
        <select name="category" value={formData.category} onChange={handleChange} className={`${inputCls('category')} ${!formData.category ? 'text-[#6B7280]' : 'text-white'}`}>
          <option value="" disabled>Product Category</option>
          {categories.map(c => <option key={c} value={c} className="bg-[#111111] text-white">{c}</option>)}
        </select>
        {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
      </div>
      <div>
        <textarea name="message" placeholder="Tell us about your product and what you're looking for..." value={formData.message} onChange={handleChange} rows={5} className={inputCls('message')} />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
      </div>
      {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-[#E8C84B] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
