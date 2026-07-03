import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

// Code-split heavy routes for faster mobile loading
const Courses = lazy(() => import('./pages/Courses'))
const Admissions = lazy(() => import('./pages/Admissions'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const Exam = lazy(() => import('./pages/Exam'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-sky-blue border-t-transparent" />
        <p className="text-sm text-white/60">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/about" element={<About />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
