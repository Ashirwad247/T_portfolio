/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-x-in': {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-x-in': 'fade-x-in 0.4s ease-out forwards',
      },
    },

  },
  plugins: [],
}

