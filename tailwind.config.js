/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'play': ['Play', 'sans-serif']
    },
    extend: {
      colors:{
        primary: "#1E90FF",
        secondary: "#FF6347",
        black: "#1E1E1E",
        white: "#FFFFFF",
      }
    },
  },
  plugins: [],
}
