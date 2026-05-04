import { GraduationCap, Briefcase, RefreshCcw, Globe } from 'lucide-react'

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Graduates',
    desc: 'Foundation programs for aspiring psychology and healthcare professionals starting their journey.',
    color: 'teal',
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    desc: 'Advance your career with flexible online programs designed for busy schedules.',
    color: 'amber',
  },
  {
    icon: RefreshCcw,
    title: 'Career Changers',
    desc: 'Transition smoothly into psychology and healthcare with structured diploma programs.',
    color: 'teal',
  },
  {
    icon: Globe,
    title: 'Online Learners',
    desc: 'Study from anywhere in Pakistan with our comprehensive digital learning platform.',
    color: 'amber',
  },
]

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-teal-50/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Tailored Pathways
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-3 text-slate-500">
            Programs designed for every stage of your professional journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => {
            const Icon = a.icon
            const isTeal = a.color === 'teal'
            return (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 text-center transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-card"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full ${
                    isTeal
                      ? 'bg-gradient-to-r from-brand-teal to-brand-teal-light'
                      : 'bg-gradient-to-r from-brand-amber to-brand-amber-light'
                  }`}
                />
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-200 ${
                    isTeal
                      ? 'bg-brand-teal-50 group-hover:bg-brand-teal'
                      : 'bg-brand-amber-50 group-hover:bg-brand-amber'
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 transition-colors duration-200 ${
                      isTeal
                        ? 'text-brand-teal group-hover:text-white'
                        : 'text-brand-amber group-hover:text-white'
                    }`}
                  />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{a.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
