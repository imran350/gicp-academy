import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <>
      {/* Navy Header Banner */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
                Our Diploma Courses
              </div>
              <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
                Choose Your<br />Specialization
              </h1>
            </div>
            <p className="max-w-sm text-[1rem] font-light leading-[1.7] text-slate-300">
              Choose from 10 internationally recognized diploma programs. All programs are 6 months, 2 days per week, delivered online.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid — mobile-optimized (1 column on small screens) */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
