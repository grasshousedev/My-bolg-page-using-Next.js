const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      'brand-blue': '#0f5388',
      'brand-blue-light': '#CCEBFF',
      'brand-secondary': '#2B7CB6',
     },
     maxHeight: {
       'hero': '700px',
     },
     extend: {
      fontFamily: {
        'sans': ['Barlow', 'Helvetica', 'Arial', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.brand-secondary'),
              '&:hover': {
                color: theme('colors.brand-blue'),
              },
            },
            h1: {
              color: theme('colors.brand-blue'),
            }
          },
        },
      }),
     },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
