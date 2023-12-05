/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      backgroundImage: {
        'main': "url('/background/bg.png')",
        'spin-wheel': "url('/spin/wheel.png')",
        'spin-wheel-bg': "url('/spin/wheelBorder.png')",
        'spin-arrow': "url('/spin/wheelBorder.png')",
      },
      fontFamily: {
        gamer: ["Gamer", "cursive"],
        spatacular:["spatacular","spatacular"],
        easy:["easy","easy"]

      },
      keyframes: {
        'jelly': {
            '25%' :{
              transform: 'scale(0.9, 1.1)'
            },
            '50%': {
              transform: 'scale(1.1, 0.9)'
            },
            '75%' :{
              transform: 'scale(0.95, 1.05)'
            }
        }
      },
      animation: {
        jelly: 'jelly 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

