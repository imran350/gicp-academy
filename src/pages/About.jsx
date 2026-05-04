import { GraduationCap, Briefcase, Building2, Globe, Award, Users } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Recognized Certification',
    desc: 'Our diplomas are recognized internationally, opening doors to career opportunities worldwide.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    desc: 'Learn from experienced practitioners and academics who bring real-world expertise to every class.',
  },
  {
    icon: Globe,
    title: 'Online Learning',
    desc: 'Attend live classes from anywhere. All programs are delivered online with flexible schedules.',
  },
]

const careers = [
  { icon: Building2, label: 'Hospitals' },
  { icon: Briefcase, label: 'Private Clinics' },
  { icon: GraduationCap, label: 'Rehabilitation Centers' },
  { icon: Globe, label: 'NGOs & Public Health' },
]

export default function About() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            About Us
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About GICP Academy
          </h1>
          <p className="mt-3 text-slate-500">
            Empowering the next generation of mental health and rehabilitation professionals.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mb-16 max-w-3xl">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="mb-4 font-display text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="leading-relaxed text-slate-600">
              GICP Academy is dedicated to providing accessible, high-quality education in psychology,
              therapy, and health sciences. We believe every student in Pakistan deserves the opportunity
              to build a meaningful career in these critical fields — without the burden of prohibitive costs
              or geographic barriers.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our programs combine rigorous academic content with practical, hands-on training. Each diploma
              is designed to equip graduates with the knowledge, skills, and confidence to enter the workforce
              immediately upon completion.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-50">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-slate-900">{h.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{h.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Careers */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-slate-900">Career Opportunities</h2>
          <p className="mb-8 text-slate-500">
            Our graduates go on to work in a variety of professional settings:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {careers.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-brand-teal" />
                  {c.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
