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
          'sky-blue': '#0ea5e9',
          'light-sky': '#7dd3fc',
          'navy-blue': '#1e3a8a',
          'dark-navy': '#0f172a',
          'text-primary': '#ffffff',
          'text-secondary': '#7dd3fc',
          'text-accent': '#0ea5e9',
          'text-muted': '#bfdbfe',
          navy: '#1e3a8a',
          teal: '#1a7a6e',
          gold: '#c9a84c',
          cream: '#f7f3ed',
          'teal-light': '#22a898',
          'gold-light': '#e8c96a',
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
