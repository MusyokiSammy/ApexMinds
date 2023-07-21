/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        "Roboto-mono": ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        hero: "url(../src/Images/hero.jpg)",
        software: "url(../src/Images/Software.jpg)",
        transparency: "url(../src/Images/Transparency.jpg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

