import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/courses', label: 'Courses' },
  { to: '/exam', label: 'Exam' },
  { to: '/about', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-gold/20 bg-brand-navy backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-wide text-brand-gold transition-opacity duration-200 hover:opacity-80"
          onClick={handleNavClick}
        >
          GICP <span className="font-normal text-white">Academy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className={`text-[0.85rem] font-medium uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-brand-gold'
                  : 'text-white/75 hover:text-brand-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            onClick={handleNavClick}
            className="ml-2 rounded bg-brand-teal px-5 py-2.5 text-[0.85rem] font-semibold text-white transition-colors duration-200 hover:bg-brand-teal-light"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded p-2 text-white/75 transition-colors hover:text-brand-gold md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-gold/10 bg-brand-navy md:hidden">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`block rounded px-3 py-2.5 text-[0.85rem] font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-gold'
                    : 'text-white/75 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={handleNavClick}
              className="mt-3 block rounded bg-brand-teal px-4 py-3 text-center text-[0.85rem] font-semibold text-white transition-colors hover:bg-brand-teal-light"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
