/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      colors: {
        'sideColor': '#21232f',
        'mainColor': '#6c5dd2',
        'fontColor': '#fbfbfd',
        'backgroundColor': '#242632'
      },
    },
  },
  plugins: [],
}