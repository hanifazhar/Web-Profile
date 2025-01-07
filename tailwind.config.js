/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#21232f',
        'mainColor': '#6c5dd2',
        'fontColor': '#fbfbfd',
        'sideColor': '#242632'
      },
    },
  },
  plugins: [],
}