import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="relative py-20 bg-slate-50">
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15,118,110,0.5) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal-dark p-8 text-white shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-cardHover">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Target className="h-7 w-7 text-brand-amber-light" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed text-teal-100">
                Our mission at GICP Academy is to empower aspiring psychologists and healthcare
                professionals with the knowledge, skills, and credentials they need to make a
                meaningful impact in their communities. We are committed to offering comprehensive,
                up-to-date programs that meet the evolving needs of healthcare professionals.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-amber to-brand-amber-light p-8 text-white shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(217,119,6,0.35)]">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed text-amber-100">
                Our vision is to become Pakistan&rsquo;s leading institution for psychology and health
                sciences education. We aspire to set new standards by providing accessible,
                high-quality programs that empower professionals to excel in their careers and
                continuously innovate to reach learners nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
