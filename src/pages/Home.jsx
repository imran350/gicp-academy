import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Globe, TrendingUp, BookOpenCheck, Layers, BadgeCheck, ShieldCheck, Award, CheckCircle2, Star } from 'lucide-react'
import RevealSection from '../components/RevealSection'
import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import FeeSection from '../components/FeeSection'
import FeaturesList from '../components/FeaturesList'
import HowItWorks from '../components/HowItWorks'
import courses from '../data/courses'

export default function Home() {
  return (
    <>
      <Hero />

      <RevealSection className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Eyebrow + headline */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[3px] text-amber-300">
              <Sparkles className="h-3 w-3" />
              CPD-Aligned Excellence
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand-gold">
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

      {/* Student Feedback / Testimonials */}
      <RevealSection className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
              Student Feedback
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-tight text-white">
              What Our Students Say
            </h2>
            <p className="mt-4 text-[1rem] font-light leading-[1.7] text-slate-300">
              Real experiences from graduates who transformed their careers through our CPD-accredited diploma programs.
            </p>
          </div>

          {/* Cards — stacks on mobile, 3-up on desktop */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: 'Hina',
                initials: 'H',
                program: 'Diploma in Sensory Integration',
                review:
                  'Miss Nida is an incredibly knowledgeable and dedicated lecturer. Her greatest strength is making even the most complex concepts incredibly simple and practical to understand. She is not just a teacher, but a phenomenal mentor.',
              },
              {
                name: 'Amna',
                initials: 'A',
                program: 'Diploma in Integration & Reflexes',
                review:
                  'Your teaching style is very clear, interactive, and easy to understand. Even complex topics become simple because you explain every concept with practical examples and real-life case discussions.',
              },
              {
                name: 'Ms. Sumaira',
                initials: 'MS',
                program: 'Psychology Professional',
                review:
                  'I really appreciate the trainer’s teaching style. She places a strong emphasis on interactive discussions, which makes the learning process much more effective. Her sessions remain engaging and well-structured from start to finish.',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="group glass-card relative flex flex-col overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] will-change-transform"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sky-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 5-star rating */}
                <div className="relative z-10 mb-4 flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review — flex-1 keeps the identity row aligned across cards */}
                <p className="relative z-10 mb-6 flex-1 text-[0.9rem] font-light leading-[1.7] text-slate-300">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Student identity */}
                <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-sky-blue/20 text-[0.85rem] font-bold text-brand-sky-blue">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-white">{t.name}</div>
                    <div className="text-[0.75rem] leading-snug text-slate-400">{t.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

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
                <h3 className="text-2xl font-bold !text-white">Tuba Shahid</h3>
                <p className="mt-2 text-lg font-semibold !text-white">Child Psychologist & Senior Trainer</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed !text-white">
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
                <h3 className="text-2xl font-bold !text-white">Sumaira</h3>
                <p className="mt-2 text-lg font-semibold !text-white">Senior Instructor & Tech Expert</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed !text-white">
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
                <h3 className="text-2xl font-bold !text-white">Dr. Nida</h3>
                <p className="mt-2 text-lg font-semibold !text-white">Lead Clinical Psychologist & Speech Therapist</p>
              </div>

              {/* Left-Aligned Bio & Skills */}
              <div className="text-left relative z-10">
                <p className="text-sm leading-relaxed !text-white">
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
            className="pointer-events-none absolute -right-12 -top-12 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px] rounded-full max-w-full"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
