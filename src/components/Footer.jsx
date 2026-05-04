import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Academy info */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-teal">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                GICP <span className="text-brand-teal-light">Academy</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Professional diploma programs in psychology, therapy, and health sciences. Building careers, transforming lives.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/courses', label: 'Courses' },
                { to: '/admissions', label: 'Admissions' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-brand-teal-light focus-visible:outline-brand-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal-light" />
                <a
                  href="https://wa.me/923019753393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-teal-light"
                >
                  WhatsApp: 0301-9753393
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal-light" />
                <a
                  href="mailto:info@gicpacademy.com"
                  className="transition-colors hover:text-brand-teal-light"
                >
                  info@gicpacademy.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal-light" />
                Pakistan — Online Programs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          &copy; {year} GICP Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
