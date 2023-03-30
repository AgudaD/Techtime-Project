/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amazingKids: ['Amazing Kids'],
        'satoshi': ['Satoshi'],
        'clashDisplay': ['Clash Display'],
      }
    },
  },
  plugins: [],
}