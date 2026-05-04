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
          primary: '#4F46E5',
          'primary-dark': '#3730A3',
          'primary-light': '#818CF8',
          'primary-50': '#EEF2FF',
          accent: '#EA580C',
          'accent-light': '#FB923C',
          'accent-50': '#FFF7ED',
          dark: '#0F172A',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(79,70,229,0.25)',
        cardHover: '0 16px 40px -12px rgba(79,70,229,0.35)',
        float: '0 20px 50px -15px rgba(0,0,0,0.3)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
