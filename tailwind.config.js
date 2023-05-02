/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryOrange:' hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        overlay: 'rgba(169, 169, 169, 0.785)',
        overlayOrange: 'hsla(26, 100%, 55%, 0.167)',
      },
      minWidth:{
        'screen-vh': '400%'
      }
    },
  },
  plugins: [],
}