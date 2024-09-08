/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      transformOrigin: {
        'custom-origin': '75% 0%', // Custom percentage
      },
      fontFamily: {
        mon_bold: ['Montserrat-Bold']
      },
    },
  },
  plugins: [],
}

