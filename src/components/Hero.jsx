import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

// Organic brain-wave gradient overlay for psychology theme
const organicGradientStyle = {
  background: 'radial-gradient(circle at 20% 30%, rgba(16, 142, 132, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(201, 168, 76, 0.1) 0%, transparent 40%), linear-gradient(135deg, rgba(13, 27, 42, 0.95) 0%, rgba(13, 27, 42, 0.85) 100%)'
}

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-dark-navy pt-16">
        {/* Layered radial gradients */}
        <div
          className="pointer-events-none absolute inset-0"
          style={organicGradientStyle}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-brand-gold/30 bg-brand-gold/10 text-white px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[2px] text-white animate-fade-in animate-delay-50">
              <BookOpen className="h-3.5 w-3.5 text-brand-gold" />
              Admissions Open — New Batch Starting Soon
            </div>

            {/* Heading */}
            <h1 className="mb-7 font-display text-[clamp(2.8rem,6vw,4.2rem)] font-bold leading-[1.08] text-white animate-slide-up animate-delay-100 tracking-[-0.04em]">
              Empowering Future
              <br />
              Professionals in
              <br />
              <em className="not-italic bg-gradient-to-r from-brand-light-sky to-brand-sky-blue bg-clip-text text-transparent tracking-[-0.02em]">
                Psychology & Healthcare
              </em>
            </h1>

            {/* Subtext */}
            <p className="mb-11 max-w-xl text-[1.1rem] font-body leading-[1.75] text-white/75 animate-slide-up animate-delay-250 tracking-[0.01em]">
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
      <div className="grid grid-cols-3 bg-gradient-to-r from-brand-dark-navy/95 to-brand-navy-blue/95 backdrop-blur-md border-t border-white/10 stat-container">
        {[
          { number: '10+', label: 'Diploma Courses' },
          { number: '6', label: 'Months Duration' },
          { number: '100%', label: 'Online & Flexible' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-4 py-10 text-center border-r border-white/8 last:border-r-0 stat-item visible"
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
