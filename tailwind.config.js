const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
      },
      fontFamily: {
        heading: ['CalSans', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        strong: ['Inter-bold', ...defaultTheme.fontFamily.sans],
        medium: ['Inter-medium', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
