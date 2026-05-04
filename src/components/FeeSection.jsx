import { Link } from 'react-router-dom'
import { CheckCircle, Sparkles, Zap, Shield } from 'lucide-react'

export default function FeeSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-brand-dark py-24">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary-light">
            <Sparkles className="h-3 w-3" /> Fee Structure
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Affordable Excellence
          </h2>
          <p className="mt-3 text-slate-400">
            Invest in your future with competitively priced programs. Scholarships and installment plans available.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Standard */}
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-slate-400" />
              <h3 className="font-display text-lg font-bold text-white">Standard Fee</h3>
            </div>
            <p className="mb-6 text-sm text-slate-500">Full tuition for any diploma program</p>

            <div className="mb-8">
              <span className="font-display text-5xl font-extrabold text-white">PKR 55,000</span>
              <span className="ml-2 text-sm text-slate-500">/ program</span>
            </div>

            <ul className="mb-8 space-y-3">
              {['Complete course material', 'Live online classes', 'Assignments & exams', 'Digital certification'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary-light" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Scholarship — highlighted */}
          <div className="group relative rounded-2xl border border-brand-accent/30 bg-gradient-to-br from-brand-accent/10 to-transparent p-8 backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-accent/50">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Badge */}
            <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-accent/30">
              <Zap className="h-3 w-3" /> Best Value
            </div>

            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-accent" />
              <h3 className="font-display text-lg font-bold text-white">Scholarship Fee</h3>
            </div>
            <p className="mb-6 text-sm text-slate-400">For eligible students — limited seats</p>

            <div className="mb-2">
              <span className="font-display text-5xl font-extrabold text-brand-accent">PKR 35,000</span>
              <span className="ml-2 text-sm text-slate-500">/ program</span>
            </div>
            <p className="mb-8 text-sm font-medium text-emerald-400">Save PKR 20,000</p>

            <ul className="mb-8 space-y-3">
              {[
                'Everything in Standard',
                'Installment plan available',
                'Priority career support',
                'Lifetime access to recordings',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/admissions" className="btn-accent text-base">
            Apply for Scholarship
          </Link>
          <p className="mt-4 text-xs text-slate-500">Installment plans available — contact us on WhatsApp for details</p>
        </div>
      </div>
    </section>
  )
}
