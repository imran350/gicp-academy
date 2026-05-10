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
      const { data, error } = await supabase.from('applications').insert([form]).select('id')
      if (error) throw error
      setStatus('success')
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '' })
      // Send WhatsApp notification to academy
      const whatsappMsg = `📋 New Application Received!\nName: ${form.first_name} ${form.last_name}\nWhatsApp: ${form.whatsapp}\nEmail: ${form.email || 'N/A'}\nCourse: ${form.program}\nPayment Method: ${form.payment_method}\nMessage: ${form.message || 'None'}`;
      const applicationId = data[0].id
      const clientLink = `https://www.gicpacademy.com/application/${applicationId}`
      const fullWhatsappMsg = `${whatsappMsg}
Client Link: ${clientLink}`
      window.open(`https://wa.me/923019753393?text=${encodeURIComponent(fullWhatsappMsg)}`, '_blank')
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

      {/* Form + Fee Plan (Sample Image Layout) */}
      <section className="bg-brand-cream pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Fee Plan + Payment Methods (Sample Image) */}
            <div className="rounded-xl border border-brand-gold/20 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:p-11">
              <div className="section-label text-brand-teal">FEE & PAYMENT</div>
              <h2 className="font-display text-[1.75rem] font-bold text-brand-navy mt-2">Choose Your Plan</h2>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <div className="fee-card std flex-1 bg-cream p-4 border border-brand-teal/10">
                  <div className="fee-lbl text-brand-muted text-sm font-semibold uppercase">STANDARD FEE</div>
                  <div className="fee-amt font-display text-2xl font-bold text-brand-navy mt-1">PKR 55,000</div>
                  <div className="fee-note text-brand-muted text-sm mt-1">Easy 2–3 installment plan available</div>
                </div>
                <div className="fee-card sch flex-1 bg-brand-navy p-4 border border-brand-gold/20">
                  <div className="fee-ribbon text-brand-gold text-xs font-bold uppercase bg-brand-gold/10 inline-block px-2 py-1 mb-1">★ LIMITED</div>
                  <div className="fee-lbl text-white/70 text-sm font-semibold uppercase">SCHOLARSHIP FEE</div>
                  <div className="fee-amt font-display text-2xl font-bold text-brand-gold mt-1">PKR 35,000</div>
                  <div className="fee-note text-white/50 text-sm mt-1">Apply fast — seats filling up</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="pm-title text-brand-muted text-sm font-semibold uppercase">PAYMENT METHODS</div>
                <div className="pm-cards mt-3 space-y-3">
                  <div className="pm-card jz p-4 bg-pink-50 border-pink-100">
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic text-red-600">📱</span>
                      <span className="pm-head-name font-semibold text-brand-navy">JazzCash / EasyPaisa</span>
                    </div>
                    <div className="pm-num font-bold text-brand-navy mt-1">0301-9753393</div>
                    <div className="pm-hint text-sm text-brand-muted mt-1">Send payment screenshot on WhatsApp for confirmation</div>
                  </div>
                  <div className="pm-card bk p-4 bg-cream border-black/7">
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic text-brand-teal">🏦</span>
                      <span className="pm-head-name font-semibold text-brand-navy">Bank Transfer</span>
                    </div>
                    <div className="pm-num font-bold text-brand-navy mt-1">Details shared after enrollment</div>
                    <div className="pm-hint text-sm text-brand-muted mt-1">WhatsApp us to receive account details</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Enrollment Form (Sample Image) */}
            <div className="rounded-xl border border-brand-gold/20 bg-brand-navy p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:p-11">
              <form onSubmit={handleSubmit} className="w-full">
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
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Email Address <span className="text-red-400">*</span></label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
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

            {/* Supabase Status Indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[0.75rem] text-brand-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Powered by secure Supabase backend</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</>
  )
}
