import { Link } from 'react-router-dom'

export default function FeeSection() {
  return (
    <section className="bg-brand-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div>
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-teal">
              Fee Structure
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-brand-navy">
              Affordable,
              <br />
              Transparent Pricing
            </h2>
            <p className="mt-4 mb-10 max-w-md text-[1rem] font-light leading-[1.7] text-brand-muted">
              We believe quality education should be accessible. Easy installment plans are available for all programs.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                'Live interactive classes via Zoom & Google Meet with experienced faculty',
                'Full access to recorded lectures anytime, anywhere',
                'Real-world assignments & clinical case studies',
                'Timed online exams — 30-minute paper, auto-submitted & instant results',
                'Internationally inspired certification on completion',
                'Easy installment payment plans',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[0.95rem] leading-[1.5] text-brand-text">
                  <span className="mt-0.5 flex-shrink-0 font-bold text-brand-teal">&#10003;</span>
                  {item.includes('**') ? (
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Fee cards */}
          <div className="flex flex-col gap-5">
            {/* Standard */}
            <div className="rounded-lg border border-brand-teal/10 bg-white/80 p-9">
              <div className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[2px] text-brand-muted">
                Standard Fee
              </div>
              <div className="font-display text-[3rem] font-bold leading-none text-brand-navy">
                55,000 <span className="text-[1rem] font-normal text-brand-muted">PKR</span>
              </div>
              <p className="mt-3 text-[0.82rem] text-brand-muted">
                Full program access &middot; Easy installments available
              </p>
            </div>

            {/* Scholarship — featured */}
            <div className="relative overflow-hidden rounded-lg border border-brand-teal bg-brand-navy p-9">
              {/* Badge */}
              <div className="absolute top-5 right-5 rounded-sm border border-brand-gold bg-brand-gold/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[1.5px] text-brand-gold">
                &#9733; SCHOLARSHIP
              </div>

              <div className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[2px] text-white/50">
                Scholarship Fee
              </div>
              <div className="font-display text-[3rem] font-bold leading-none text-brand-gold">
                35,000 <span className="text-[1rem] font-normal text-white/50">PKR</span>
              </div>
              <p className="mt-3 text-[0.82rem] text-white/45">
                Limited seats — Apply now to secure your spot
              </p>

              <Link
                to="/admissions"
                className="mt-6 inline-block rounded bg-brand-teal px-8 py-3 text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-brand-teal-light"
              >
                Apply for Scholarship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
