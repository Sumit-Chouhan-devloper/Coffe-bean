/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4xxl": "40px",
      },
      colors: {
        "lightBlack": "#525252",
        "lightGray": "#B5B5B5",
        "DarkBlack": "#080808",
        "lightOrange": " #D3756B",
      },
      fontFamily: {
        "outfit": ['"outfit"', "sans-serif"],
      },
    },
  },
  plugins: [],
};