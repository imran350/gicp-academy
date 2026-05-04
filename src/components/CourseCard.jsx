import { Link } from 'react-router-dom'
import { Clock, CalendarDays, ArrowRight, Star } from 'lucide-react'

export default function CourseCard({ course, index = 0 }) {
  const Icon = course.icon

  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-violet-500 to-fuchsia-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-500',
    'from-pink-500 to-rose-600',
    'from-cyan-500 to-blue-600',
    'from-teal-500 to-emerald-600',
    'from-purple-500 to-indigo-600',
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <Link
      to={`/course/${course.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-2 hover:shadow-cardHover"
    >
      {/* Top gradient header */}
      <div className={`relative flex h-36 items-end bg-gradient-to-br ${gradient} p-5`}>
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/10" />

        {/* Icon */}
        <div className="absolute top-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-white" />
        </div>

        {/* Featured badge */}
        {course.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Star className="h-3 w-3" /> Featured
          </div>
        )}

        {/* Course title on gradient */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold leading-snug text-white">
            {course.title}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-sm font-medium text-brand-primary">{course.subtitle}</p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
          {course.description}
        </p>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <Clock className="h-3 w-3" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
            <CalendarDays className="h-3 w-3" /> {course.schedule}
          </span>
        </div>

        {/* CTA */}
        <div className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-colors duration-200 group-hover:text-brand-primary-dark">
          View Details <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
