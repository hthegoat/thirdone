module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-dark-mode')()

  ],
}
