'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#060606]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">Questions? Answered.</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map(item => (
            <div key={item.id} className="bg-[#111111] rounded-xl border border-[#1F1F1F] overflow-hidden">
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openId === item.id}
                aria-controls={`faq-${item.id}`}
              >
                <span className="font-semibold text-white pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#D4AF37] shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    id={`faq-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#6B7280] leading-relaxed border-t border-[#1F1F1F] pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
