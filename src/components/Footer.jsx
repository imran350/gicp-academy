import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Globe } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-brand-sky-blue/30 bg-brand-navy/95 backdrop-blur-sm pt-16 pb-8 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid — 4 Columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1: About GICP */}
          <div>
            <div className="mb-4 font-display text-[1.2rem] font-bold bg-gradient-to-r from-cyan-400 via-brand-sky-blue to-blue-500 bg-clip-text text-transparent">
              GICP Academy
            </div>
            <p className="text-[0.85rem] font-light leading-[1.7] text-slate-300 mb-4">
              Global Institute of Clinical Psychology — empowering future professionals through practical, career-focused education in psychology, therapy, and healthcare.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="mailto:gicpacademy@gmail.com"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-brand-sky-blue/20 transition-all duration-300 hover:bg-brand-sky-blue/50 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-white group-hover:text-brand-gold transition-colors" />
              </a>
              <a
                href="https://wa.me/923019753393"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-brand-sky-blue/20 transition-all duration-300 hover:bg-green-500/40 hover:scale-110"
                aria-label="WhatsApp"
              >
                <span className="text-white text-sm group-hover:text-green-300 transition-colors">💬</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Programs */}
          <div>
            <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">
              Our Programs
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/course/adcp', label: 'Clinical Psychology' },
                { to: '/course/child-psychology', label: 'Child Psychology' },
                { to: '/course/autism', label: 'Autism (ASD)' },
                { to: '/course/speech-therapy', label: 'Speech Therapy' },
                { to: '/course/cbt', label: 'CBT Therapy' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[0.85rem] text-slate-300 transition-colors duration-200 hover:text-brand-gold hover:translate-x-1"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/courses', label: 'All Programs' },
                { to: '/about', label: 'About Us' },
                { to: '/admissions', label: 'Apply Now' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[0.85rem] text-slate-300 transition-colors duration-200 hover:text-brand-gold hover:translate-x-1"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <div className="mb-4 text-[0.72rem] font-bold uppercase tracking-[2px] text-brand-gold">
              Contact Info
            </div>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:gicpacademy@gmail.com"
                className="group flex items-start gap-2.5 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-brand-sky-blue flex-shrink-0 mt-0.5" />
                <div className="text-[0.85rem] text-slate-300 group-hover:text-brand-gold transition-colors">
                  gicpacademy@gmail.com
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923019753393"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4 text-brand-sky-blue flex-shrink-0 mt-0.5" />
                <div className="text-[0.85rem] text-slate-300 group-hover:text-brand-gold transition-colors">
                  0301-9753393
                </div>
              </a>

              {/* Website */}
              <a
                href="https://www.gicpacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors duration-200"
              >
                <Globe className="h-4 w-4 text-brand-sky-blue flex-shrink-0 mt-0.5" />
                <div className="text-[0.85rem] text-slate-300 group-hover:text-brand-gold transition-colors">
                  gicpacademy.com
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-6"></div>

        {/* Copyright — Clean and Centered */}
        <div className="text-center">
          <p className="text-[0.78rem] text-slate-400">
            &copy; {year} <span className="font-semibold text-brand-gold">GICP Academy</span>. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-slate-500 mt-2">
            Global Institute of Clinical Psychology | Empowering Healthcare Professionals
          </p>
        </div>
      </div>
    </footer>
  )
}
