import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    // Hook for an error-reporting service (e.g. Sentry) in production.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-2xl font-bold text-white">Something went wrong</h1>
          <p className="mt-3 max-w-md text-sm text-white/70">
            An unexpected error occurred. Please refresh the page and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-brand-sky-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Reload Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
