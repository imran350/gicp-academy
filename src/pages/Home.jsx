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
          <div className="mb-20 flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-full">
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

      {/* Expert Trainers Section */}
      <RevealSection className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
              Expert Faculty
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-tight text-white">
              Our Expert Trainers
            </h2>
            <p className="mt-3 text-[1rem] font-light text-slate-300 max-w-2xl mx-auto">
              Learn from industry professionals with real-world experience
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 mx-auto max-w-full">
            {/* Tuba Shahid Profile Card */}
            <Link to="/about" className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer will-change-transform">
              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Centered Name Section */}
              <div className="text-center mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white !important">Tuba Shahid</h3>
                <p className="mt-2 text-lg font-semibold text-white !important">Child Psychologist & Senior Trainer</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed text-white !important">
                  A dedicated professional with expertise in Clinical Psychology, CBT, and Speech & Language Therapy. Tuba has extensive experience training at DXN KINDAN and Healing Hub, specializing in behavioral issues, ASD, and psychological assessments.
                </p>

                <div className="mt-4 w-full">
                  <h4 className="text-sm font-semibold uppercase tracking-[2px] text-white mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {['CBT', 'ABA', 'ASD Psychology', 'Behavioral Assessment', 'Clinical Development'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-brand-sky-blue/10 text-white text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* Sumaira Profile Card */}
            <Link to="/about" className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer will-change-transform">
              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Centered Name Section */}
              <div className="text-center mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white !important">Sumaira</h3>
                <p className="mt-2 text-lg font-semibold text-white !important">Senior Instructor & Tech Expert</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed text-white !important">
                  A multidisciplinary professional with a Master's in Applied Psychology and PGD in Computer Sciences. Sumaira specializes in Clinical Psychology and tech-driven fields like Web Development and Content Strategy.
                </p>

                <div className="mt-4 w-full">
                  <h4 className="text-sm font-semibold uppercase tracking-[2px] text-white mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {['Clinical Psychology', 'Web Development', 'E-commerce', 'Content Writing'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-brand-sky-blue/10 text-white text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* Dr. Nida Profile Card */}
            <Link to="/about" className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer will-change-transform">
              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Centered Name Section */}
              <div className="text-center mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white !important">Dr. Nida</h3>
                <p className="mt-2 text-lg font-semibold text-white !important">Lead Clinical Psychologist & Speech Therapist</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed text-white !important">
                  Dr. Nida brings 8 years of professional experience in Child Development and Speech Therapy. She is dedicated to empowering students through practical, evidence-based clinical training and neurodevelopmental interventions.
                </p>

                <div className="mt-4 w-full">
                  <h4 className="text-sm font-semibold uppercase tracking-[2px] text-white mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {['Speech Therapy', 'Behavioral Management', 'Clinical Training', 'Neurodevelopment'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-brand-sky-blue/10 text-white text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Careers Section */}
      <RevealSection>
        <section className="grain relative overflow-hidden py-24 lg:py-28">
          {/* Accent glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full max-w-full"
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
                    className="glass-card p-5 transition-transform duration-200 hover:scale-[1.03] will-change-transform"
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

    </>
  )
}
