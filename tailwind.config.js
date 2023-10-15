/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      offWhite: '#fefffe',
      brownishGray: '#2a2b2d',
      littleGray: '#EBEBEB,',
      darkBlack: '#303030',
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
  plugins: [[require('tailwind-hamburgers')]],
};
