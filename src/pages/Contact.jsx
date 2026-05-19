import { useState, useEffect } from 'react'
import { Mail, Globe, MessageCircle, CheckCircle, Send } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// Phone validation regex (Pakistan format — flexible with dashes/spaces)
const PHONE_REGEX = /^0?3[0-9]{9}$/

export default function Contact() {
  // Form state — matches Supabase 'applications' table columns
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    whatsapp: '',
    email: '',
    program: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [status, setStatus] = useState('idle')

  // Validate form on change
  useEffect(() => {
    const newErrors = {}
    const cleanPhone = formData.whatsapp.trim().replace(/[\s\-]/g, '')

    if (!formData.first_name.trim()) newErrors.first_name = 'required'
    if (!formData.last_name.trim()) newErrors.last_name = 'required'
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'required'
    else if (!PHONE_REGEX.test(cleanPhone)) newErrors.whatsapp = 'invalid'
    if (!formData.email.trim()) newErrors.email = 'required'
    else if (!EMAIL_REGEX.test(formData.email.trim())) newErrors.email = 'invalid'

    setErrors(newErrors)
    setIsValid(
      EMAIL_REGEX.test(formData.email.trim()) &&
      PHONE_REGEX.test(cleanPhone) &&
      formData.first_name.trim() &&
      formData.last_name.trim()
    )
  }, [formData])

  // Handle form submission — sends to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid) return

    setStatus('submitting')
    try {
      if (!supabase) throw new Error('Supabase not configured')
      const cleanForm = { ...formData, whatsapp: formData.whatsapp.replace(/[\s\-]/g, '') }
      const { error } = await supabase.from('applications').insert([cleanForm])
      if (error) throw error

      setStatus('success')
      // WhatsApp notification
      const whatsappMsg = `New Application Received!%0A%0A*Name:*%20${formData.first_name}%20${formData.last_name}%0A*Course:*%20${formData.program || 'Not Selected'}%0A*Phone:*%20${formData.whatsapp}`
      window.open(`https://wa.me/923019753393?text=${whatsappMsg}`, '_blank')
      setFormData({ first_name: '', last_name: '', whatsapp: '', email: '', program: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* Navy Header */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-white/70">
            Get In Touch
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
            Ready to Begin?
          </h1>
          <p className="mt-3 text-[1rem] font-light text-slate-300">
            Reach out on WhatsApp for the fastest response, or fill in the enquiry form.
          </p>
        </div>
      </section>

      {/* Content — matches global navy gradient */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: Contact Info — bright clickable icons */}
            <div>
              <h2 className="font-display text-[1.6rem] font-extrabold text-white mb-2">Contact Information</h2>
              <p className="mb-8 text-[0.95rem] font-light text-slate-300">We're here to help. Choose your preferred way to reach us.</p>

              <div className="space-y-4">
                {/* WhatsApp — bright icon */}
                <a
                  href="https://wa.me/923019753393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[1.1rem] shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">WhatsApp</div>
                    <div className="text-[1rem] font-semibold text-white">0301-9753393</div>
                    <div className="text-[0.8rem] text-slate-300">Chat with us directly for quick responses</div>
                  </div>
                </a>

                {/* Email — bright icon */}
                <a
                  href="mailto:globalinstituteofpsychology@gmail.com"
                  className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-sky-blue text-[1.1rem] shadow-lg shadow-brand-sky-blue/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">Email</div>
                    <div className="text-[1rem] font-semibold text-white">globalinstituteofpsychology@gmail.com</div>
                    <div className="text-[0.8rem] text-slate-300">Send us a detailed message anytime</div>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://www.gicpacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-[1.1rem] shadow-lg shadow-brand-navy/20">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">Website</div>
                    <div className="text-[1rem] font-semibold text-white">www.gicpacademy.com</div>
                    <div className="text-[0.8rem] text-slate-300">Visit our official website</div>
                  </div>
                </a>
              </div>

              {/* Session Booking Options — mobile-optimized */}
              <div className="mt-8">
                <h2 className="font-display text-[1.6rem] font-extrabold text-white mb-4">Book a Therapy Session</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
                  {/* Online Session */}
                  <a
                    href="https://wa.me/923019753393?text=I%20want%20to%20book%20an%20ONLINE%20therapy%20session.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-sky-blue text-[1.1rem] shadow-lg shadow-brand-sky-blue/20">
                      <span className="text-white">💻</span>
                    </div>
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">Online Session</div>
                      <div className="text-[1rem] font-semibold text-white">Virtual Therapy</div>
                      <div className="text-[0.8rem] text-slate-300">Click to book via WhatsApp</div>
                    </div>
                  </a>

                  {/* Physical Session */}
                  <a
                    href="https://wa.me/923019753393?text=I%20want%20to%20book%20a%20PHYSICAL%20therapy%20session.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-[1.1rem] shadow-lg shadow-brand-navy/20">
                      <span className="text-white">🏥</span>
                    </div>
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">Physical Session</div>
                      <div className="text-[1rem] font-semibold text-white">In-Person Therapy</div>
                      <div className="text-[0.8rem] text-slate-300">Click to book via WhatsApp</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Apply Form — updated styling */}
            <div className="glass-card p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
              {status === 'success' ? (
                <div className="bg-green-600/20 border-2 border-green-500 p-8 rounded-2xl text-center animate-fade-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-xl font-bold text-white">Application Submitted Successfully!</p>
                  <p className="mt-2 text-white/90">Opening WhatsApp for final confirmation...</p>
                </div>
              ) : (
              <>
              <h2 className="font-display text-[1.6rem] font-extrabold text-white">Apply for Admission</h2>
              <p className="mb-7 text-[0.85rem] text-slate-300">Fill in your details and we'll contact you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`form-input ${errors.first_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Ayesha"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`form-input ${errors.last_name ? 'form-error-input' : ''}`}
                      placeholder="e.g. Khan"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">WhatsApp Number <span className="text-red-400">*</span></label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`form-input ${errors.whatsapp ? 'form-error-input' : ''}`}
                    placeholder="0300-0000000"
                  />
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-error-input' : ''}`}
                      placeholder="your@email.com"
                    />
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Course of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a program...</option>
                    <option value="ADCP — Advanced Diploma in Clinical Psychology">ADCP — Advanced Diploma in Clinical Psychology</option>
                    <option value="Diploma in Child Psychology">Diploma in Child Psychology</option>
                    <option value="Diploma in Autism (ASD)">Diploma in Autism (ASD)</option>
                    <option value="Diploma in Speech & Language Therapy">Diploma in Speech & Language Therapy</option>
                    <option value="Diploma in PECS">Diploma in PECS</option>
                    <option value="Diploma in Physiotherapy">Diploma in Physiotherapy</option>
                    <option value="Diploma in Sensory Integration & Reflexes">Diploma in Sensory Integration & Reflexes</option>
                    <option value="Diploma in CBT">Diploma in CBT</option>
                    <option value="Diploma in Nutrition & Dietetics">Diploma in Nutrition & Dietetics</option>
                    <option value="Diploma in Public Health">Diploma in Public Health</option>
                  </select>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-white">Message (Optional)</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Any questions or additional info..."
                  ></textarea>
                </div>

                {/* Glowing submit button — matches Admissions page */}
                <button
                  type="submit"
                  disabled={!isValid || status === 'submitting'}
                  className={`w-full rounded-full bg-gradient-to-r from-purple-600 to-magenta-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] disabled:opacity-60 disabled:cursor-not-allowed ${(!isValid || status === 'submitting') ? 'disabled:hover:scale-100' : ''}`}
                >
                  {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-2 inline h-4 w-4" /></>}
                </button>
              </form>

              <div className="mt-6 text-center text-[0.78rem] text-slate-400">
                <Link to="/admissions" className="text-brand-sky-blue hover:underline">
                  View full admission details
                </Link>
              </div>
              </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
