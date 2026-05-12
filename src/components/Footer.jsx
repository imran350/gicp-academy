import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-14 px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.35) 100%)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Academy info */}
          <div>
            <div className="font-display text-[1.4rem] font-bold text-brand-sky-blue mb-3">
              GICP Academy
            </div>
            <p className="max-w-[340px] text-[0.85rem] font-light leading-[1.7] text-slate-400">
              Global Institute of Clinical Psychology — empowering future professionals through internationally inspired, practical, and career-focused diploma education in psychology, therapy, and healthcare.
            </p>
          </div>

          {/* Courses */}
          <div>
            <div className="mb-5 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-sky-blue">
              Courses
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/course/adcp', label: 'Clinical Psychology' },
                { to: '/course/child-psychology', label: 'Child Psychology' },
                { to: '/course/autism', label: 'Autism (ASD)' },
                { to: '/course/speech-therapy', label: 'Speech Therapy' },
                { to: '/course/cbt', label: 'CBT' },
                { to: '/course/public-health', label: 'Public Health' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.85rem] text-slate-400 transition-colors duration-200 hover:text-brand-light-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-5 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-sky-blue">
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/courses', label: 'All Courses' },
                { to: '/admissions', label: 'Fee Detail' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/admissions', label: 'Apply Now' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[0.85rem] text-slate-400 transition-colors duration-200 hover:text-brand-light-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-6">
          <div className="text-[0.78rem] text-slate-500">
            &copy; {year} GICP Academy &middot; Global Institute of Clinical Psychology &middot; All rights reserved.
          </div>
          <div className="text-[0.78rem] text-slate-500">
            <a href="mailto:gicpacademy@gmail.com" className="transition-colors hover:text-brand-light-sky/70">
              gicpacademy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
