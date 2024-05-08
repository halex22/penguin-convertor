/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'borderWidth': {
        '3':'3px'
      },
      'screens': {
        'sm': '400px'
      },
      'padding': {
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66667%',
      }
    },
  },
  plugins: [],
}

