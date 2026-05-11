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
      setForm({ first_name: '', last_name: '', whatsapp: '', email: '', program: course.title, payment_method: '', message: '' })
      // Send WhatsApp notification to academy
      const whatsappMsg = `📋 New Application Received!\nName: ${form.first_name} ${form.last_name}\nWhatsApp: ${form.whatsapp}\nEmail: ${form.email || 'N/A'}\nCourse: ${form.program}
\nPayment Method: ${form.payment_method}\nMessage: ${form.message || 'None'}`;
      window.open(`https://wa.me/923019753393?text=${encodeURIComponent(whatsappMsg)}`, '_blank')
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
          className="mb-6 inline-flex items-center gap-1 text-[0.9rem] font-medium text-white/90 transition-colors hover:text-brand-teal"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Course info */}
          <div className="lg:col-span-2">
            {/* Course header */}
            <div className="border border-white/10 bg-brand-cream p-8">
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
            <div className="mt-6 border border-white/10 bg-brand-cream p-8">
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
            <div className="mt-6 border border-white/10 bg-brand-cream p-8">
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

            {/* Therapy Options Section */}
            <div className="mt-6 border border-white/10 bg-brand-cream p-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Therapy Options</h2>
              <div className="grid gap-6 bg-brand-dark-navy/90 backdrop-blur-sm sm:grid-cols-2">
                <div className="border border-white/10 bg-brand-cream p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💻</span>
                    <h3 className="font-display text-lg font-semibold text-brand-teal">Online Therapy</h3>
                  </div>
                  <p className="text-[0.9rem] text-white/90 leading-relaxed">
                    Live interactive sessions via Zoom & Google Meet, flexible timing according to your convenience. Access recorded lectures anytime, anywhere.
                  </p>
                </div>
                <div className="border border-white/10 bg-brand-cream p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🏥</span>
                    <h3 className="font-display text-lg font-semibold text-brand-teal">Physical Therapy</h3>
                  </div>
                  <p className="text-[0.9rem] text-white/90 leading-relaxed">
                    In-person sessions at our academy facility with experienced trainers. Hands-on practical training and clinical practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 border border-white/10 bg-brand-cream p-8">
              <h2 className="mb-4 font-display text-xl font-bold text-white">Payment Methods</h2>
              <p className="mb-4 text-[0.85rem] text-white/90">We accept the following payment methods:</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {paymentMethods.map((pm) => {
                  const PmIcon = pm.icon
                  return (
                    <div
                      key={pm.id}
                      className="flex items-center gap-3 border border-white/10 bg-brand-cream p-4"
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
                  {/* Standard Fee */}
                  <div className="mb-4">
                    <p className="text-[0.85rem] text-white/80">Standard Fee</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-white">PKR 55,000</span>
                    </div>
                    <p className="mt-1 text-[0.75rem] text-white/60">Available for all applicants</p>
                  </div>

                  {/* Scholarship Fee */}
                  <div className="mb-4">
                    <p className="text-[0.85rem] text-white/80">Scholarship Fee (Limited Seats)</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-brand-light-sky">PKR 35,000</span>
                      <span className="text-[0.85rem] line-through text-white/50">PKR 55,000</span>
                    </div>
                    <p className="mt-1 text-[0.75rem] text-white/60">Save PKR 20,000 — apply fast</p>
                  </div>

                  {/* Payment Options */}
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[1px] text-brand-light-sky">
                      Full Payment
                    </span>
                    <span className="rounded-sm border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[1px] text-brand-light-sky">
                      Monthly (PKR 5,883 x 6)
                    </span>
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
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded bg-brand-gold py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-brand-gold-light"
                  >
                    <Send className="mr-1 inline h-4 w-4" /> Enroll Now
                  </button>

                  <p className="mt-3 text-center text-[0.78rem] text-white/90">
                    Questions?{' '}
                    <a href="https://wa.me/923019753393" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment form — full width, below the grid */}
        <div id="enroll-form" className="mt-10 border border-white/10 bg-brand-cream p-8">
          <h3 className="mb-6 font-display text-xl font-bold text-white">Quick Enrollment</h3>

          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-4">
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
              <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Email <span className="text-red-400">*</span></label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
            </div>

            <div>
              <label className="mb-1 block text-[0.78rem] font-semibold text-brand-text">Course</label>
              <input type="text" value={course.title} readOnly className={`${inputClass} bg-white text-white/90 cursor-default`} />
            </div>

            {/* Payment */}
            <div>
              <label className="mb-1.5 block text-[0.78rem] font-semibold text-brand-text">Payment Method *</label>
              <div className="grid gap-2 sm:grid-cols-3">
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

            {/* Supabase Status Indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[0.75rem] text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Powered by secure Supabase backend</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
