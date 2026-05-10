import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="grain relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-navy pt-16">
        {/* Layered radial gradients */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(26,122,110,0.18), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(201,168,76,0.08), transparent 60%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-brand-gold bg-brand-gold/15 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[2px] text-brand-gold animate-fade-in">
              <BookOpen className="h-3.5 w-3.5" />
              Admissions Open — New Batch Starting Soon
            </div>

            {/* Heading */}
            <h1 className="mb-7 font-display text-[clamp(2.8rem,6vw,4.2rem)] font-bold leading-[1.12] text-white animate-slide-up">
              Empowering Future
              <br />
              Professionals in
              <br />
              <em className="not-italic text-brand-gold">Psychology & Healthcare</em>
            </h1>

            {/* Subtext */}
            <p className="mb-11 max-w-xl text-[1.1rem] font-light leading-[1.7] text-white/65 animate-slide-up-delay">
              An internationally inspired platform offering diploma programs in psychology, therapy, and healthcare — designed for flexible, career-focused online learning.
            </p>

            {/* Badges */}
            <div className="mb-12 flex flex-wrap gap-3 animate-slide-up-delay-2">
              {[
                'UK-Standard Curriculum',
                'Live on Zoom & Google Meet',
                '30-Min Online Exams',
                'International Scholarship Available',
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-[0.85rem] font-normal text-white/70"
                >
                  <span className="font-bold text-brand-teal-light">&#10003;</span>
                  {badge}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-slide-up-delay-3">
              <Link to="/admissions" className="btn-primary">
                Apply for Admission
              </Link>
              <Link to="/courses" className="btn-outline">
                View Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-[0.75rem] uppercase tracking-[3px] text-white/30 lg:left-8 animate-fade-in">
          Scroll to explore
          <span className="block h-px w-10 bg-white/20" />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-2 gap-0 bg-brand-navy lg:grid-cols-4">
        {[
          { number: '10+', label: 'Diploma Courses' },
          { number: '6', label: 'Months Duration' },
          { number: '35K', label: 'Scholarship Fee (PKR)' },
          { number: '100%', label: 'Online & Flexible' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`border-r border-white/8 px-6 py-10 text-center last:border-r-0 ${
              i >= 2 ? 'border-t border-white/5 lg:border-t-0' : ''
            }`}
          >
            <div className="font-display text-[3rem] font-bold leading-none text-brand-gold">
              {stat.number}
            </div>
            <div className="mt-2 text-[0.82rem] text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}
