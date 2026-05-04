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
  },
  {
    icon: MonitorPlay,
    title: 'Recorded Lectures',
    desc: 'Access recordings anytime for revision. Never miss a class again.',
  },
  {
    icon: FileText,
    title: 'Assignments',
    desc: 'Regular assignments to reinforce learning and build practical skills.',
  },
  {
    icon: ClipboardCheck,
    title: 'Online Exams',
    desc: 'Convenient online examination system with instant results.',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Receive an internationally recognized diploma upon successful completion.',
  },
]

export default function FeaturesList() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Why GICP Academy
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-3 text-slate-500">
            A complete learning experience designed for working professionals and students.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal-50 transition-colors duration-200 group-hover:bg-brand-teal group-hover:text-white">
                  <Icon className="h-5 w-5 text-brand-teal transition-colors duration-200 group-hover:text-white" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-slate-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
