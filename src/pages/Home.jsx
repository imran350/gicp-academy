import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import FeeSection from '../components/FeeSection'
import FeaturesList from '../components/FeaturesList'
import HowItWorks from '../components/HowItWorks'
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
  return (
    <>
      <Hero />

      {/* Courses Section */}
      <section className="bg-brand-cream py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 flex flex-col gap-8 px-4">
            <div>
              <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
                Our Diploma Courses
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight text-brand-gold mb-2">
                Choose Your
                <br />
                Specialization
              </h2>
            </div>
            <p className="max-w-sm text-[1rem] font-light leading-[1.7] text-brand-gold">
              Each program is designed around practical outcomes, evidence-based methods, and career readiness.
            </p>

          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <RevealSection>
        <FeeSection />
      </RevealSection>

      <RevealSection>
        <HowItWorks />
      </RevealSection>

      <RevealSection>
        <FeaturesList />
      </RevealSection>

      {/* Careers Section */}
      <RevealSection>
        <section className="grain relative overflow-hidden bg-brand-navy py-24 lg:py-28">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(14, 165, 233, 0.15), transparent 70%)' }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
                  Career Opportunities
                </div>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight text-white">
                  Where Will
                  <br />
                  Your Diploma
                  <br />
                  Take You?
                </h2>
                <p className="mt-4 mb-8 max-w-md text-[1rem] font-light leading-[1.7] text-brand-text-light">
                  Our graduates are equipped to work across a wide range of clinical, educational, and community settings.
                </p>
                <Link to="/admissions" className="btn-primary">
                  Start Your Journey
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\uD83C\uDFE5', label: 'Clinics & Hospitals' },
                  { icon: '\u267F', label: 'Rehabilitation Centers' },
                  { icon: '\uD83C\uDFEB', label: 'Schools & Special Education' },
                  { icon: '\uD83D\uDCBC', label: 'Private Practice' },
                  { icon: '\uD83C\uDF0D', label: 'NGOs & Public Health' },
                  { icon: '\uD83E\uDDE0', label: 'Mental Health Organizations' },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="border border-white/10 bg-brand-dark-navy p-5 transition-colors duration-200"
                  >
                    <div className="mb-2.5 text-[1.4rem]">{c.icon}</div>
                    <div className="text-[0.85rem] font-medium leading-snug text-white/85">
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CTA Strip */}
      <section className="bg-brand-navy py-20 px-6 lg:px-8 shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.25] text-white max-w-lg">
            Limited Scholarship Seats Available —{' '}
            <em className="not-italic text-white">Enroll Today</em>
          </h2>
          <div className="flex flex-col items-end gap-3">
            <Link to="/admissions" className="btn-white">
              Apply Now &rarr;
            </Link>
            <span className="text-[0.8rem] font-light leading-[1.7] text-brand-text-secondary">
              &#128197; New batch starting soon &middot; Seats filling fast
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
