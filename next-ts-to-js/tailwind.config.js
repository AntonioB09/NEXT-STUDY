/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [ 
  "./node_modules/flowbite-react/**/*.js",   
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      Yellow: colors.amber,
      Green:colors.emerald
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem', 
    },
  },
  plugins: [require("flowbite/plugin")
],
}