/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'sky-blue': '#0ea5e9', // Primary accent
          'light-sky': '#7dd3fc', // Light sky highlights
          'navy-blue': '#1e3a8a', // Deep navy background
          'dark-navy': '#0f172a', // Darkest navy
          'text-primary': '#ffffff', // Primary text for dark backgrounds
          'text-secondary': '#7dd3fc', // Secondary text for dark backgrounds
          'text-accent': '#0ea5e9', // Accent text
          'text-muted': '#bfdbfe', // Muted text
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'], // Consistent modern sans-serif for headings
        body: ['Inter', 'sans-serif'], // Clean sans-serif for body text
      },
      lineHeight: {
        'body-loose': '1.8', // Spacious readability
      },
      letterSpacing: {
        'body-wide': '0.01em', // Avoid tight spacing
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(13,27,42,0.15)',
        cardHover: '0 16px 40px -12px rgba(26,122,110,0.2)',
        float: '0 20px 50px -15px rgba(0,0,0,0.2)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
