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
          navy: '#0d1b2a',
          teal: '#1a7a6e',
          'teal-light': '#22a898',
          gold: '#c9a84c',
          'gold-light': '#e8c96a',
          cream: '#f7f3ed',
          text: '#1e2d3a',
          muted: '#6b7f8e',
        },
      },
      fontFamily: {
        display: ['Playfair Display SC', 'serif'],
        body: ['Libre Baskerville', 'serif'],
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
