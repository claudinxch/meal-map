/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0077B6' /** #00843C #00632A */,
        yellow: '#FFB703' /** #F4A261 */,
        lightGray: '#F5F7FA',
        darkGray: '#232528',
      },
    },
    fontFamily: {
      primary: ['Plus Jakarta Sans'],
      secondary: ['"Open Sans"'],
      tertiary: ['Bebas Neue'],
      fourth: ['Manrope'],
    },
  },
  plugins: [],
}
