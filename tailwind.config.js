/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bruh-dark-back': "#1b1a1f",
      'bruh-white': "#d4d0db",
      'bruh-gray': "#b0aabf",
      'bruh-primary': "#937fc7",

    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/browotinglines.png')",
      }},
  },
  plugins: [require('tailwind-scrollbar'),],
}