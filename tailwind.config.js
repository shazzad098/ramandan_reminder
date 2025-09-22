/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'siliguri': ['Hind Siliguri', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slower': 'float-slower 10s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'bounce-slower': 'bounce-slower 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}