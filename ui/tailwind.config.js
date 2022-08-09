/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        drawerClose: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(25%)' },
        },
        drawerOpen:{
          '0%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        drawerClose: 'drawerClose .75s ease-in-out',
        drawerOpen: 'drawerOpen .75s ease-in-out'
      }
    },
  },
  plugins: [],
}
