import { Mail, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      {/* Navy Header */}
      <section className="bg-brand-dark-navy pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            Get In Touch
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
            Ready to Begin?
          </h1>
          <p className="mt-3 text-[1rem] font-light text-white/50">
            Reach out on WhatsApp for the fastest response, or fill in the enquiry form.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-cream pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-display text-[1.6rem] font-bold text-white mb-2">Contact Information</h2>
              <p className="mb-8 text-[0.95rem] font-light text-white/90">We're here to help. Choose your preferred way to reach us.</p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923019753393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-cream p-5 transition-colors duration-200 hover:bg-brand-sky-blue/5"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-brand-sky-blue text-[1.1rem]">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-white/90">WhatsApp</div>
                    <div className="text-[1rem] font-semibold text-white">0301-9753393</div>
                    <div className="text-[0.8rem] text-white/90">Chat with us directly for quick responses</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:gicpacademy@gmail.com"
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-cream p-5 transition-colors duration-200 hover:bg-brand-light-sky/5"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-brand-light-sky text-[1.1rem]">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-white/90">Email</div>
                    <div className="text-[1rem] font-semibold text-white">gicpacademy@gmail.com</div>
                    <div className="text-[0.8rem] text-white/90">Send us a detailed message anytime</div>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://www.gicpacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-cream p-5 transition-colors duration-200 hover:bg-brand-dark-navy/5"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-brand-dark-navy text-[1.1rem]">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-white/90">Website</div>
                    <div className="text-[1rem] font-semibold text-white">www.gicpacademy.com</div>
                    <div className="text-[0.8rem] text-white/90">Visit our official website</div>
                  </div>
                </a>
              </div>

              {/* Session Booking Options */}
              <div className="mt-8">
                <h2 className="font-display text-[1.6rem] font-bold text-white mb-4">Book a Therapy Session</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Online Session */}
                  <a
                    href="https://wa.me/923019753393?text=I%20want%20to%20book%20an%20ONLINE%20therapy%20session.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-cream p-5 transition-colors duration-200 hover:bg-brand-sky-blue/5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-brand-sky-blue text-[1.1rem]">
                      <span className="text-white">💻</span>
                    </div>
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-white/90">Online Session</div>
                      <div className="text-[1rem] font-semibold text-white">Virtual Therapy</div>
                      <div className="text-[0.8rem] text-white/90">Click to book via WhatsApp</div>
                    </div>
                  </a>

                  {/* Physical Session */}
                  <a
                    href="https://wa.me/923019753393?text=I%20want%20to%20book%20a%20PHYSICAL%20therapy%20session.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-lg border border-white/10 bg-brand-cream p-5 transition-colors duration-200 hover:bg-brand-dark-navy/5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded bg-brand-dark-navy text-[1.1rem]">
                      <span className="text-white">🏥</span>
                    </div>
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[2px] text-white/90">Physical Session</div>
                      <div className="text-[1rem] font-semibold text-white">In-Person Therapy</div>
                      <div className="text-[0.8rem] text-white/90">Click to book via WhatsApp</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Apply */}
            <div className="rounded-xl border border-brand-gold/20 bg-brand-dark-navy p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
              <h2 className="font-display text-[1.6rem] font-bold text-white">Apply for Admission</h2>
              <p className="mb-7 text-[0.85rem] text-white/50">Fill in your details and we'll contact you within 24 hours.</p>

              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">First Name</label>
                  <input type="text" className="w-full rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold placeholder:text-white/30" placeholder="e.g. Ayesha" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Last Name</label>
                  <input type="text" className="w-full rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold placeholder:text-white/30" placeholder="e.g. Khan" />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">WhatsApp Number</label>
                <input type="tel" className="w-full rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold placeholder:text-white/30" placeholder="0300-0000000" />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Email Address</label>
                <input type="email" className="w-full rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold placeholder:text-white/30" placeholder="your@email.com" />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Course of Interest</label>
                <select className="w-full rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold">
                  <option className="text-white">Select a program...</option>
                  <option className="text-white">ADCP — Advanced Diploma in Clinical Psychology</option>
                  <option className="text-white">Diploma in Child Psychology</option>
                  <option className="text-white">International Diploma in Autism (ASD)</option>
                  <option className="text-white">Diploma in Speech & Language Therapy</option>
                  <option className="text-white">Diploma in PECS</option>
                  <option className="text-white">International Diploma in Physiotherapy</option>
                  <option className="text-white">Diploma in Sensory Integration & Reflexes</option>
                  <option className="text-white">International Diploma in CBT</option>
                  <option className="text-white">Diploma in Nutrition & Dietetics</option>
                  <option className="text-white">International Diploma in Public Health</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block text-[0.78rem] font-semibold text-white/70">Message (Optional)</label>
                <textarea rows={3} className="w-full resize-none rounded border border-white/10 bg-white/10 px-3.5 py-3 text-[0.9rem] text-white outline-none focus:border-brand-gold placeholder:text-white/30" placeholder="Any questions or additional info..." />
              </div>

              <Link to="/admissions" className="block w-full rounded bg-brand-light-sky py-4 text-center text-[0.95rem] font-bold text-white transition-colors hover:bg-brand-light-sky-light">
                Submit Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
