/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "550px",
      lg: "750px",
      xl: "900px",
      "2xl": "1000px",
      "3xl": "1200px",
    },
    fontFamily: {
      "lexend-deca": ["Lexend Deca", "sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "brand-beige": "#E6E3DD",
        "brand-dark-purple-primary": "#000",
        "brand-dark-purple-primary-light": "#0f0d2c",
        "brand-dark-purple-primary-extra-light": "#1b1846",
        "brand-dark-purple-secondary": "#0c0c0c",
        "brand-purple-navigation": "#08082126",
        "brand-purple-white": "#565496",
        "brand-purple-border": "#141414",
        "brand-white-primary-light": "#efefef",
      },
      boxShadow: {
        "ball-level-1": "-40px -60px 100px #932df930",
        "ball-level-2": "40px -60px 100px #932df929",
        "instagram-icon": "0 25px 70px #d72b84",
        "linkedin-icon": "0 0 70px #2197BD",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
