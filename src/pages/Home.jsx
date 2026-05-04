import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import FeeSection from '../components/FeeSection'
import FeaturesList from '../components/FeaturesList'
import courses from '../data/courses'

function RevealSection({ children, className = '' }) {
  const [ref, isVisible] = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const featured = courses.filter((c) => c.featured)

  return (
    <>
      <Hero />

      {/* Featured Courses */}
      <RevealSection>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-brand-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Our Programs
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Diploma Programs
              </h2>
              <p className="mt-3 text-slate-500">
                Explore our most popular programs designed to launch your career in psychology and health sciences.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((course, i) => (
                <div key={course.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="visible">
                    <CourseCard course={course} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/courses" className="btn-outline">
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <FeeSection />
      </RevealSection>

      <RevealSection>
        <FeaturesList />
      </RevealSection>

      {/* CTA Banner */}
      <section className="grain relative overflow-hidden bg-gradient-to-br from-brand-primary-dark to-brand-primary py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(234,88,12,0.15), transparent)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Apply now and take the first step toward a rewarding career in psychology or health sciences.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/admissions" className="btn-accent text-base">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/923019753393"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-white/20 !text-white hover:!bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
