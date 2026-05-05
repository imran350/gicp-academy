import { useState, useEffect, useCallback } from 'react'

const examQuestions = [
  {
    q: 'Which of the following best describes the therapeutic relationship in CBT?',
    options: [
      'A collaborative, structured partnership focused on present problems',
      'A passive, non-directive listening relationship',
      'A purely analytical interpretation of unconscious motives',
      'A one-sided instruction-giving approach by the therapist',
    ],
    correct: 0,
  },
  {
    q: 'What is the primary focus of Cognitive Behavioral Therapy?',
    options: [
      'Childhood experiences and early trauma',
      'Dreams and unconscious desires',
      'Identifying and changing negative thought patterns',
      'Free association and transference',
    ],
    correct: 2,
  },
  {
    q: 'Which assessment tool is commonly used for diagnosing Autism Spectrum Disorder?',
    options: [
      'MMPI (Minnesota Multiphasic Personality Inventory)',
      'ADOS-2 (Autism Diagnostic Observation Schedule)',
      'Rorschach Inkblot Test',
      'Beck Depression Inventory',
    ],
    correct: 1,
  },
  {
    q: 'What does PECS stand for in special education?',
    options: [
      'Program for Educational and Cognitive Skills',
      'Picture Exchange Communication System',
      'Psychological Evaluation and Cognitive Screening',
      'Pediatric Early Childhood System',
    ],
    correct: 1,
  },
  {
    q: 'Sensory integration therapy is primarily used for children with:',
    options: [
      'Speech and language delays only',
      'Sensory processing difficulties, often related to ASD',
      'Behavioral problems unrelated to sensory issues',
      'Physical disabilities only',
    ],
    correct: 1,
  },
]

function fmtTime(secs) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

