import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-brand-teal/10 bg-gradient-to-br from-brand-cream/90 to-brand-teal/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_4px_12px_rgba(26,122,110,0.08),0_8px_24px_rgba(26,122,110,0.04)]"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-teal to-brand-gold" />

      <div className="p-6 flex-1 flex flex-col">
        {/* Number + Badge row */}
        <div className="mb-3 flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-teal font-display text-[1rem] font-bold text-white">
            {course.num}
          </span>
          {course.badge && (
            <span className="rounded-sm bg-brand-gold/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[1px] text-brand-gold">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-[1.05rem] font-bold leading-tight text-brand-navy group-hover:text-brand-teal transition-colors duration-300 tracking-[-0.02em]">
          {course.title}
        </h3>

        {/* Tagline */}
        {course.tagline && (
          <p className="mb-2 text-[0.8rem] font-medium leading-[1.5] text-brand-teal/80">
            {course.tagline}
          </p>
        )}

        {/* Description */}
        <p className="flex-1 text-[0.82rem] font-light leading-[1.6] text-brand-muted">
          {course.description}
        </p>

        {/* Duration + CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-3">
          <span className="text-[0.75rem] font-medium text-brand-muted">{course.duration} &middot; {course.schedule}</span>
          <span className="flex items-center gap-1 text-[0.78rem] font-semibold text-brand-teal opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Details <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
