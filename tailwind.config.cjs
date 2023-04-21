/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8ecae6",
        gray: "#ABB2BF",
        background: "#282C33",
      },
    },
  },
  plugins: [],
};
