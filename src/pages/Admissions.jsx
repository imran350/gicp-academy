import { useState } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

export default function Admissions() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      if (!supabase) throw new Error('Supabase not configured')
      const { error } = await supabase.from('applications').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '' })
    } catch { setStatus('error') }
  }

  const inputClass = 'w-full rounded border border-black/10 bg-white px-3.5 py-3 text-[0.9rem] text-brand-text outline-none transition-colors duration-200 focus:border-brand-teal'

  return (
    <>
      {/* Navy Header */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            Admissions
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Apply for Admission
          </h1>
          <p className="mt-3 text-[1rem] font-light text-white/50">
            Fill in your details and we'll contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-brand-cream pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="rounded-xl border border-brand-gold/20 bg-brand-navy p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:p-11">
            <h2 className="font-display text-[1.6rem] font-bold text-white">Apply for Admission</h2>
            <p className="mb-7 text-[0.85rem] text-white/50">Fill in your details below and submit your enrollment request.</p>

            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">First Name <span className="text-red-400">*</span></label>
                <input type="text" name="first_name" required value={form.first_name} onChange={handleChange} className={inputClass} placeholder="e.g. Ayesha" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Last Name</label>
                <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className={inputClass} placeholder="e.g. Khan" />
              </div>
            </div>

            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">WhatsApp Number <span className="text-red-400">*</span></label>
                <input type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="0300-0000000" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Course of Interest <span className="text-red-400">*</span></label>
              <select name="program" required value={form.program} onChange={handleChange} className={`${inputClass} bg-white`}>
                <option value="">Select a program...</option>
                {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Payment Method</label>
              <select name="payment_method" value={form.payment_method} onChange={handleChange} className={`${inputClass} bg-white`}>
                <option value="">Select payment method...</option>
                <option value="jazzcash">JazzCash</option>
                <option value="easypaisa">EasyPaisa</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Message (Optional)</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Any questions or additional info..." />
            </div>

            <button type="submit" disabled={status === 'submitting'} className="w-full rounded bg-brand-gold py-4 text-[0.95rem] font-bold text-brand-navy transition-colors duration-200 hover:bg-brand-gold-light disabled:opacity-60">
              {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-2 inline h-4 w-4" /></>}
            </button>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-brand-teal/20 p-4 text-[0.9rem] text-brand-teal-light">
                <CheckCircle className="h-5 w-5 flex-shrink-0" /> Application submitted successfully! We'll contact you on WhatsApp soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/20 p-4 text-[0.9rem] text-red-300">
                <AlertCircle className="h-5 w-5 flex-shrink-0" /> Something went wrong. Please try again or contact us on WhatsApp.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
