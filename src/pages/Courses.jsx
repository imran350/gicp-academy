import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            All Programs
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Diploma Programs
          </h1>
          <p className="mt-3 text-slate-500">
            Choose from 9 internationally recognized diploma programs. All programs are 6 months, 2 days per week, delivered online.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
