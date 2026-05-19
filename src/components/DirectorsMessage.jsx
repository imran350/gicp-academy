import { Quote } from 'lucide-react'

export default function GICP Academy Director - 10+ Years of Experience in Clinical Psychology EducationsMessage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-primary-50/30 to-brand-accent-50/20 py-20">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-primary/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-accent/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              <img
                src="https://placehold.co/480x560/4F46E5/ffffff?text=GICP Academy Director - 10+ Years of Experience in Clinical Psychology Education"
                alt="GICP Academy Director - 10+ Years of Experience in Clinical Psychology Education"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/40 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-3 shadow-card">
              <p className="font-display text-sm font-bold text-brand-primary">10+ Years</p>
              <p className="text-xs text-slate-500">in Education</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              GICP Academy Director - 10+ Years of Experience in Clinical Psychology Education's Message
            </span>
            <div className="relative mt-4">
              <Quote className="absolute -top-4 -left-2 h-12 w-12 text-brand-primary/10 rotate-180" />
              <blockquote className="relative border-l-4 border-brand-accent/50 pl-6 text-lg leading-relaxed text-slate-600 italic">
                &ldquo;At GICP Academy, our guiding principles are the cornerstone of everything we do. We are committed to
                excellence, innovation, and quality in healthcare education. Our mission is to empower minds and shape futures
                through top-notch diploma programs that meet the highest industry standards.&rdquo;
              </blockquote>
            </div>
            <div className="mt-6 pl-6">
              <p className="font-display text-lg font-bold text-slate-900">GICP Academy Director - 10+ Years of Experience in Clinical Psychology Education Name</p>
              <p className="text-sm font-medium text-brand-primary">Founder &amp; GICP Academy Director - 10+ Years of Experience in Clinical Psychology Education, GICP Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
