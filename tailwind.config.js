/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"Item",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2*1":"6rem"
        }
      }
    },
  },
  plugins: [],
}

