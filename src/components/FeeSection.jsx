import { Link } from 'react-router-dom'

export default function FeeSection() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div>
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
              Fee Structure
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-white">
              Affordable,
              <br />
              Transparent Pricing
            </h2>
            <p className="mt-4 mb-10 max-w-md text-[1rem] font-light leading-[1.7] text-slate-300">
              We believe quality education should be accessible. Easy installment plans are available for all programs.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                'Live interactive classes via Zoom & Google Meet with experienced faculty',
                'Full access to recorded lectures anytime, anywhere',
                'Real-world assignments & clinical case studies',
                'Timed online exams — 45-minute paper, auto-submitted & instant results',
                'Professional certification on completion',
                'Easy installment payment plans',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[0.95rem] leading-[1.5] text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 font-bold text-brand-sky-blue">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Fee card — glassmorphism */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="glass-card w-full max-w-md p-10 text-center">
              <div className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[2px] text-slate-300">
                Program Investment
              </div>
              <div className="font-display text-[3.2rem] font-extrabold leading-none text-white">
                Affordable Excellence
              </div>
              <p className="mt-4 text-[0.82rem] text-slate-300">
                World-class education with flexible payment plans and scholarship opportunities available
              </p>
              <Link to="/admissions" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-sky-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
