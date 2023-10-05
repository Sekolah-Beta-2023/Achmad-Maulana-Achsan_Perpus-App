/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'green-light': '#CCEDF2',
        'green-dark': '#00899D',
        'orange-light': '#D6ABA1',
        'black-light': '#4C4C4C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
