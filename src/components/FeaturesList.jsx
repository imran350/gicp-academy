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
    desc: 'Interactive sessions via Zoom & Google Meet with qualified instructors — attend from anywhere.',
  },
  {
    icon: MonitorPlay,
    title: 'Recorded Lectures',
    desc: 'Access recordings anytime for revision. Never miss a class again.',
  },
  {
    icon: FileText,
    title: 'Assignments & Case Studies',
    desc: 'Regular assignments to reinforce learning and build practical clinical skills.',
  },
  {
    icon: ClipboardCheck,
    title: 'Online Exams',
    desc: '30-minute timed exam, auto-submitted with instant results displayed on screen.',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Receive an internationally inspired diploma certificate upon successful completion.',
  },
]

export default function FeaturesList() {
  return (
    <section className="bg-brand-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-lg">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-teal">
            Why GICP Academy
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-brand-navy">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-[1rem] font-light leading-[1.7] text-brand-muted">
            A complete learning experience designed for working professionals and students.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-lg border border-brand-teal/10 bg-white/80 p-8 transition-colors duration-200 hover:bg-white"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-brand-teal/10">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="mb-2 text-[0.95rem] font-semibold text-brand-navy">{f.title}</h3>
                <p className="text-[0.85rem] font-light leading-[1.65] text-brand-muted">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
