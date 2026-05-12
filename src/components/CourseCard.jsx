import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group relative flex flex-col overflow-hidden border border-white/20 bg-brand-dark-navy/30 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.5),0_8px_24px_rgba(14,165,233,0.15)] animate-slowFloat"
  style={{ backgroundImage: `url(${course.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-sky-blue to-brand-light-sky" />

      {/* Dark text overlay for readability */}
      <div className="absolute inset-0 bg-brand-dark-navy/60 z-5" />

      <div className="p-6 flex-1 flex flex-col backdrop-blur-sm relative z-10">
        {/* Number + Badge row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-sky-blue font-display text-[1rem] font-bold text-brand-text-dark">
              {course.num}
            </span>
            <Star className="h-4 w-4 text-yellow-400 animate-pulse-glow" />
          </div>
          {course.badge && (
            <span className="rounded-sm bg-brand-gold/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[1px] text-brand-gold">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-1 text-[1.05rem] font-display font-bold leading-tight text-brand-text-dark group-hover:text-brand-light-sky transition-colors duration-300 tracking-[-0.02em]">
          {course.title}
        </h3>
        {/* Expanding loading-style line (triggers on card reveal) */}
        <div className="w-full h-0.5 bg-gradient-to-r from-brand-sky-blue to-brand-light-sky overflow-hidden">
          <div className="h-full w-0 bg-brand-sky-blue transition-all duration-1s ease-out reveal-line" />
        </div>

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
