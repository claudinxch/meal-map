/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: "#00632A", /** #00843C */
        orange: "#F4A261",
        lightGray: "#F5F7FA",
        darkGray: "#2A2D34"
      }
    },
    fontFamily: {
      primary: ["Plus Jakarta Sans"],
      secondary: ['"Open Sans"'],
      tertiary: ["Bebas Neue"],
      fourth: ["Manrope"]
    },
  },
  plugins: [],
}

