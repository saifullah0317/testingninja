/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      transparent:'transparent',
      current:'currentColor',
      'swhite':'#ffffff',
      'sgreen':'#43ad32',
      'spurple':{
        100:'#f0d9fa',
        200:'#6a0396',
        300:'#510173',
      },
      'syellow':{
        100:'#f7cd72',
        200:'#fcad00',
      },
      'sgray':{
        100:'#efebfc',
        200:'#d2c4fb',
        300:'#6f6689',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
