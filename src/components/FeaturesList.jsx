import {
  Video,
  MonitorPlay,
  FileText,
  ClipboardCheck,
  Award,
} from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Live Online Classes',
    desc: 'Interactive sessions with qualified instructors — attend from anywhere in Pakistan.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: MonitorPlay,
    title: 'Recorded Lectures',
    desc: 'Access recordings anytime for revision. Never miss a class again.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: FileText,
    title: 'Assignments',
    desc: 'Regular assignments to reinforce learning and build practical skills.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Online Exams',
    desc: 'Convenient online examination system with instant results.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Receive an internationally recognized diploma upon successful completion.',
    gradient: 'from-pink-500 to-rose-500',
  },
]

export default function FeaturesList() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Why GICP Academy
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-3 text-slate-500">
            A complete learning experience designed for working professionals and students.
          </p>
        </div>

        {/* Grid — 2 column layout for larger feel */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-card"
              >
                {/* Gradient accent on hover */}
                <div className={`pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br ${f.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`} />

                <div className="relative">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold text-slate-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
