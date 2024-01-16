/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { theme: "#54C4B6", textcolor: "#cfbcab" },
      fontFamily: { mont: ["Montserrat", "sans-serif"] },
    },
  },
  plugins: [],
};
