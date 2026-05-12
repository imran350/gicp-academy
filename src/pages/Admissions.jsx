import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

// Validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^03[0-9]{9}$/

export default function Admissions() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [showSuccess, setShowSuccess] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState({})

  // Validate form on change (button stays disabled until valid email/phone)
  useEffect(() => {
    const newErrors = {}
    // Check required fields without showing text
    if (!form.first_name.trim()) newErrors.first_name = 'required'
    if (!form.last_name.trim()) newErrors.last_name = 'required'
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'required'
    else if (!PHONE_REGEX.test(form.whatsapp.trim())) newErrors.whatsapp = 'invalid'
    if (!form.email.trim()) newErrors.email = 'required'
    else if (!EMAIL_REGEX.test(form.email.trim())) newErrors.email = 'invalid'
    if (!form.program.trim()) newErrors.program = 'required'

    setErrors(newErrors)
    setIsFormValid(
      EMAIL_REGEX.test(form.email.trim()) &&
      PHONE_REGEX.test(form.whatsapp.trim()) &&
      form.first_name.trim() &&
      form.program.trim()
    )
  }, [form])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return

    setStatus('submitting')
    try {
      if (!supabase) throw new Error('Supabase not configured')
      const { data, error } = await supabase.from('applications').insert([form]).select('id')
      if (error) throw error
      setStatus('success')
      setShowSuccess(true)
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '' })
      // Send WhatsApp notification to academy
      const whatsappMsg = `📋 New Application Received!
Name: ${form.first_name} ${form.last_name}
WhatsApp: ${form.whatsapp}
Email: ${form.email || 'N/A'}
Course: ${form.program}
Payment Method: ${form.payment_method}
Message: ${form.message || 'None'}`;
      const applicationId = data[0].id
      const clientLink = `https://www.gicpacademy.com/application/${applicationId}`
      const fullWhatsappMsg = `${whatsappMsg}
Client Link: ${clientLink}`
      window.open(`https://wa.me/923019753393?text=${encodeURIComponent(fullWhatsappMsg)}`, '_blank')
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    } catch { setStatus('error') }
  }

  return (
    <>
      {/* Navy Header — EXPLICIT White for Admissions heading */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            Admissions
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">
            Apply for Admission
          </h1>
          <p className="mt-3 text-[1rem] font-light text-slate-300">
            Fill in your details and we'll contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Fee Plan (EXPLICIT White for Fee & Payment section title) */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Fee Plan + Payment Methods */}
            <div className="glass-card p-8 sm:p-11">
              <div className="section-label text-brand-teal">FEE & PAYMENT</div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <div className="fee-card std w-full sm:w-auto bg-brand-dark-navy/20 p-4 border border-brand-sky-blue/10 shadow-sm">
                  <div className="fee-lbl text-white/90 text-sm font-semibold uppercase">STANDARD FEE</div>
                  <div className="fee-amt font-display text-2xl font-bold text-white mt-1">PKR 55,000</div>
                  <div className="fee-note text-white/90 text-sm mt-1">Easy 2–3 installment plan available</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="pm-title text-white/90 text-sm font-semibold uppercase">PAYMENT METHODS</div>
                <div className="pm-cards mt-3 space-y-3">
                  <div className="pm-card jz p-4 bg-brand-dark-navy/20 border-brand-sky-blue/10 shadow-sm">
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic">📱</span>
                      <span className="pm-head-name font-semibold">JazzCash / EasyPaisa</span>
                    </div>
                    <div className="pm-num font-bold text-white mt-1">0301-9753393</div>
                    <div className="pm-hint text-sm text-white/90 mt-1">Send payment screenshot on WhatsApp for confirmation</div>
                  </div>
                  <div className="pm-card bk p-4 bg-brand-dark-navy/20 border-brand-sky-blue/10 shadow-sm">
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic">🏦</span>
                      <span className="pm-head-name font-semibold">Bank Transfer</span>
                    </div>
                    <div className="pm-num font-bold text-white mt-1">Details shared after enrollment</div>
                    <div className="pm-hint text-sm text-white/90 mt-1">Details shared on whats up</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Enrollment Form (100% pure white text/labels) */}
            <div className="glass-card p-8 sm:p-11">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <h2 className="font-display text-[1.6rem] font-extrabold text-white">Apply for Admission</h2>
                <p className="mb-7 text-[0.85rem] text-slate-300">Fill in your details below and submit your enrollment request.</p>

                {/* Glassmorphism Success Message with CheckCircle */}
                {showSuccess && (
                  <div className="mb-6 glass-success-message animate-fade-in">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400">Thank you! We will contact you soon</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      value={form.first_name}
                      onChange={handleChange}
                      className={`form-input ${errors.first_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Ayesha"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      value={form.last_name}
                      onChange={handleChange}
                      className={`form-input ${errors.last_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Khan"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">WhatsApp Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      className={`form-input ${errors.whatsapp ? 'form-error-input' : ''}`}
                      placeholder="0300-0000000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-error-input' : ''}`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Course of Interest <span className="text-red-400">*</span></label>
                  <select
                    name="program"
                    required
                    value={form.program}
                    onChange={handleChange}
                    className={`form-input ${errors.program ? 'form-error-input' : ''}`}
                  >
                    <option value="">Select a program...</option>
                    {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
                  </select>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Payment Method</label>
                  <select name="payment_method" value={form.payment_method} onChange={handleChange} className="form-input">
                    <option value="">Select payment method...</option>
                    <option value="jazzcash">JazzCash</option>
                    <option value="easypaisa">EasyPaisa</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Message (Optional)</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="form-input resize-none" placeholder="Any questions or additional info..." />
                </div>

                {/* High-End Glowing Submit Button (disabled until valid email/phone) */}
                <button
                  type="submit"
                  disabled={!isFormValid || status === 'submitting'}
                  className={`high-end-glowing-button ${(!isFormValid || status === 'submitting') ? 'disabled-button' : ''}`}
                >
                  {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-2 inline h-4 w-4" /></>}
                </button>

                {/* Supabase Status Indicator */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[0.75rem] text-white/90">
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
