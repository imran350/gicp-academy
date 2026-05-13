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
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 flex flex-col gap-8 px-4">
            <div>
              <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
                Our Diploma Courses
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-tight text-white mb-2">
                Choose Your
                <br />
                Specialization
              </h2>
            </div>
            <p className="max-w-sm text-[1rem] font-light leading-[1.7] text-slate-300">
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

      {/* Expert Trainer Highlight */}
      <RevealSection className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col sm:flex-row justify-center items-center">
            {/* Rounded Square Image Placeholder */}
            <div className="h-24 w-24 rounded-lg bg-brand-teal/20 flex items-center justify-center flex-shrink-0 p-2">
                          </div>

            <div className="text-center sm:text-left">
              <div className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
                Expert Trainer
              </div>
              <h3 className="text-xl font-bold text-white !important">Tuba Shahid</h3>
              <p className="mt-1 text-white !important">Child Psychologist & Senior Trainer</p>
              <p className="mt-2 text-sm leading-relaxed text-white !important max-w-md">
                Specializes in CBT, ASD assessments, and pediatric mental health. Learn from her extensive industry experience.
              </p>
              <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-brand-sky-blue hover:underline text-sm font-semibold">
                Meet Our Trainers <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Careers Section */}
      <RevealSection>
        <section className="grain relative overflow-hidden py-24 lg:py-28">
          {/* Accent glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(14, 165, 233, 0.12), transparent 70%)' }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
                  Career Opportunities
                </div>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-tight text-white">
                  Where Will
                  <br />
                  Your Diploma
                  <br />
                  Take You?
                </h2>
                <p className="mt-4 mb-8 max-w-md text-[1rem] font-light leading-[1.7] text-slate-300">
                  Our graduates are equipped to work across a wide range of clinical, educational, and community settings.
                </p>
                <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-brand-sky-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                  Start Your Journey <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏥', label: 'Clinics & Hospitals' },
                  { icon: '♿', label: 'Rehabilitation Centers' },
                  { icon: '🏫', label: 'Schools & Special Education' },
                  { icon: '💼', label: 'Private Practice' },
                  { icon: '🌍', label: 'NGOs & Public Health' },
                  { icon: '🧠', label: 'Mental Health Organizations' },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="glass-card p-5 transition-transform duration-200 hover:scale-[1.03]"
                  >
                    <div className="mb-2.5 text-[1.4rem]">{c.icon}</div>
                    <div className="text-[0.85rem] font-medium leading-snug text-white/90">
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
      <section className="py-20 px-6 lg:px-8" style={{ background: 'rgba(30, 58, 138, 0.25)' }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.25] text-white max-w-lg">
            Limited Scholarship Seats Available —{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Enroll Today</span>
          </h2>
          <div className="flex flex-col items-end gap-3">
            <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark-navy shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              Apply Now &rarr;
            </Link>
            <span className="text-[0.8rem] font-light leading-[1.7] text-slate-400">
              &#128197; New batch starting soon &middot; Seats filling fast
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
