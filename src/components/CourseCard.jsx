import { Link } from 'react-router-dom'
import { Clock, CalendarDays, ArrowRight } from 'lucide-react'

export default function CourseCard({ course }) {
  const Icon = course.icon

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-cardHover">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-primary-light" />

      <div className="flex flex-1 flex-col p-6">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary-50">
          <Icon className="h-6 w-6 text-brand-primary" />
        </div>

        {/* Title */}
        <h3 className="mb-1 font-display text-lg font-bold leading-snug text-slate-900">
          {course.title}
        </h3>
        <p className="mb-3 text-sm text-brand-primary font-medium">{course.subtitle}</p>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
          {course.description}
        </p>

        {/* Meta badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <Clock className="h-3 w-3" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <CalendarDays className="h-3 w-3" /> {course.schedule}
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/course/${course.id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:text-brand-primary-dark focus-visible:outline-2 focus-visible:outline-brand-primary"
        >
          Apply Now <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
