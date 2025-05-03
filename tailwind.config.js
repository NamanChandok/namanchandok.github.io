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
        "bruh-black": "#111",
        "bruh-white": "#e8e8e8",
        "bruh-gray": "#92b4c9",
      },
      backgroundImage: {
        "hero-bg": "url('/bg.jpg')",
      },
      backgroundSize: {
        100: "100%",
        400: "400%",
      },
      fontFamily: {
        cabin: "Cabin, sans-serif",
        akira: "Akira, sans-serif",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(100%))" },
          "50%": { transform: "scale(110%)" },
        },
      },
      animation: {
        scale: "scale 0.8s ease-in-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
