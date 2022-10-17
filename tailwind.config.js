/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      offWhite: '#fefffe',
      brownishGray: '#2a2b2d',
      littleGray: '#EBEBEB,',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Khula', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
