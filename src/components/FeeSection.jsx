import { Link } from 'react-router-dom'

export default function FeeSection() {
  return (
    <section className="bg-brand-cream py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div>
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-sky-blue">
              Fee Structure
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
              Affordable,
              <br />
              Transparent Pricing
            </h2>
            <p className="mt-4 mb-10 max-w-md text-[1rem] font-light leading-[1.7] text-brand-text-dark">
              We believe quality education should be accessible. Easy installment plans are available for all programs.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                'Live interactive classes via Zoom & Google Meet with experienced faculty',
                'Full access to recorded lectures anytime, anywhere',
                'Real-world assignments & clinical case studies',
                'Timed online exams — 45-minute paper, auto-submitted & instant results',
                'Internationally inspired certification on completion',
                'Easy installment payment plans',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[0.95rem] leading-[1.5] text-brand-text">
                  <span className="mt-0.5 flex-shrink-0 font-bold text-brand-sky-blue">&#10003;</span>
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
          <div className="flex flex-col gap-5 items-center justify-center">
            {/* Centralized Standard Fee Box */}
            <div className="w-full max-w-md border border-white/10 bg-brand-cream p-9 shadow-md text-center">
              <div className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[2px] text-brand-text-dark">
                Standard Fee
              </div>
              <div className="font-display text-[3rem] font-bold leading-none text-white">
                55,000 <span className="text-[1rem] font-normal text-brand-text-dark">PKR</span>
              </div>
              <p className="mt-3 text-[0.82rem] text-brand-text-dark">
                Full program access &middot; Easy installments available
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
