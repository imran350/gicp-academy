import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

// Validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^0?3[0-9]{9}$/

export default function Admissions() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState({})

  // Validate form on change (button stays disabled until valid email/phone)
  useEffect(() => {
    const newErrors = {}
    // Check required fields without showing text
    if (!form.first_name.trim()) newErrors.first_name = 'required'
    if (!form.last_name.trim()) newErrors.last_name = 'required'
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'required'
    else if (!PHONE_REGEX.test(form.whatsapp.trim().replace(/[\s\-]/g, ''))) newErrors.whatsapp = 'invalid'
    if (!form.email.trim()) newErrors.email = 'required'
    else if (!EMAIL_REGEX.test(form.email.trim())) newErrors.email = 'invalid'
    if (!form.program.trim()) newErrors.program = 'required'

    setErrors(newErrors)
    setIsFormValid(
      EMAIL_REGEX.test(form.email.trim()) &&
      PHONE_REGEX.test(form.whatsapp.trim().replace(/[\s\-]/g, '')) &&
      form.first_name.trim() &&
      form.last_name.trim() &&
      form.program.trim()
    )
  }, [form])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Redirect to WhatsApp after success message appears
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.open('https://wa.me/923019753393', '_blank')
      }, 2000) // Wait 2 seconds to show success message before redirect
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) {
      console.error('Form submission blocked: Invalid fields detected')
      alert('Please fill all required fields correctly (valid email and WhatsApp number are required)')
      return
    }

    setStatus('submitting')
    try {
      console.log('Submitting form data:', form)
      console.log('Supabase client status:', !!supabase)
      if (!supabase) {
        const supabaseError = new Error('Supabase not configured — check .env file for valid credentials')
        console.error(supabaseError)
        alert('Form submission failed: Supabase connection not found. Check your .env file for valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
        setStatus('error')
        return
      }

      const cleanForm = { ...form, whatsapp: form.whatsapp.replace(/[\s\-]/g, '') }
      
      // Verify required fields exist before submission
      const requiredFields = ['first_name', 'last_name', 'whatsapp', 'email', 'program']
      const missingFields = requiredFields.filter(field => !cleanForm[field]?.trim())
      if (missingFields.length > 0) {
        console.error('Missing required fields:', missingFields)
        setStatus('error')
        return
      }

      // Insert only specific fields to Supabase
      const { error } = await supabase.from('applications').insert([{
        first_name: cleanForm.first_name,
        last_name: cleanForm.last_name,
        email: cleanForm.email,
        whatsapp: cleanForm.whatsapp,
        program: cleanForm.program,
        payment_method: cleanForm.payment_method
      }])

      if (error) {
        console.error('Supabase Error:', error)
        throw error
      }

      console.log('Supabase insertion successful')
      setIsSubmitted(true)
      setStatus('success')
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: '', payment_method: '', message: '' })
    } catch (err) {
      console.error('Supabase Error:', err)
      setStatus('error')
      setIsSubmitted(false)
    }
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
              <div className="section-label text-brand-teal">PROGRAM INVESTMENT</div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <div className="fee-card std w-full sm:w-auto bg-brand-dark-navy/20 p-4 border border-brand-sky-blue/10 shadow-sm">
                  <div className="fee-lbl text-white/90 text-sm font-semibold uppercase">Affordable Excellence</div>
                  <div className="fee-amt font-display text-xl font-bold text-white mt-1 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Flexible Payment Plans</div>
                  <div className="fee-note text-white/90 text-sm mt-1">Easy installment plans & scholarships available</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="pm-title text-white/90 text-sm font-semibold uppercase">PAYMENT METHODS</div>
                <div className="pm-cards mt-3 space-y-3">
                  <label className="pm-card jz p-4 bg-brand-dark-navy/20 border border-brand-sky-blue/10 shadow-sm cursor-pointer transition-all duration-200 hover:border-brand-gold/50 hover:bg-brand-dark-navy/40">
                    <input type="radio" name="payment_method" value="jazzcash" className="sr-only" />
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic">📱</span>
                      <span className="pm-head-name font-semibold text-white">JazzCash</span>
                    </div>
                    <div className="pm-num font-bold text-brand-gold mt-1">03010000305</div>
                    <div className="pm-hint text-sm text-white/90 mt-1">Account Title: Shamila Irshad</div>
                  </label>
                  <label className="pm-card np p-4 bg-brand-dark-navy/20 border border-brand-sky-blue/10 shadow-sm cursor-pointer transition-all duration-200 hover:border-brand-gold/50 hover:bg-brand-dark-navy/40">
                    <input type="radio" name="payment_method" value="nayapay" className="sr-only" />
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic">💳</span>
                      <span className="pm-head-name font-semibold text-white">NayaPay</span>
                    </div>
                    <div className="pm-num font-bold text-brand-gold mt-1">03010000305</div>
                    <div className="pm-hint text-sm text-white/90 mt-1">Account Title: Shamila Irshad</div>
                  </label>
                  <label className="pm-card bk p-4 bg-brand-dark-navy/20 border border-brand-sky-blue/10 shadow-sm cursor-pointer transition-all duration-200 hover:border-brand-gold/50 hover:bg-brand-dark-navy/40">
                    <input type="radio" name="payment_method" value="bank" className="sr-only" />
                    <div className="pm-head flex items-center gap-2">
                      <span className="pm-head-ic">🏦</span>
                      <span className="pm-head-name font-semibold text-white">Bank Transfer</span>
                    </div>
                    <div className="pm-num font-bold text-white mt-1">Askari Bank</div>
                    <div className="pm-hint text-sm text-white/90 mt-1">Fast and secure bank transfer</div>
                  </label>
                </div>

                {/* Bank Details Box — Shows when Bank Transfer is selected */}
                {form.payment_method === 'bank' && (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-brand-navy/40 to-brand-dark-navy/60 border border-brand-sky-blue/30 backdrop-blur-sm shadow-lg">
                    <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">Bank Account Details</div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[0.75rem] font-semibold text-white/70 uppercase tracking-wide mb-1">Bank Name</p>
                        <p className="text-[0.95rem] font-bold text-white">Askari Bank</p>
                      </div>
                      <div>
                        <p className="text-[0.75rem] font-semibold text-white/70 uppercase tracking-wide mb-1">Account Title</p>
                        <p className="text-[0.95rem] font-bold text-white">GLOBAL INSTITUTE OF CLINICAL PSYCHOLOGY</p>
                      </div>
                      <div>
                        <p className="text-[0.75rem] font-semibold text-white/70 uppercase tracking-wide mb-1">Account Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-[1rem] font-mono font-bold text-brand-gold">02230900007246</p>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText('02230900007246')}
                            className="px-2 py-1 text-[0.7rem] bg-brand-sky-blue/30 hover:bg-brand-sky-blue/50 text-white rounded transition-all duration-200"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-[0.75rem] font-semibold text-white/70 uppercase tracking-wide mb-1">Branch</p>
                        <p className="text-[0.95rem] font-semibold text-white">Valencia Town Branch (0223)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Right: Enrollment Form */}
            <div className="glass-card p-8 sm:p-11">
              {isSubmitted ? (
                <div className="bg-green-600/20 border-2 border-green-500 p-8 rounded-2xl text-center animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-xl font-bold text-white">Application Submitted Successfully!</p>
                  <p className="mt-2 text-white/90">We will contact you soon.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <h2 className="font-display text-[1.6rem] font-extrabold text-white">Apply for Admission</h2>
                <p className="mb-7 text-[0.85rem] text-slate-300">Fill in your details below and submit your enrollment request.</p>

                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      value={form.first_name}
                      onChange={handleChange}
                      className={`form-input text-white !important ${errors.first_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Ayesha"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      value={form.last_name}
                      onChange={handleChange}
                      className={`form-input text-white !important ${errors.last_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Khan"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">WhatsApp Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      className={`form-input text-white !important ${errors.whatsapp ? 'form-error-input' : ''}`}
                      placeholder="0300-0000000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input text-white !important ${errors.email ? 'form-error-input' : ''}`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Course of Interest <span className="text-red-400">*</span></label>
                  <select
                    name="program"
                    required
                    value={form.program}
                    onChange={handleChange}
                    className={`form-input text-white !important ${errors.program ? 'form-error-input' : ''}`}
                  >
                    <option value="">Select a program...</option>
                    {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
                  </select>
                </div>


                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Message (Optional)</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="form-input text-white !important resize-none" placeholder="Any questions or additional info..." />
                </div>

                {/* Payment Method Selection */}
                <div className="form-section">
                  <label className="mb-3 block text-[0.78rem] font-semibold text-white">Preferred Payment Method</label>
                  <div className="space-y-2.5">
                    {/* Bank Transfer Option */}
                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                      form.payment_method === 'bank'
                        ? 'border-brand-gold bg-brand-gold/20 shadow-[0_4px_8px_rgba(201,168,76,0.25)]'
                        : 'border-brand-sky-blue/20 bg-brand-dark-navy/20 hover:border-brand-sky-blue/40'
                    }`}>
                      <input
                        type="radio"
                        name="payment_method"
                        value="bank"
                        checked={form.payment_method === 'bank'}
                        onChange={handleChange}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="text-[0.9rem] font-semibold text-white">Bank Transfer</span>
                        <p className="text-[0.75rem] text-white/70">Askari Bank</p>
                      </div>
                    </label>

                    {/* NayaPay Option */}
                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                      form.payment_method === 'nayapay'
                        ? 'border-brand-gold bg-brand-gold/20 shadow-[0_4px_8px_rgba(201,168,76,0.25)]'
                        : 'border-brand-sky-blue/20 bg-brand-dark-navy/20 hover:border-brand-sky-blue/40'
                    }`}>
                      <input
                        type="radio"
                        name="payment_method"
                        value="nayapay"
                        checked={form.payment_method === 'nayapay'}
                        onChange={handleChange}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="text-[0.9rem] font-semibold text-white">NayaPay</span>
                        <p className="text-[0.75rem] text-white/70">Mobile Wallet</p>
                      </div>
                    </label>

                    {/* JazzCash Option */}
                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                      form.payment_method === 'jazzcash'
                        ? 'border-brand-gold bg-brand-gold/20 shadow-[0_4px_8px_rgba(201,168,76,0.25)]'
                        : 'border-brand-sky-blue/20 bg-brand-dark-navy/20 hover:border-brand-sky-blue/40'
                    }`}>
                      <input
                        type="radio"
                        name="payment_method"
                        value="jazzcash"
                        checked={form.payment_method === 'jazzcash'}
                        onChange={handleChange}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <span className="text-[0.9rem] font-semibold text-white">JazzCash</span>
                        <p className="text-[0.75rem] text-white/70">Mobile Wallet</p>
                      </div>
                    </label>
                  </div>

                  {/* Conditional Payment Details Display */}
                  {form.payment_method === 'bank' && (
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-brand-navy/40 to-brand-dark-navy/60 border border-brand-sky-blue/30 backdrop-blur-sm shadow-lg">
                      <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">Bank Details</div>
                      <div className="space-y-2.5">
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Bank Name</p>
                          <p className="text-[0.9rem] font-bold text-white">Askari Bank</p>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Title</p>
                          <p className="text-[0.9rem] font-bold text-white">GLOBAL INSTITUTE OF CLINICAL PSYCHOLOGY</p>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Number</p>
                          <div className="flex items-center gap-2">
                            <p className="text-[0.95rem] font-mono font-bold text-brand-gold">02230900007246</p>
                            <button
                              type="button"
                              onClick={() => navigator.clipboard.writeText('02230900007246')}
                              className="px-2 py-0.5 text-[0.65rem] bg-brand-sky-blue/30 hover:bg-brand-sky-blue/50 text-white rounded transition-all duration-200"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Branch</p>
                          <p className="text-[0.9rem] font-bold text-white">Valencia Town Branch (0223)</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {form.payment_method === 'nayapay' && (
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-brand-navy/40 to-brand-dark-navy/60 border border-brand-sky-blue/30 backdrop-blur-sm shadow-lg">
                      <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">NayaPay Details</div>
                      <div className="space-y-2.5">
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Number</p>
                          <div className="flex items-center gap-2">
                            <p className="text-[0.95rem] font-mono font-bold text-brand-gold">03010000305</p>
                            <button
                              type="button"
                              onClick={() => navigator.clipboard.writeText('03010000305')}
                              className="px-2 py-0.5 text-[0.65rem] bg-brand-sky-blue/30 hover:bg-brand-sky-blue/50 text-white rounded transition-all duration-200"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Title</p>
                          <p className="text-[0.9rem] font-bold text-white">Shamila Irshad</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {form.payment_method === 'jazzcash' && (
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-brand-navy/40 to-brand-dark-navy/60 border border-brand-sky-blue/30 backdrop-blur-sm shadow-lg">
                      <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">JazzCash Details</div>
                      <div className="space-y-2.5">
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Number</p>
                          <div className="flex items-center gap-2">
                            <p className="text-[0.95rem] font-mono font-bold text-brand-gold">03010000305</p>
                            <button
                              type="button"
                              onClick={() => navigator.clipboard.writeText('03010000305')}
                              className="px-2 py-0.5 text-[0.65rem] bg-brand-sky-blue/30 hover:bg-brand-sky-blue/50 text-white rounded transition-all duration-200"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-[0.7rem] font-semibold text-white/60 uppercase tracking-wide mb-0.5">Account Title</p>
                          <p className="text-[0.9rem] font-bold text-white">Shamila Irshad</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || status === 'submitting'}
                  className={`w-full rounded-full bg-gradient-to-r from-purple-600 to-magenta-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] disabled:opacity-60 disabled:cursor-not-allowed ${(!isFormValid || status === 'submitting') ? 'disabled:hover:scale-100' : ''}`}
                >
                  {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-2 inline h-4 w-4" /></>}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[0.75rem] text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  <span>Powered by secure Supabase backend</span>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
