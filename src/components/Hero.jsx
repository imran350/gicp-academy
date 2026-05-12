import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Award } from 'lucide-react'

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
        {/* Spotlight gradient — matches body */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(30, 58, 138, 0.6) 0%, transparent 70%)',
          }}
        />
        {/* Secondary accent glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.06) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* CPD Accredited Badge — Golden-Yellow gradient */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 animate-fade-in animate-delay-50">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-[0.8rem] font-bold uppercase tracking-[2px] text-gold-gradient">
                CPD Accredited
              </span>
            </div>

            {/* Admissions Open Tag */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-[2px] text-white/80 animate-fade-in animate-delay-100">
              <BookOpen className="h-3.5 w-3.5 text-brand-sky-blue" />
              Admissions Open — New Batch Starting Soon
            </div>

            {/* Heading — larger, bolder */}
            <h1 className="mb-8 font-display text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[1.05] text-white animate-slide-up animate-delay-150 tracking-[-0.02em]">
              Empowering Future
              <br />
              Professionals in
              <br />
              <span className="bg-gradient-to-r from-brand-light-sky via-brand-sky-blue to-blue-400 bg-clip-text text-transparent">
                Psychology & Healthcare
              </span>
            </h1>

            {/* Subtext */}
            <p className="mb-12 max-w-xl text-[1.15rem] font-body leading-[1.8] text-slate-300 animate-slide-up animate-delay-250 tracking-[0.01em]">
              An internationally inspired platform offering diploma programs in psychology, therapy, and healthcare — designed for flexible, career-focused online learning.
            </p>

            {/* Badges */}
            <div className="mb-14 flex flex-wrap gap-4 animate-slide-up animate-delay-300">
              {[
                'UK-Standard Curriculum',
                'Live on Zoom & Google Meet',
                '45-Min Online Exams',
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 text-[0.88rem] font-medium text-slate-300"
                >
                  <span className="font-bold text-amber-400 checkmark">&#10003;</span>
                  {badge}
                </div>
              ))}
            </div>

            {/* CTAs — hover:scale-105 + shadow-blue-500/50 glow */}
            <div className="flex flex-wrap gap-4 items-center animate-slide-up animate-delay-300">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-brand-sky-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
              >
                Apply for Admission <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-white/10"
              >
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

      {/* STATS STRIP — glassmorphism */}
      <div className="grid grid-cols-3 border-t border-white/10" style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        {[
          { number: '10+', label: 'Diploma Courses' },
          { number: '6', label: 'Months Duration' },
          { number: '100%', label: 'Online & Flexible' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-4 py-12 text-center border-r border-white/8 last:border-r-0"
          >
            <div className="font-display text-[3.2rem] font-extrabold leading-none stat-number">
              {stat.number}
            </div>
            <div className="mt-2 text-[0.85rem] font-medium text-slate-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}
