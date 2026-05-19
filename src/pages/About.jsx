import { Award, Users, Globe, ShieldCheck, BadgeCheck, Layers, TrendingUp, BookOpenCheck, CheckCircle2, Sparkles } from 'lucide-react'
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
  { icon: Award, title: 'Professionally Recognized Certification', desc: 'Our diplomas are professionally recognized and industry-standard, opening doors to career opportunities across multiple sectors.' },
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            About Us
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-6">
            About GICP Academy
          </h1>
          <p className="text-[1.05rem] font-light leading-[1.8] text-slate-200 mb-6">
            Empowering the next generation of mental health and rehabilitation professionals.
          </p>
          <p className="text-[0.95rem] font-light leading-[1.8] text-slate-300 mx-auto max-w-2xl">
            GICP Academy is dedicated to bridging the gap between traditional education and industry requirements. We empower students with practical skills, professional certifications, and expert mentorship to excel in the rapidly evolving fields of health, therapy, and technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid — mobile-optimized */}
      <RevealSection className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Mission */}
            <div className="group glass-card p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h2 className="mb-4 font-display text-2xl font-extrabold text-white relative z-10">Our Mission</h2>
              <p className="leading-relaxed text-slate-300 relative z-10">
                GICP Academy is dedicated to providing accessible, high-quality education in psychology,
                therapy, and health sciences. We believe every student in Pakistan deserves the opportunity
                to build a meaningful career in these critical fields — without the burden of prohibitive costs
                or geographic barriers.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300 relative z-10">
                Our programs combine rigorous academic content with practical, hands-on training. Each diploma
                is designed to equip graduates with the knowledge, skills, and confidence to enter the workforce
                immediately upon completion.
              </p>
            </div>

            {/* Vision */}
            <div className="group glass-card p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h2 className="mb-4 font-display text-2xl font-extrabold text-white relative z-10">Our Vision</h2>
              <p className="leading-relaxed text-slate-300 relative z-10">
                To become the leading provider of professionally recognized mental health and rehabilitation education in South Asia,
                recognized for our innovative curriculum, expert faculty, and commitment to student success.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300 relative z-10">
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
              return (
                <div key={h.title} className="group glass-card border-white/10 p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
                  {/* Hover glow */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-brand-sky-blue/20 relative z-10">
                    <Icon className="h-5 w-5 text-brand-sky-blue" />
                  </div>
                  <h3 className="mb-2 text-[0.95rem] font-semibold text-white relative z-10">{h.title}</h3>
                  <p className="text-[0.85rem] font-light leading-[1.65] text-slate-300 relative z-10">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </RevealSection>

      {/* CPD Accreditation — Premium block */}
      <RevealSection className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Eyebrow + headline */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[3px] text-amber-300">
              <Sparkles className="h-3 w-3" />
              CPD-Aligned Excellence
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
              Why CPD Accreditation Matters
            </h2>
            <p className="mt-4 text-[1rem] font-light leading-[1.8] text-slate-300">
              Our certifications are built on internationally recognized Continuing Professional Development standards — giving every graduate a structured, verifiable, career-ready credential.
            </p>
          </div>

          {/* Top: 5 benefits grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-16">
            {[
              { icon: Globe, label: 'Internationally recognized learning structure' },
              { icon: TrendingUp, label: 'Professional skill development' },
              { icon: BookOpenCheck, label: 'Evidence-based training programs' },
              { icon: Layers, label: 'Continuous professional growth' },
              { icon: BadgeCheck, label: 'Verified certification system' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group glass-card relative overflow-hidden p-5 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 will-change-transform"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 border border-amber-400/25">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <p className="relative z-10 text-[0.85rem] font-medium leading-[1.55] text-slate-200">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom: Two-column premium block */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: CPD Accreditation */}
            <div className="group glass-card relative overflow-hidden p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-brand-sky-blue/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/25">
                  <ShieldCheck className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="mb-2 font-display text-[1.6rem] font-extrabold tracking-[-0.02em] text-white">
                  CPD Accreditation
                </h3>
                <div className="mb-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-300/40" />

                <p className="mb-4 text-[0.95rem] font-light leading-[1.8] text-slate-300">
                  Our training programs are designed in line with international Continuing Professional Development (CPD) standards and delivered under Open CPD-aligned guidelines.
                </p>
                <p className="mb-4 text-[0.95rem] font-light leading-[1.8] text-slate-300">
                  We ensure high-quality, structured learning with verifiable certification for all participants.
                </p>
                <p className="text-[0.95rem] font-light leading-[1.8] text-slate-300">
                  Each certificate includes a unique ID for online verification, ensuring authenticity and professional credibility.
                </p>
              </div>
            </div>

            {/* Right: Why Choose Us */}
            <div className="group glass-card relative overflow-hidden p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-sky-blue/10 blur-3xl" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky-blue/15 border border-brand-sky-blue/30">
                  <Award className="h-6 w-6 text-brand-sky-blue" />
                </div>
                <h3 className="mb-2 font-display text-[1.6rem] font-extrabold tracking-[-0.02em] text-white">
                  Why Choose Us?
                </h3>
                <div className="mb-6 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand-sky-blue to-brand-light-sky/40" />

                <ul className="space-y-4">
                  {[
                    'CPD-based structured training',
                    'Professional skill development',
                    'Verified digital certificates',
                    'International learning standards',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                      <span className="text-[0.95rem] font-light leading-[1.65] text-slate-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {/* Tuba Shahid Profile Card */}
            <div className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
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
            </div>

            {/* Sumaira Profile Card */}
            <div className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
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
            </div>

            {/* Dr. Nida Profile Card */}
            <div className="group glass-card p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/20 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
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
              <div key={c.label} className="group glass-card px-4 py-4 text-[0.85rem] font-medium text-white/85 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden cursor-pointer">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="mr-2 relative z-10">{c.icon}</span><span className="relative z-10">{c.label}</span>
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
