import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group glass-card relative flex flex-col overflow-hidden animate-slowFloat transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer"
    >
      {/* Top accent bar */}
      <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-brand-sky-blue to-brand-light-sky" />

      <div className="p-6 flex-1 flex flex-col relative z-10">
        {/* Number + Badge + Duration/Fee tags row */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {/* FORCED pure white course number */}
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-sky-blue/20 text-[1rem] font-bold course-number">
              {course.num}
            </span>
            <Star className="h-4 w-4 text-amber-400 animate-pulse-glow" />
          </div>

          {/* Duration tag */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-sky-blue/20 px-2.5 py-1 text-[0.65rem] font-bold text-brand-sky-blue">
              {course.duration}
            </span>
          </div>

          {course.badge && (
            <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[1px] text-gold-gradient">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title — White */}
        <h3 className="mb-1.5 text-[1.08rem] font-display font-bold leading-tight tracking-[-0.02em] text-white course-title">
          {course.title}
        </h3>

        {/* Accent line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-brand-sky-blue/60 to-brand-light-sky/60 rounded-full mb-3" />

        {/* Tagline — Light Blue */}
        {course.tagline && (
          <p className="mb-2 text-[0.82rem] font-body font-medium leading-[1.6] text-blue-300">
            {course.tagline}
          </p>
        )}

        {/* Description — Light Blue */}
        <p className="flex-1 text-[0.82rem] font-body font-light leading-[1.7] course-description">
          {course.description}
        </p>

        {/* Duration + CTA — FORCED pure white */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-[0.75rem] font-medium course-details">{course.schedule}</span>
          <span className="flex items-center gap-1 text-[0.78rem] font-semibold text-brand-sky-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Details <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  )
}
