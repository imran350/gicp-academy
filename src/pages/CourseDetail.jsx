import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Clock, CalendarDays, ArrowLeft, CheckCircle, Send,
  CreditCard, Smartphone, Building, AlertCircle, Star,
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

const paymentMethods = [
  {
    id: 'jazzcash',
    label: 'JazzCash',
    icon: Smartphone,
    desc: 'Pay via JazzCash mobile wallet',
    color: 'bg-red-50 text-red-600 border-red-200',
    activeColor: 'bg-red-100 border-red-400 ring-2 ring-red-200',
  },
  {
    id: 'easypaisa',
    label: 'EasyPaisa',
    icon: Smartphone,
    desc: 'Pay via EasyPaisa mobile wallet',
    color: 'bg-green-50 text-green-600 border-green-200',
    activeColor: 'bg-green-100 border-green-400 ring-2 ring-green-200',
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    icon: Building,
    desc: 'Direct bank deposit / wire transfer',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    activeColor: 'bg-blue-100 border-blue-400 ring-2 ring-blue-200',
  },
]

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id)

  const [form, setForm] = useState({
    full_name: '',
    father_name: '',
    phone: '',
    email: '',
    course: course?.title || '',
    payment_method: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  if (!course) {
    return (
      <section className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-slate-900">Course Not Found</h1>
          <p className="mt-3 text-slate-500">This course doesn't exist.</p>
          <Link to="/courses" className="btn-primary mt-6">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
        </div>
      </section>
    )
  }

  const Icon = course.icon

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      if (!supabase) throw new Error('Supabase not configured')
      const { error } = await supabase.from('admissions').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ full_name: '', father_name: '', phone: '', email: '', course: course.title, payment_method: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/courses"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Course info */}
          <div className="lg:col-span-2">
            {/* Course header */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary-50">
                  <Icon className="h-7 w-7 text-brand-primary" />
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                    {course.title}
                  </h1>
                  <p className="mt-1 text-lg font-medium text-brand-primary">{course.subtitle}</p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">{course.description}</p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary-50 px-3 py-1.5 text-sm font-medium text-brand-primary">
                  <Clock className="h-4 w-4" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary-50 px-3 py-1.5 text-sm font-medium text-brand-primary">
                  <CalendarDays className="h-4 w-4" /> {course.schedule}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-accent-50 px-3 py-1.5 text-sm font-medium text-brand-accent">
                  <Star className="h-4 w-4" /> Internationally Recognized
                </span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <h2 className="mb-4 font-display text-xl font-bold text-slate-900">What You'll Learn</h2>
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
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods Info */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <h2 className="mb-4 font-display text-xl font-bold text-slate-900">Payment Methods</h2>
              <p className="mb-4 text-sm text-slate-500">We accept the following payment methods:</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {paymentMethods.map((pm) => {
                  const PmIcon = pm.icon
                  return (
                    <div
                      key={pm.id}
                      className={`flex items-center gap-3 rounded-xl border p-4 ${pm.color}`}
                    >
                      <PmIcon className="h-6 w-6 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold">{pm.label}</p>
                        <p className="text-xs opacity-70">{pm.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Sticky enrollment card (Udemy style) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Price card */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark p-6 text-white">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold">PKR 35,000</span>
                    <span className="text-sm line-through opacity-60">PKR 55,000</span>
                  </div>
                  <p className="mt-1 text-sm text-indigo-200">Scholarship fee — limited seats</p>
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
                    <Star className="h-3 w-3" /> Save PKR 20,000
                  </div>
                </div>

                <div className="p-6">
                  <ul className="mb-6 space-y-3">
                    {[
                      '6 Months Program',
                      '2 Days / Week',
                      'Live Online Classes',
                      'Assignments & Exams',
                      'Digital Certification',
                      'Installment Plan Available',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-accent w-full justify-center text-base"
                  >
                    <Send className="h-4 w-4" /> Enroll Now
                  </button>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Questions?{' '}
                    <a href="https://wa.me/923019753393" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              {/* Enrollment form */}
              <div id="enroll-form" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="mb-4 font-display text-lg font-bold text-slate-900">Quick Enrollment</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={form.full_name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Father's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="father_name"
                      required
                      value={form.father_name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="Your father's name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Course (pre-filled, read-only) */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Course</label>
                    <input
                      type="text"
                      name="course"
                      value={course.title}
                      readOnly
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500"
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid gap-2">
                      {paymentMethods.map((pm) => {
                        const PmIcon = pm.icon
                        return (
                          <label
                            key={pm.id}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-[border-color,background-color] duration-200 ${
                              form.payment_method === pm.id ? pm.activeColor : 'border-slate-200 hover:border-slate-300'
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
                            <PmIcon className="h-5 w-5 flex-shrink-0" />
                            <span className="text-sm font-medium">{pm.label}</span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Message (optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      placeholder="Any questions..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : (
                      <>Submit Application <Send className="h-4 w-4" /></>
                    )}
                  </button>

                  {/* Status */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      Application submitted! We'll contact you on WhatsApp.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      Something went wrong. Try again or WhatsApp us.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
