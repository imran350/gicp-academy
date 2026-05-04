import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollReveal()

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  { value: 9, suffix: '', label: 'Diploma Programs' },
  { value: 6, suffix: '', label: 'Months Duration' },
  { value: 100, suffix: '+', label: 'Students Enrolled' },
]

export default function Hero() {
  return (
    <section className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-slate-900 via-brand-primary-dark to-brand-dark pt-16">
      {/* Layered radial gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(79,70,229,0.35), transparent), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(234,88,12,0.12), transparent)',
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-brand-accent/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-indigo-200 backdrop-blur-sm animate-fade-in">
            <BookOpen className="h-4 w-4" />
            Enrollments Open for 2026
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tightest text-white sm:text-5xl lg:text-6xl animate-slide-up">
            Build Your Career in{' '}
            <span className="bg-gradient-to-r from-brand-primary-light to-brand-accent-light bg-clip-text text-transparent">
              Psychology & Health Sciences
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300 animate-slide-up-delay">
            GICP Academy offers internationally recognized diploma programs in clinical psychology, therapy, and health sciences — designed for aspiring professionals in Pakistan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-slide-up-delay-2">
            <Link to="/admissions" className="btn-accent text-base">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="btn-outline !border-white/20 !text-white hover:!bg-white/10">
              View Courses
            </Link>
          </div>

          {/* Stats with animated counters */}
          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-white">
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
