import { Link } from 'react-router-dom'
import { CheckCircle, Sparkles } from 'lucide-react'

export default function FeeSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Fee Structure
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Affordable Excellence
          </h2>
          <p className="mt-3 text-slate-500">
            Invest in your future with our competitively priced diploma programs. Scholarships and installment plans available.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Standard */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="mb-1 font-display text-lg font-bold text-slate-900">Standard Fee</h3>
            <p className="mb-5 text-sm text-slate-500">Full tuition for any diploma program</p>
            <div className="mb-6">
              <span className="font-display text-4xl font-extrabold text-slate-900">PKR 55,000</span>
              <span className="ml-1 text-sm text-slate-400">/ program</span>
            </div>
            <ul className="mb-8 space-y-3">
              {['Complete course material', 'Live online classes', 'Assignments & exams', 'Digital certification'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Scholarship */}
          <div className="relative rounded-2xl border-2 border-brand-accent bg-white p-8 shadow-card">
            {/* Badge */}
            <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white">
              <Sparkles className="h-3 w-3" /> Scholarship
            </div>
            <h3 className="mb-1 font-display text-lg font-bold text-slate-900">Scholarship Fee</h3>
            <p className="mb-5 text-sm text-slate-500">For eligible students — limited seats</p>
            <div className="mb-6">
              <span className="font-display text-4xl font-extrabold text-brand-accent">PKR 35,000</span>
              <span className="ml-1 text-sm text-slate-400">/ program</span>
            </div>
            <ul className="mb-8 space-y-3">
              {[
                'Everything in Standard',
                'Save PKR 20,000',
                'Installment plan available',
                'Priority career support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link to="/admissions" className="btn-accent">
            Apply for Scholarship
          </Link>
          <p className="mt-3 text-xs text-slate-400">Installment plans available — contact us on WhatsApp for details</p>
        </div>
      </div>
    </section>
  )
}
