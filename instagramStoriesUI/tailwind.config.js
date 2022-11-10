/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./index2.html", "./remakeNavBar.html"],
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      }
    },
  },
  plugins: [],
}
