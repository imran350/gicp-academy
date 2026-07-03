import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RevealSection({ children, className = '' }) {
  const [ref, isVisible] = useScrollReveal(0.1)
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
