import { useState, useEffect } from 'react'
import { Mail, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// Phone validation regex (Pakistan format)
const PHONE_REGEX = /^03[0-9]{9}$/

export default function Contact() {
  // Form state with validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Validate form on change (no 'Required' text, only red border)
  useEffect(() => {
    const newErrors = {}

    // Check required fields without showing text
    if (!formData.firstName.trim()) newErrors.firstName = 'required'
    if (!formData.lastName.trim()) newErrors.lastName = 'required'
    if (!formData.phone.trim()) newErrors.phone = 'required'
    else if (!PHONE_REGEX.test(formData.phone)) newErrors.phone = 'invalid'
    if (!formData.email.trim()) newErrors.email = 'required'
    else if (!EMAIL_REGEX.test(formData.email)) newErrors.email = 'invalid'

    setErrors(newErrors)
    setIsValid(Object.keys(newErrors).length === 0)
  }, [formData])

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      // Show specified success message
      setShowSuccess(true)
      // Reset form after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      })
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
                  href="mailto:gicpacademy@gmail.com"
                  className="flex items-start gap-4 glass-card p-5 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-sky-blue text-[1.1rem] shadow-lg shadow-brand-sky-blue/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-slate-300">Email</div>
                    <div className="text-[1rem] font-semibold text-white">gicpacademy@gmail.com</div>
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
              <h2 className="font-display text-[1.6rem] font-extrabold text-white">Apply for Admission</h2>
              <p className="mb-7 text-[0.85rem] text-slate-300">Fill in your details and we'll contact you within 24 hours.</p>

              {/* Specified success message */}
              {showSuccess && (
                <div className="mb-6 glass-success-message animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">Thank you! We will contact you soon</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 form-section">
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">First Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-input ${errors.firstName ? 'form-error-input' : ''}`}
                      placeholder="e.g. Ayesha"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Last Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-input ${errors.lastName ? 'form-error-input' : ''}`}
                      placeholder="e.g. Khan"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">WhatsApp Number <span className="text-red-400">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'form-error-input' : ''}`}
                    placeholder="0300-0000000"
                  />
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Email Address <span className="text-red-400">*</span></label>
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
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Course of Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a program...</option>
                    <option value="adcp">ADCP — Advanced Diploma in Clinical Psychology</option>
                    <option value="child-psychology">Diploma in Child Psychology</option>
                    <option value="autism">International Diploma in Autism (ASD)</option>
                    <option value="speech-therapy">Diploma in Speech & Language Therapy</option>
                    <option value="pecs">Diploma in PECS</option>
                    <option value="physiotherapy">International Diploma in Physiotherapy</option>
                    <option value="sensory-integration">Diploma in Sensory Integration & Reflexes</option>
                    <option value="cbt">International Diploma in CBT</option>
                    <option value="nutrition">Diploma in Nutrition & Dietetics</option>
                    <option value="public-health">International Diploma in Public Health</option>
                  </select>
                </div>

                <div className="form-section">
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white">Message (Optional)</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Any questions or additional info..."
                  ></textarea>
                </div>

                {/* Glowing submit button */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`glowing-submit-button ${!isValid ? 'disabled-button' : ''}`}
                >
                  Submit Application
                </button>
              </form>

              <div className="mt-6 text-center text-[0.78rem] text-slate-400">
                <Link to="/admissions" className="text-brand-sky-blue hover:underline">
                  View full admission details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
