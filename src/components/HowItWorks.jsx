const steps = [
  {
    icon: '\uD83D\uDCDD',
    title: 'Apply Online',
    desc: 'Fill the admission form and submit your enrollment request.',
  },
  {
    icon: '\u2705',
    title: 'Confirmation',
    desc: 'Receive confirmation and access to the learning portal.',
  },
  {
    icon: '\uD83C\uDFA7',
    title: 'Attend Live Classes',
    desc: 'Join via Zoom or Google Meet, or watch recorded lectures at your own pace.',
  },
  {
    icon: '\uD83D\uDCCB',
    title: 'Online Timed Exam',
    desc: '30-minute paper — auto-ends on time. Instant results shown immediately.',
  },
  {
    icon: '\uD83C\uDF93',
    title: 'Get Certified',
    desc: 'Receive your professional diploma certificate upon completion.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-teal">
          How It Works
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-brand-navy">
          Your Learning Journey
        </h2>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-7 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-brand-gold/25 bg-brand-cream text-[1.3rem]">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-[0.88rem] font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="text-[0.78rem] font-light leading-[1.6] text-brand-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
