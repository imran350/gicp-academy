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
          teal: '#0F766E',
          'teal-dark': '#0D5F59',
          'teal-light': '#14B8A6',
          'teal-50': '#F0FDFA',
          amber: '#D97706',
          'amber-light': '#F59E0B',
          'amber-50': '#FFFBEB',
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
        card: '0 8px 30px -12px rgba(15,118,110,0.25)',
        cardHover: '0 16px 40px -12px rgba(15,118,110,0.35)',
        float: '0 20px 50px -15px rgba(0,0,0,0.3)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
