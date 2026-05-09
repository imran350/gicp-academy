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
    color: 'gold',
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
    color: 'gold',
  },
]

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-sm border border-brand-teal/20 bg-brand-teal/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[2px] text-brand-teal">
            Tailored Pathways
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-brand-navy">
            Who We Serve
          </h2>
          <p className="mt-3 text-[1rem] font-light leading-[1.7] text-brand-muted">
            Courses designed for every stage of your professional journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => {
            const Icon = a.icon
            const isTeal = a.color === 'teal'
            return (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-xl border border-brand-teal/10 bg-white p-6 text-center transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-card"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full ${
                    isTeal
                      ? 'bg-gradient-to-r from-brand-teal to-brand-teal-light'
                      : 'bg-gradient-to-r from-brand-gold to-brand-gold-light'
                  }`}
                />
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-200 ${
                    isTeal
                      ? 'bg-brand-teal/10 group-hover:bg-brand-teal'
                      : 'bg-brand-gold/10 group-hover:bg-brand-gold'
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 transition-colors duration-200 ${
                      isTeal
                        ? 'text-brand-teal group-hover:text-white'
                        : 'text-brand-gold group-hover:text-brand-navy'
                    }`}
                  />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">{a.title}</h3>
                <p className="text-[0.85rem] font-light leading-[1.65] text-brand-muted">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
