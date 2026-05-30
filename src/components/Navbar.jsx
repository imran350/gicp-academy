import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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

  const handleNavClick = () => {
    setOpen(false)
  }

  const navLinkClass = ({ isActive }) => `
    text-[0.85rem] font-medium uppercase tracking-wide transition-all duration-300 relative py-1 pb-2
    ${isActive
      ? 'border-b-2 border-brand-gold font-bold shadow-[0_2px_8px_rgba(201,168,76,0.3)]'
      : 'text-white/75 border-b-2 border-transparent hover:border-brand-gold hover:text-brand-gold'
    }
  `

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-sky-blue/30 bg-brand-dark-navy/90 backdrop-blur-sm shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo with Gradient and Glow */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          onClick={handleNavClick}
        >
          <img src={GICPLogo} alt="GICP Academy" className="h-10 w-auto rounded-full object-cover shadow-[0_0_12px_rgba(14,165,233,0.4)]" />
          {/* GICP Academy with Gradient */}
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-xl font-black tracking-wide bg-gradient-to-r from-cyan-400 via-brand-sky-blue to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
              GICP Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav — Gold active state with underline + hover effects */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleNavClick}
              className={navLinkClass}
              style={({ isActive }) => ({ color: isActive ? '#c9a84c' : '' })}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={handleNavClick}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-sky-blue bg-brand-sky-blue/30 text-[#0ea5e9] font-bold px-5 py-2 text-sm transition-all duration-200 hover:bg-brand-sky-blue/50 hover:scale-105"
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
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={({ isActive }) => `
                  block rounded px-3 py-2.5 text-[0.85rem] font-medium uppercase tracking-wide transition-all duration-300
                  ${isActive
                    ? 'bg-brand-gold/20 text-brand-gold font-bold border-l-4 border-brand-gold'
                    : 'text-white/75 hover:text-brand-gold hover:bg-brand-gold/10 border-l-4 border-transparent'
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              onClick={handleNavClick}
              className="mt-3 block rounded-full bg-gradient-to-r from-brand-sky-blue to-sky-400 hover:from-brand-sky-blue/90 hover:to-sky-400/90 text-[#0ea5e9] font-bold px-4 py-3 text-center text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
