import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="pt-24 pb-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Contact
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-slate-500">
            Have questions? Reach out to us anytime — we're here to help.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923019753393"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-cardHover"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-500">Chat with us directly for quick responses</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-primary">
                0301-9753393
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@gicpacademy.com"
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-[transform,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:shadow-cardHover"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary-50">
              <Mail className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">Email</h3>
              <p className="mt-1 text-sm text-slate-500">Send us a detailed message anytime</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-primary">
                info@gicpacademy.com
              </span>
            </div>
          </a>

          {/* Phone */}
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary-50">
              <Phone className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">Phone</h3>
              <p className="mt-1 text-sm text-slate-500">Call us during business hours</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-primary">
                0301-9753393
              </span>
            </div>
          </div>

          {/* Location / Hours */}
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary-50">
              <Clock className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">Program Schedule</h3>
              <p className="mt-1 text-sm text-slate-500">Classes held online</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-primary">
                2 Days / Week
              </span>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200">
          <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-slate-400" />
              <p className="text-sm font-medium text-slate-500">Pakistan — Online Programs</p>
              <p className="mt-1 text-xs text-slate-400">All classes delivered via live online sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
