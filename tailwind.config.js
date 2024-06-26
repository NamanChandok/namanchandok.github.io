/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          'bruh-black': "#181818",
          'bruh-white': "#E8EDDF",
          'bruh-gray': "#F5CB5C",
        },
        backgroundImage: {
          "hero-bg": "url('/bg.svg')",
        },
        backgroundSize: {
          '100': "100%",
          '400': "400%",
        },
        fontFamily: {
          cabin: "Cabin, sans-serif",
          akira: "Akira, sans-serif",
        },
        keyframes: {
          scale: {
            '0%, 100%': { transform: 'scale(100%))' },
            '50%': { transform: 'scale(110%)' },
          }
        },
        animation: {
          scale: 'scale 0.8s ease-in-out',
        }
      },
  },
  plugins: [require('tailwind-scrollbar'),],
}