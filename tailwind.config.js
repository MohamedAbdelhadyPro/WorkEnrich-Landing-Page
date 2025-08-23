/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        'primary': '#1A3477',
        'secondary': '#2563eb',
        'orange': '#ff7000',
      }
    },
  },
  plugins: [],
}