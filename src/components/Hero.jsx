import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-dark-navy pt-16">
        {/* Layered radial gradients */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 80% 50%, rgba(14, 165, 233, 0.25), transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(30, 58, 138, 0.15), transparent 60%), linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-brand-sky-blue bg-brand-sky-blue text-white px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[2px] text-white animate-fade-in">
              <BookOpen className="h-3.5 w-3.5" />
              Admissions Open — New Batch Starting Soon
            </div>

            {/* Heading */}
            <h1 className="mb-7 font-display text-[clamp(2.8rem,6vw,4.2rem)] font-bold leading-[1.12] text-white animate-slide-up animate-delay-100">
              Empowering Future
              <br />
              Professionals in
              <br />
              <em className="not-italic bg-gradient-to-r from-brand-light-sky to-brand-sky-blue bg-clip-text text-transparent">Psychology & Healthcare</em>
            </h1>

            {/* Subtext */}
            <p className="mb-11 max-w-xl text-[1.1rem] font-light leading-[1.7] text-white/75 animate-slide-up animate-delay-200">
              An internationally inspired platform offering diploma programs in psychology, therapy, and healthcare — designed for flexible, career-focused online learning.
            </p>

            {/* Badges */}
            <div className="mb-12 flex flex-wrap gap-3 animate-slide-up animate-delay-200-2">
              {[
                'UK-Standard Curriculum',
                'Live on Zoom & Google Meet',
                '45-Min Online Exams',
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-[0.85rem] font-normal text-white/70"
                >
                  <span className="font-bold text-white">&#10003;</span>
                  {badge}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center animate-slide-up animate-delay-200-3">
              <Link to="/admissions" className="btn-primary">
                Apply for Admission
              </Link>
              <Link to="/courses" className="btn-secondary">
                View Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-[0.75rem] uppercase tracking-[3px] text-white/30 lg:left-8 animate-fade-in animate-delay-500">
          Scroll to explore
          <span className="block h-px w-10 bg-white/20" />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-2 gap-0 bg-gradient-to-r from-brand-dark-navy/95 to-brand-navy-blue/95 lg:grid-cols-3 backdrop-blur-md border-t border-white/10 stat-container justify-items-center justify-items-center">
        {[
          { number: '10+', label: 'Diploma Courses' },
          { number: '6', label: 'Months Duration' },
                    { number: '100%', label: 'Online & Flexible' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`border-r border-white/8 px-6 py-10 text-center last:border-r-0 stat-item visible ${i >= 2 ? 'border-t border-white/5 lg:border-t-0' : ''}`}
          >
            <div className="font-display text-[3rem] font-bold leading-none text-white">
              {stat.number}
            </div>
            <div className="mt-2 text-[0.82rem] text-white/95">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}
