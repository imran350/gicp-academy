import { useState } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

export default function Admissions() {
  const [form, setForm] = useState({
    full_name: '',
    father_name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      if (!supabase) {
        throw new Error('Supabase not configured')
      }
      const { error } = await supabase.from('admissions').insert([form])

      if (error) throw error
      setStatus('success')
      setForm({ full_name: '', father_name: '', phone: '', email: '', course: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Admissions
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Apply for Admission
          </h1>
          <p className="mt-3 text-slate-500">
            Fill out the form below to apply. We'll get back to you within 24 hours via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                value={form.full_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                placeholder="Your full name"
              />
            </div>

            {/* Father's Name */}
            <div>
              <label htmlFor="father_name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Father's Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="father_name"
                name="father_name"
                required
                value={form.father_name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                placeholder="Your father's name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                placeholder="03XX-XXXXXXX"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Course Select */}
          <div className="mt-5">
            <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-slate-700">
              Select Course <span className="text-red-500">*</span>
            </label>
            <select
              id="course"
              name="course"
              required
              value={form.course}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
            >
              <option value="">— Choose a program —</option>
              {courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title} — {c.subtitle}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              placeholder="Any questions or special requests..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary mt-6 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              'Submitting...'
            ) : (
              <>
                Submit Application <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {/* Status messages */}
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              Application submitted successfully! We'll contact you on WhatsApp soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              Something went wrong. Please try again or contact us on WhatsApp.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
