/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        wave: 'wave 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

