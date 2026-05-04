import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (to) => {
    setOpen(false)
    if (isHome && to === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          onClick={() => handleNavClick('/')}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            GICP <span className="text-brand-primary">Academy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-brand-primary'
                  : 'text-slate-600 hover:text-brand-primary'
              } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admissions" className="btn-primary ml-3 !py-2 !text-xs">
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-brand-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-brand-primary-50 text-brand-primary'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => handleNavClick('/admissions')}
              className="btn-primary mt-2 w-full justify-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
