import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group relative flex flex-col overflow-hidden border border-brand-sky-blue/15 bg-brand-cream relative overflow-hidden transition duration-300 hover:shadow-[0_8px_24px_rgba(14,165,233,0.15)]"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-sky-blue to-brand-light-sky" />

      <div className="p-6 flex-1 flex flex-col bg-brand-navy-blue/10 relative z-10">
        {/* Number + Badge row */}
        <div className="mb-3 flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-sky-blue font-display text-[1rem] font-bold text-brand-text-dark">
            {course.num}
          </span>
          {course.badge && (
            <span className="rounded-sm bg-brand-gold/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[1px] text-brand-gold">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-[1.05rem] font-display font-bold leading-tight text-brand-text-dark group-hover:text-brand-light-sky transition-colors duration-300 tracking-[-0.02em]">
          {course.title}
        </h3>

        {/* Tagline */}
        {course.tagline && (
          <p className="mb-2 text-[0.8rem] font-body font-light leading-[1.7] text-brand-text-dark">
            {course.tagline}
          </p>
        )}

        {/* Description */}
        <p className="flex-1 text-[0.82rem] font-body font-light leading-[1.7] text-brand-text-dark">
          {course.description}
        </p>

        {/* Duration + CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-3">
          <span className="text-[0.75rem] font-medium text-brand-text-dark">{course.duration} &middot; {course.schedule}</span>
          <span className="flex items-center gap-1 text-[0.78rem] font-semibold text-brand-text-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Details <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div></Link>
  )
}
