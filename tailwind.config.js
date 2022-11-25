/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#F2F2F0',
        'dark': '#0D0D0D',
        'main': '#BFBFBD',
      }
    },
  },
  plugins: [],
}
