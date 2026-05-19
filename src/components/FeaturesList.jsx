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
    desc: '45-minute timed exam, auto-submitted with instant results displayed on screen.',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Receive a professional diploma certificate upon successful completion.',
  },
]

export default function FeaturesList() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-lg">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
            Why GICP Academy
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-[1rem] font-light leading-[1.7] text-slate-300">
            A complete learning experience designed for working professionals and students.
          </p>
        </div>

        {/* Grid — glassmorphism cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="glass-card group p-8 transition-transform duration-200 hover:scale-[1.03]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-sky-blue/15">
                  <Icon className="h-5 w-5 text-brand-sky-blue" />
                </div>
                <h3 className="mb-2 text-[0.95rem] font-semibold text-white">{f.title}</h3>
                <p className="text-[0.85rem] font-light leading-[1.65] text-slate-300">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
