import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-slate-900 via-brand-teal-dark to-slate-900 pt-16">
      {/* Layered radial gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(15,118,110,0.35), transparent), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(217,119,6,0.12), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-teal-200 backdrop-blur-sm">
            <BookOpen className="h-4 w-4" />
            Enrollments Open for 2025
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Build Your Career in{' '}
            <span className="bg-gradient-to-r from-brand-teal-light to-brand-amber-light bg-clip-text text-transparent">
              Psychology & Health Sciences
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
            GICP Academy offers internationally recognized diploma programs in clinical psychology, therapy, and health sciences — designed for aspiring professionals in Pakistan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/admissions" className="btn-accent text-base">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="btn-outline !border-white/20 !text-white hover:!bg-white/10">
              View Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {[
              { value: '9', label: 'Diploma Programs' },
              { value: '6', label: 'Months Duration' },
              { value: '100+', label: 'Students Enrolled' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
