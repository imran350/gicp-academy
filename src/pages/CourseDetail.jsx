import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Clock, CalendarDays, ArrowLeft, CheckCircle, Send,
  Smartphone, Building, AlertCircle,
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

const paymentMethods = [
  {
    id: 'jazzcash',
    label: 'JazzCash',
    icon: Smartphone,
    desc: '03010000305 (Shamila Irshad)',
  },
  {
    id: 'nayapay',
    label: 'NayaPay',
    icon: Smartphone,
    desc: '03010000305 (Shamila Irshad)',
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    icon: Building,
    desc: 'Details shared after enrollment',
  },
]

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id)

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    whatsapp: '',
    email: '',
    program: '',
    payment_method: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [whatsappLink, setWhatsappLink] = useState('')

  if (!course) {
    return (
      <section className="glass-card pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Course Not Found</h1>
          <p className="mt-3 text-white/90">This course doesn't exist.</p>
          <Link to="/courses" className="btn-primary mt-6 inline-block">
            <ArrowLeft className="mr-1 inline h-4 w-4" /> Back to Courses
          </Link>
        </div>
      </section>
    )
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      if (!supabase) throw new Error('Supabase not configured')
      const { error } = await supabase.from('applications').insert([form])
      if (error) throw error
      setStatus('success')
      // Scroll to success message for visibility
      setTimeout(() => {
        document.getElementById('success-alert')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
      // WhatsApp notification
      const whatsappMsg = `New Application Received!%0A%0A*Name:*%20${form.first_name}%20${form.last_name}%0A*Course:*%20${form.program}%0A*Phone:*%20${form.whatsapp}`
      setTimeout(() => {
        window.open(`https://wa.me/923019753393?text=${whatsappMsg}`, '_blank')
      }, 2000)
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: course.title, payment_method: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded border border-brand-text/40 bg-brand-navy-blue/80 px-3.5 py-2.5 text-[0.9rem] text-white outline-none transition-colors duration-200 focus:border-brand-gold'

  return (
    <section className="glass-card pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/courses"
          className="mb-6 inline-flex items-center gap-1 text-[0.9rem] font-medium text-white/90 transition-colors hover:text-brand-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Course info */}
          <div className="lg:col-span-2">
            {/* Course header */}
            <div className="border border-white/10 glass-card p-8">
              <div className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[2px] text-brand-teal">
                Course {course.num}
              </div>
              <h1 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl leading-tight py-2">
                {course.title}
              </h1>
              {course.tagline && (
                <p className="mt-2 text-[0.95rem] font-medium italic text-brand-teal">{course.tagline}</p>
              )}
              <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-white/90">{course.description}</p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-brand-teal/30 px-3 py-1.5 text-[0.85rem] font-medium text-brand-teal">
                  <Clock className="h-3.5 w-3.5" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-brand-teal/30 px-3 py-1.5 text-[0.85rem] font-medium text-brand-teal">
                  <CalendarDays className="h-3.5 w-3.5" /> {course.schedule}
                </span>
                {course.badge && (
                  <span className="inline-flex items-center rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[1px] text-brand-light-sky">
                    {course.badge}
                  </span>
                )}
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-6 border border-white/10 glass-card p-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">What You'll Learn</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Comprehensive theoretical knowledge',
                  'Practical hands-on training',
                  'Real-world case studies',
                  'Professional assessment skills',
                  'Evidence-based techniques',
                  'Industry-standard practices',
                  'Research methodology',
                  'Ethical practice guidelines',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" />
                    <span className="text-[0.9rem] text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Format */}
            <div className="mt-6 border border-white/10 glass-card p-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Learning Format</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">🎥</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">Live Classes</p>
                    <p className="text-[0.75rem] text-white/90">Interactive sessions via Zoom & Google Meet, 2 days per week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">📼</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">Recorded Lectures</p>
                    <p className="text-[0.75rem] text-white/90">Full access to all recorded sessions anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">📋</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">Assignments</p>
                    <p className="text-[0.75rem] text-white/90">Real-world case studies and clinical assignments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">⏱</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">Online Exam</p>
                    <p className="text-[0.75rem] text-white/90">45-minute timed paper — auto-submitted, instant results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">🎓</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-white">Certificate</p>
                    <p className="text-[0.75rem] text-white/90">Professional diploma certificate on successful completion</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Payment Methods */}
            <div className="mt-6 border border-white/10 glass-card p-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Payment Methods</h2>
              <p className="mb-4 text-[0.85rem] text-white/90">We accept the following payment methods:</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((pm) => {
                  const PmIcon = pm.icon
                  return (
                    <div
                      key={pm.id}
                      className="flex items-center gap-3 border border-white/10 glass-card p-4"
                    >
                      <PmIcon className="h-5 w-5 flex-shrink-0 text-brand-teal" />
                      <div>
                        <p className="text-[0.85rem] font-semibold text-white">{pm.label}</p>
                        <p className="text-[0.75rem] text-white/90">{pm.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Sticky enrollment card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 z-20">
              {/* Price card */}
              <div className="overflow-hidden rounded-lg border border-white/20 bg-brand-dark-navy shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                <div className="bg-brand-navy p-6 bg-brand-dark-navy/90 backdrop-blur-sm text-white">
                  {/* Investment Card */}
                  <div className="mb-4">
                    <p className="text-[0.85rem] text-white/80">Program Investment</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Investment in Excellence</span>
                    </div>
                    <p className="mt-1 text-[0.75rem] text-white/60">Flexible payment plans & scholarships available</p>
                  </div>


                </div>
                <div className="p-6 bg-brand-dark-navy/90 backdrop-blur-sm">
                  <ul className="mb-6 space-y-3">
                    {[
                      '6 Months Course',
                      '2 Days / Week',
                      'Live Online Classes',
                      'Assignments & Exams',
                      'Digital Certification',
                      'Installment Plan Available',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[0.85rem] text-white/90">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 {form.payment_method === pm.id ? 'text-brand-gold' : 'text-brand-teal'}" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded bg-gradient-to-r from-amber-400 to-amber-500 py-3.5 text-[0.95rem] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate-glow shadow-[0_0_20px_rgba(217,119,6,0.6)] hover:shadow-[0_0_30px_rgba(217,119,6,0.8)]"
                  >
                    <Send className="mr-1 inline h-4 w-4" /> Enroll Now
                  </button>

                  <p className="mt-3 text-center text-[0.78rem] text-white/90">
                    Questions?{' '}
                    <a href="https://wa.me/923019753393" target="_blank" rel="noopener noreferrer" className="{form.payment_method === pm.id ? 'text-brand-gold' : 'text-brand-teal'} hover:underline">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment form — full width, below the grid */}
        <div id="enroll-form" className="mt-10 border border-white/10 glass-card p-8">
          {status === 'success' ? (
            <div id="success-alert" className="bg-green-600/20 border-2 border-green-500 p-8 rounded-2xl text-center animate-fade-in transform translateZ(0)">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-xl font-bold text-white">Application Submitted Successfully!</p>
              <p className="mt-2 text-white/90">Opening WhatsApp for final confirmation...</p>
            </div>
          ) : (
          <>
          <h3 className="mb-6 font-display text-xl font-bold text-white">Quick Enrollment</h3>

          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">First Name *</label>
                <input type="text" name="first_name" required value={form.first_name} onChange={handleChange} className={inputClass} placeholder="Ayesha" />
              </div>
              <div>
                <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">Last Name *</label>
                <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className={inputClass} placeholder="Khan" />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">WhatsApp *</label>
              <input type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="0300-0000000" />
            </div>

            <div>
              <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">Email *</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
            </div>

            <div>
              <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">Course *</label>
              <select name="program" required value={form.program} onChange={handleChange} className={inputClass}>
                  <option value="">Select a Course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
            </div>

            {/* Payment */}
            <div>
              <label className="mb-1.5 block text-[0.78rem] font-semibold text-brand-gold">Payment Method *</label>
              <div className="grid gap-2 sm:grid-cols-3">
                {paymentMethods.map((pm) => {
                  const PmIcon = pm.icon
                  return (
                    <label
                      key={pm.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-md border p-5 transition-colors duration-200 ${
                        form.payment_method === pm.id
                          ? 'border-brand-gold bg-brand-gold/40 font-bold cursor-pointer hover:bg-brand-gold/50 shadow-[0_4px_8px_rgba(201,168,76,0.25)]'
                          : 'border-brand-text/20 hover:border-brand-gold bg-brand-dark-navy/10'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_method"
                        value={pm.id}
                        required
                        checked={form.payment_method === pm.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <PmIcon className={`h-4 w-4 ${form.payment_method === pm.id ? 'text-brand-gold' : 'text-brand-teal'}`} />
                      <span className={`text-[0.85rem] font-medium ${form.payment_method === pm.id ? 'text-brand-gold font-bold' : 'text-brand-gold'}`}>{pm.label}</span>
                    </label>
                  )
                })}
              </div>

              {/* Bank Transfer Details Box — Shows only when Bank Transfer is selected */}
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

            <div>
              <label className="mb-1 block text-clamp(0.7rem, 1.5vw, 0.78rem) font-semibold text-brand-gold">Message (optional)</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Any questions..." />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded bg-gradient-to-r from-purple-600 to-magenta-600 py-3.5 text-[0.95rem] font-bold text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] disabled:opacity-60"
            >
              {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-1 inline h-4 w-4" /></>}
            </button>

            {status === 'error' && (
              <div className="flex items-center gap-2 rounded bg-red-500/20 border-2 border-red-500 p-4 text-[0.85rem] text-white">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                Something went wrong. Try again or WhatsApp us.
              </div>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-[0.75rem] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Powered by secure Supabase backend</span>
            </div>
          </form>
          </>
          )}
        </div>
      </div>
    </section>
  )
}
