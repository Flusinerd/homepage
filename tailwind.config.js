/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "screen-2/3": "66vh",
        "screen-1/2": "50vh",
        "screen-1/3": "33vh",
        "screen-1/4": "25vh",
      }
    },
  },
  plugins: [],
}
