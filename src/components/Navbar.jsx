import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import GICPLogo from '../../GICP logo.jpeg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Programs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-sky-blue/30 bg-brand-dark-navy/90 backdrop-blur-sm shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleNavClick}
        >
          <img src={GICPLogo} alt="GICP Academy" className="h-10 w-auto rounded-full object-cover" />
          {/* GICP Academy + CPD vertical stack (CPD below GICP) */}
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-xl font-bold tracking-wide text-white">
              GICP Academy
            </span>
            <div className="hidden md:block text-xs font-semibold text-yellow-400 tracking-wide">
              CPD Accredited
            </div>
          </div>
          {/* Option 2: Short text (uncomment to use) */}
          {/* <span className="font-display text-xl font-bold tracking-wide bg-gradient-to-r from-brand-sky-blue via-brand-light-sky to-white bg-clip-text text-transparent">
            GICP
          </span> */}
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
                  ? 'text-white'
                  : 'text-white/75 hover:text-white transition-all duration-300 relative py-1'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            onClick={handleNavClick}
            className="btn-navbar-apply"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded p-2 text-white/75 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-sky-blue/10 bg-brand-dark-navy/95 backdrop-blur-sm md:hidden">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`block rounded px-3 py-2.5 text-[0.85rem] font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-white/75 hover:text-white transition-all duration-300 relative py-1'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={handleNavClick}
              className="mt-3 block rounded-full bg-gradient-to-r from-brand-sky-blue to-sky-400 hover:from-brand-sky-blue/90 hover:to-sky-400/90 text-white px-4 py-3 text-center text-sm font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
