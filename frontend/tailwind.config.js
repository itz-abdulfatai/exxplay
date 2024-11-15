/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#f9d0bf',
        accent2: '#df82ff'
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      }
      
    },
  },
  plugins: [],
}