export default function Exam() {
  const TOTAL_SECS = 30 * 60
  const [remaining, setRemaining] = useState(TOTAL_SECS)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started || submitted) return
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) { clearInterval(interval); setSubmitted(true); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [started, submitted])

  const handleAnswer = (qIndex, optIndex) => {
    if (submitted) return
    setAnswers({ ...answers, [qIndex]: optIndex })
  }

  const handleSubmit = useCallback(() => { setSubmitted(true) }, [])

  const score = submitted
    ? examQuestions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0)
    : 0
  const pct = Math.round((score / examQuestions.length) * 100)
  const grade = pct >= 85 ? 'Distinction' : pct >= 70 ? 'Merit' : pct >= 50 ? 'Pass' : 'Fail'
  const gradeColor = pct >= 85 ? 'text-brand-teal' : pct >= 70 ? 'text-brand-gold' : pct >= 50 ? 'text-brand-teal-light' : 'text-red-400'
  const progress = ((TOTAL_SECS - remaining) / TOTAL_SECS) * 100

  if (!started) {
    return (
      <>
        <section className="bg-brand-navy pt-28 pb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <div className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
              Online Examination
            </div>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white">
              GICP Academy<br />Online Exam
            </h1>
            <p className="mt-4 text-[1rem] font-light leading-[1.7] text-white/50">
              This is a demo exam with {examQuestions.length} questions. You will have 30 minutes to complete it.
              The paper auto-submits when time runs out and your results appear instantly.
            </p>
          </div>
        </section>

        <section className="bg-brand-cream pb-20">
          <div className="mx-auto max-w-sm px-6 lg:px-8">
            <div className="rounded-lg border border-brand-gold/20 bg-brand-navy p-8 text-white">
              <h3 className="mb-5 text-[0.95rem] font-semibold text-brand-gold">Exam Details</h3>
              <ul className="space-y-3 text-[0.85rem] text-white/70">
                <li className="flex items-start gap-3"><span className="text-brand-teal-light">&#10003;</span>{examQuestions.length} MCQ Questions</li>
                <li className="flex items-start gap-3"><span className="text-brand-teal-light">&#10003;</span>30-minute countdown timer</li>
                <li className="flex items-start gap-3"><span className="text-brand-teal-light">&#10003;</span>Auto-submit on time expiry</li>
                <li className="flex items-start gap-3"><span className="text-brand-teal-light">&#10003;</span>Instant score & results</li>
              </ul>
              <button
                onClick={() => setStarted(true)}
                className="mt-6 w-full rounded bg-brand-gold py-3.5 text-[0.95rem] font-bold text-brand-navy transition-colors duration-200 hover:bg-brand-gold-light"
              >
                Start Exam
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="bg-brand-navy pt-28 pb-0">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[3px] text-brand-gold">
            Online Examination
          </div>
        </div>
      </section>

      <section className="bg-brand-cream pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 -mt-2">
          {!submitted ? (
            <div className="overflow-hidden rounded-xl border border-black/8 bg-brand-cream shadow-[0_12px_40px_rgba(0,0,0,0.09)]">
              <div className="bg-brand-navy px-6 pt-5 pb-0">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="text-[0.78rem] font-medium leading-snug text-white/70">
                    ADCP — Clinical Psychology &middot; Paper 2
                  </span>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-[0.65rem] uppercase tracking-[1px] text-white/45">Time Remaining</div>
                    <div className={`font-display text-[2rem] font-bold leading-none text-brand-gold ${remaining <= 120 ? 'animate-pulse-urgent text-red-400' : ''}`}>
                      {fmtTime(remaining)}
                    </div>
                  </div>
                </div>
                <div className="h-[3px] bg-white/10">
                  <div className="h-full bg-brand-teal-light transition-[width] duration-1000 ease-linear" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[2px] text-brand-teal">
                  Question {currentQ + 1} of {examQuestions.length}
                </div>
                <div className="mb-5 text-[0.95rem] font-semibold leading-[1.5] text-brand-navy">
                  {examQuestions[currentQ].q}
                </div>

                <div className="mb-6 flex flex-col gap-2.5">
                  {examQuestions[currentQ].options.map((opt, i) => (
                    <label
                      key={i}
                      className={`flex cursor-pointer items-start gap-2.5 rounded-md border bg-white px-3.5 py-3 text-[0.82rem] leading-[1.4] text-brand-text transition-colors duration-200 ${
                        answers[currentQ] === i ? 'border-brand-teal bg-brand-teal/5' : 'border-black/7 hover:border-brand-teal hover:bg-brand-teal/5'
                      }`}
                    >
                      <input type="radio" name={`q-${currentQ}`} checked={answers[currentQ] === i} onChange={() => handleAnswer(currentQ, i)} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#1a7a6e]" />
                      {opt}
                    </label>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0} className="rounded bg-black/6 px-4 py-2 text-[0.78rem] font-semibold text-brand-muted transition-colors hover:bg-black/10 disabled:opacity-40">
                    &larr; Previous
                  </button>
                  <div className="flex gap-1.5">
                    {examQuestions.map((_, i) => (
                      <div key={i} className={`h-2 w-2 rounded-full ${i === currentQ ? 'bg-brand-gold' : answers[i] !== undefined ? 'bg-brand-teal' : 'bg-black/12'}`} />
                    ))}
                  </div>
                  {currentQ < examQuestions.length - 1 ? (
                    <button onClick={() => setCurrentQ(currentQ + 1)} className="rounded bg-brand-teal px-4 py-2 text-[0.78rem] font-semibold text-white transition-colors hover:bg-brand-teal-light">Next &rarr;</button>
                  ) : (
                    <button onClick={handleSubmit} className="rounded bg-red-600 px-4 py-2 text-[0.78rem] font-semibold text-white transition-colors hover:bg-red-500">Submit Paper</button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.09)]">
              <div className="p-10 text-center">
                <div className="mb-3 text-[2.5rem]">{pct >= 50 ? '\uD83C\uDF89' : '\uD83D\uDE14'}</div>
                <div className="text-[1.3rem] font-bold text-brand-navy">Score: <strong>{score} / {examQuestions.length}</strong></div>
                <div className="mt-2 text-[1rem] text-brand-muted">Grade: <span className={`font-bold ${gradeColor}`}>{grade}</span></div>
                <p className="mt-3 text-[0.85rem] text-brand-muted">{pct >= 50 ? 'Congratulations! Your result has been recorded.' : 'Keep studying and try again. You can do better!'}</p>
                <button
                  onClick={() => { setRemaining(TOTAL_SECS); setCurrentQ(0); setAnswers({}); setSubmitted(false) }}
                  className="mt-6 rounded bg-brand-navy px-6 py-3 text-[0.85rem] font-semibold text-white transition-colors hover:bg-brand-teal"
                >&larr; Try Again</button>
              </div>
              <div className="border-t border-black/6 px-6 py-6">
                <h3 className="mb-4 text-[0.9rem] font-semibold text-brand-navy">Answer Review</h3>
                <div className="space-y-4">
                  {examQuestions.map((q, i) => {
                    const correct = answers[i] === q.correct
                    return (
                      <div key={i} className="rounded-md border border-black/6 bg-brand-cream p-4">
                        <div className="mb-1.5 flex items-start gap-2 text-[0.85rem] font-semibold text-brand-navy">
                          <span className={correct ? 'text-brand-teal' : 'text-red-500'}>{correct ? '\u2713' : '\u2717'}</span>
                          Q{i + 1}: {q.q}
                        </div>
                        <div className="ml-5 text-[0.8rem] text-brand-muted">
                          Your answer: {answers[i] !== undefined ? q.options[answers[i]] : 'Not answered'}
                          {!correct && <span className="ml-2 text-brand-teal">(Correct: {q.options[q.correct]})</span>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
