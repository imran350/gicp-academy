import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

export default function Courses() {
  return (
    <div className="overflow-x-hidden">
      {/* Navy Header Banner */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
                Professional Diplomas
              </div>
              <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-tight text-white mb-3">
                Select from 14+ Professionally<br />Certified Diploma Programs
              </h1>
              <p className="text-[1.05rem] font-light leading-[1.8] text-slate-200 max-w-2xl">
                Empowering your career with expert-led training and industry-standard certifications.
              </p>
            </div>
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
    </div>
  )
}
