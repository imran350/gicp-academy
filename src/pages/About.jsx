import { Award, Users, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

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

const highlights = [
  { icon: Award, title: 'Recognized Certification', desc: 'Our diplomas are recognized internationally, opening doors to career opportunities worldwide.' },
  { icon: Users, title: 'Expert Faculty', desc: 'Learn from experienced practitioners and academics who bring real-world expertise to every class.' },
  { icon: Globe, title: 'Online Learning', desc: 'Attend live classes from anywhere. All programs are delivered online with flexible schedules.' },
]

const careers = [
  { icon: '🏥', label: 'Clinics & Hospitals' },
  { icon: '♿', label: 'Rehabilitation Centers' },
  { icon: '🏫', label: 'Schools & Special Education' },
  { icon: '💼', label: 'Private Practice' },
  { icon: '🌍', label: 'NGOs & Public Health' },
  { icon: '🧠', label: 'Mental Health Organizations' },
]

export default function About() {
  return (
    <>
      {/* Navy Header — EXPLICIT White for About Us heading */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            About Us
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">
            About GICP Academy
          </h1>
          <p className="mt-3 text-[1rem] font-light text-slate-300">
            Empowering the next generation of mental health and rehabilitation professionals.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid — mobile-optimized */}
      <RevealSection className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Mission */}
            <div className="glass-card p-8">
              <h2 className="mb-4 font-display text-2xl font-extrabold text-white">Our Mission</h2>
              <p className="leading-relaxed text-slate-300">
                GICP Academy is dedicated to providing accessible, high-quality education in psychology,
                therapy, and health sciences. We believe every student in Pakistan deserves the opportunity
                to build a meaningful career in these critical fields — without the burden of prohibitive costs
                or geographic barriers.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Our programs combine rigorous academic content with practical, hands-on training. Each diploma
                is designed to equip graduates with the knowledge, skills, and confidence to enter the workforce
                immediately upon completion.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8">
              <h2 className="mb-4 font-display text-2xl font-extrabold text-white">Our Vision</h2>
              <p className="leading-relaxed text-slate-300">
                To become the leading provider of mental health and rehabilitation education in South Asia,
                recognized for our innovative curriculum, expert faculty, and commitment to student success.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                We aim to create a community of professionals who transform lives through evidence-based practice,
                compassion, and a dedication to improving mental health outcomes for individuals and communities.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Highlights — Expert Faculty enhanced */}
      <RevealSection className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => {
              const Icon = h.icon
              // Enhanced style for Expert Faculty section
              const isExpertFaculty = h.title === 'Expert Faculty'
              const cardClasses = isExpertFaculty
                ? 'glass-card border-white/20 bg-brand-sky-blue/5 p-6 transition-transform duration-200 hover:scale-[1.03]'
                : 'glass-card border-white/10 p-6'

              return (
                <div key={h.title} className={cardClasses}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-brand-sky-blue/20">
                    <Icon className="h-5 w-5 text-brand-sky-blue" />
                  </div>
                  <h3 className="mb-2 text-[0.95rem] font-semibold text-white">{h.title}</h3>
                  <p className="text-[0.85rem] font-light leading-[1.65] text-slate-300">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* Our Expert Trainers Section */}
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

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {/* Tuba Shahid Profile Card */}
            <div className="glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center">
              {/* Centered Name Section */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white !important">Tuba Shahid</h3>
                <p className="mt-2 text-lg font-semibold text-white !important">Child Psychologist & Senior Trainer</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left">
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
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Careers — mobile-optimized grid */}
      <RevealSection className="py-16" style={{ background: 'rgba(30, 58, 138, 0.25)' }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="mb-3 font-display text-2xl font-extrabold text-white">Career Opportunities</h2>
          <p className="mb-8 text-[1rem] font-light text-slate-300">Our graduates go on to work in a variety of professional settings:</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {careers.map((c) => (
              <div key={c.label} className="glass-card px-4 py-4 text-[0.85rem] font-medium text-white/85 transition-colors hover:bg-brand-sky-blue/10">
                <span className="mr-2">{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
          <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-brand-sky-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-sky-blue/25 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 mt-10">
            Start Your Journey
          </Link>
        </div>
      </RevealSection>
    </>
  )
}
