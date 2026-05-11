import { Award, Users, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: Award, title: 'Recognized Certification', desc: 'Our diplomas are recognized internationally, opening doors to career opportunities worldwide.' },
  { icon: Users, title: 'Expert Faculty', desc: 'Learn from experienced practitioners and academics who bring real-world expertise to every class.' },
  { icon: Globe, title: 'Online Learning', desc: 'Attend live classes from anywhere. All programs are delivered online with flexible schedules.' },
]

const careers = [
  { icon: '\uD83C\uDFE5', label: 'Clinics & Hospitals' },
  { icon: '\u267F', label: 'Rehabilitation Centers' },
  { icon: '\uD83C\uDFEB', label: 'Schools & Special Education' },
  { icon: '\uD83D\uDCBC', label: 'Private Practice' },
  { icon: '\uD83C\uDF0D', label: 'NGOs & Public Health' },
  { icon: '\uD83E\uDDE0', label: 'Mental Health Organizations' },
]

export default function About() {
  return (
    <>
      {/* Navy Header */}
      <section className="bg-brand-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            About Us
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            About GICP Academy
          </h1>
          <p className="mt-3 text-[1rem] font-light text-white/50">
            Empowering the next generation of mental health and rehabilitation professionals.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-lg border border-brand-gold/20 bg-brand-navy p-8 text-white">
            <h2 className="mb-4 font-display text-2xl font-bold text-brand-gold">Our Mission</h2>
            <p className="leading-relaxed text-white/70">
              GICP Academy is dedicated to providing accessible, high-quality education in psychology,
              therapy, and health sciences. We believe every student in Pakistan deserves the opportunity
              to build a meaningful career in these critical fields — without the burden of prohibitive costs
              or geographic barriers.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Our programs combine rigorous academic content with practical, hands-on training. Each diploma
              is designed to equip graduates with the knowledge, skills, and confidence to enter the workforce
              immediately upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <div key={h.title} className="rounded-lg border border-black/6 bg-brand-cream p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-brand-teal">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2 text-[0.95rem] font-semibold text-brand-navy">{h.title}</h3>
                  <p className="text-[0.85rem] font-light leading-[1.65] text-brand-muted">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client CPD Claims */}
      <section className="bg-brand-navy py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="mb-5 font-display text-xl font-bold text-brand-gold">Our Credentials</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-0">
            {[
              "CPD Accredited Training Provider (CPD Group Approved)",
              "Verifiable Certificates through Open CPD",
              "Professional Diploma Programmes",
              "Verified CPD Training",
              "Digital Certificate Included",
              "UK CPD Standard Aligned"
            ].map((claim) => (
              <div key={claim} className="flex items-center gap-2 text-[0.85rem] font-medium text-white/90">
                <span className="font-bold text-brand-gold">✔️</span>
                {claim}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-white">Career Opportunities</h2>
          <p className="mb-8 text-[1rem] font-light text-white/50">Our graduates go on to work in a variety of professional settings:</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {careers.map((c) => (
              <div key={c.label} className="rounded-md border border-white/10 bg-white/5 px-4 py-4 text-[0.85rem] font-medium text-white/85 transition-colors hover:bg-brand-teal/15 hover:border-brand-teal/30">
                <span className="mr-2">{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
          <Link to="/admissions" className="btn-primary mt-10 inline-flex">Start Your Journey</Link>
        </div>
      </section>
    </>
  )
}
