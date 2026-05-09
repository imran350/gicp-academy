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
    desc: 'Pay via JazzCash mobile wallet',
  },
  {
    id: 'easypaisa',
    label: 'EasyPaisa',
    icon: Smartphone,
    desc: 'Pay via EasyPaisa mobile wallet',
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    icon: Building,
    desc: 'Direct bank deposit / wire transfer',
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
    program: course?.title || '',
    payment_method: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  if (!course) {
    return (
      <section className="bg-brand-cream pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-3xl font-bold text-brand-navy">Course Not Found</h1>
          <p className="mt-3 text-brand-muted">This course doesn't exist.</p>
          <Link to="/courses" className="btn-primary mt-6">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Courses
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
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: course.title, payment_method: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded border border-black/10 bg-brand-cream px-3.5 py-2.5 text-[0.9rem] text-brand-text outline-none transition-colors duration-200 focus:border-brand-teal'

  return (
    <section className="bg-brand-cream pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/courses"
          className="mb-6 inline-flex items-center gap-1 text-[0.9rem] font-medium text-brand-muted transition-colors hover:text-brand-teal"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Course info */}
          <div className="lg:col-span-2">
            {/* Course header */}
            <div className="rounded-lg border border-brand-teal/10 bg-white/80 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <div className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[2px] text-brand-teal">
                Course {course.num}
              </div>
              <h1 className="font-display text-xl font-bold text-brand-navy sm:text-2xl md:text-3xl whitespace-normal leading-1.3 min-h-[60px] display-block py-2">
                {course.title}
              </h1>
              {course.tagline && (
                <p className="mt-2 text-[0.95rem] font-medium italic text-brand-teal">{course.tagline}</p>
              )}
              <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-brand-muted">{course.description}</p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-brand-teal/30 px-3 py-1.5 text-[0.85rem] font-medium text-brand-teal">
                  <Clock className="h-3.5 w-3.5" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-brand-teal/30 px-3 py-1.5 text-[0.85rem] font-medium text-brand-teal">
                  <CalendarDays className="h-3.5 w-3.5" /> {course.schedule}
                </span>
                {course.badge && (
                  <span className="inline-flex items-center rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[1px] text-brand-gold">
                    {course.badge}
                  </span>
                )}
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-6 rounded-lg border border-brand-teal/10 bg-white/80 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <h2 className="mb-4 font-display text-xl font-bold text-brand-navy">What You'll Learn</h2>
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
                    <span className="text-[0.9rem] text-brand-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Format (from reference) */}
            <div className="mt-6 rounded-lg border border-brand-teal/10 bg-white/80 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <h2 className="mb-4 font-display text-xl font-bold text-brand-navy">Learning Format</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">🎥</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-brand-navy">Live Classes</p>
                    <p className="text-[0.75rem] text-brand-muted">Interactive sessions via Zoom & Google Meet, 2 days per week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">📼</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-brand-navy">Recorded Lectures</p>
                    <p className="text-[0.75rem] text-brand-muted">Full access to all recorded sessions anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">📋</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-brand-navy">Assignments</p>
                    <p className="text-[0.75rem] text-brand-muted">Real-world case studies and clinical assignments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">⏱</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-brand-navy">Online Exam</p>
                    <p className="text-[0.75rem] text-brand-muted">30-minute timed paper — auto-submitted, instant results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal">🎓</div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-brand-navy">Certificate</p>
                    <p className="text-[0.75rem] text-brand-muted">Professional diploma certificate on successful completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 rounded-lg border border-brand-teal/10 bg-white/80 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <h2 className="mb-4 font-display text-xl font-bold text-brand-navy">Payment Methods</h2>
              <p className="mb-4 text-[0.85rem] text-brand-muted">We accept the following payment methods:</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((pm) => {
                  const PmIcon = pm.icon
                  return (
                    <div
                      key={pm.id}
                      className="flex items-center gap-3 rounded-md border border-black/6 bg-brand-cream p-4"
                    >
                      <PmIcon className="h-5 w-5 flex-shrink-0 text-brand-teal" />
                      <div>
                        <p className="text-[0.85rem] font-semibold text-brand-navy">{pm.label}</p>
                        <p className="text-[0.75rem] text-brand-muted">{pm.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Sticky enrollment card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 z-10">
              {/* Price card */}
              <div className="overflow-hidden rounded-lg border border-brand-teal/10 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <div className="bg-brand-navy p-6 text-white">
                  {/* Standard Fee Section */}
                  <div className="mb-4">
                    <p className="text-[0.85rem] text-white/60">Standard Fee</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-white">PKR 55,000</span>
                    </div>
                    <p className="mt-1 text-[0.75rem] text-white/40">Available for all applicants</p>
                  </div>

                  {/* Scholarship Fee Section */}
                  <div className="mb-4">
                    <p className="text-[0.85rem] text-white/60">Scholarship Fee (Limited Seats)</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-brand-gold">PKR 35,000</span>
                      <span className="text-[0.85rem] line-through text-white/50">PKR 55,000</span>
                    </div>
                    <p className="mt-1 text-[0.75rem] text-white/40">Save PKR 20,000 — apply fast</p>
                  </div>

                  {/* Payment Options */}
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[1px] text-brand-gold">
                      Full Payment
                    </span>
                    <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[1px] text-brand-gold">
                      Monthly Installments (PKR 5,833 x 6)
                    </span>
                  </div>
                </div>
                <div className="p-6">
              </div>


                  <ul className="mb-6 space-y-3">
                    {[
                      '6 Months Course',
                      '2 Days / Week',
                      'Live Online Classes',
                      'Assignments & Exams',
                      'Digital Certification',
                      'Installment Plan Available',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[0.85rem] text-brand-muted">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded bg-brand-gold py-3.5 text-[0.95rem] font-bold text-brand-navy transition-colors hover:bg-brand-gold-light"
                  >
                    <Send className="mr-1 inline h-4 w-4" /> Enroll Now
                  </button>

                  <p className="mt-3 text-center text-[0.78rem] text-brand-muted">
                    Questions?{' '}
                    <a href="https://wa.me/923019753393" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              {/* Enrollment form */}
              <div id="enroll-form" className="mt-6 rounded-lg border border-brand-teal/10 bg-white/80 p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <h3 className="mb-4 font-display text-lg font-bold text-brand-navy">Quick Enrollment</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">First Name *</label>
                      <input type="text" name="first_name" required value={form.first_name} onChange={handleChange} className={inputClass} placeholder="Ayesha" />
                    </div>
                    <div>
                      <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Last Name</label>
                      <input type="text" name="last_name" value={form.last_name} onChange={handleChange} className={inputClass} placeholder="Khan" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">WhatsApp *</label>
                    <input type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="0300-0000000" />
                  </div>

                  <div>
                    <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
                  </div>

                  <div>
                    <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Course</label>
                    <input type="text" value={course.title} readOnly className={`${inputClass} bg-white text-brand-muted cursor-default`} />
                  </div>

                  {/* Payment */}
                  <div>
                    <label className="mb-1.5 block text-[0.78rem] font-semibold text-brand-text">Payment Method *</label>
                    <div className="space-y-2">
                      {paymentMethods.map((pm) => {
                        const PmIcon = pm.icon
                        return (
                          <label
                            key={pm.id}
                            className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors duration-200 ${
                              form.payment_method === pm.id
                                ? 'border-brand-teal bg-brand-teal/5'
                                : 'border-black/7 hover:border-brand-teal/50'
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
                            <PmIcon className="h-4 w-4 text-brand-teal" />
                            <span className="text-[0.85rem] font-medium text-brand-text">{pm.label}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Message (optional)</label>
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Any questions..." />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded bg-brand-navy py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-brand-teal disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Submitting...' : <>Submit Application <Send className="ml-1 inline h-4 w-4" /></>}
                  </button>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded bg-brand-teal/10 p-3 text-[0.85rem] text-brand-teal">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      Application submitted! We'll contact you on WhatsApp.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded bg-red-50 p-3 text-[0.85rem] text-red-700">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      Something went wrong. Try again or WhatsApp us.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
