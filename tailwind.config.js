/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mako: ['var(--font-mako)'],
        inter: ['var(--font-inter)'],
        made: ['var(--font-made)'],
      },
      colors: {
        deepBlue: '#000F9F',
        darkBlue: '#000219',
        brightOrange: '#FF5100',
        gray: '#D9D9D9',
        grayIsh: '#FF5100',
        blackIsh: '#151B18',
        red: '#F30000',
      },
      screens: {
        xs: '320px',
        ...defaultTheme.screens,
        // sm: '414px',
        md: '600px',
        sm: '414px',

      },
    },
  },
  plugins: [],
};
