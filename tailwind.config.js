/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      colors: {
        primary: "#12162E",
        secondary: "#aaa6c3",
        tertiary: "#0A1024 ",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
      },
    },
  },
  plugins: [],
};
