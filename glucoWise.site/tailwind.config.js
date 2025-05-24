/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6CAB9C',
          dark: '#5a9183',
          light: '#8ebfb3',
          50: '#f0f7f5',
          100: '#d5e9e3',
          200: '#b9dbd2',
          300: '#9dcdc1',
          400: '#81bfb0',
          500: '#6CAB9C',
          600: '#5a9183',
          700: '#48776a',
          800: '#365d51',
          900: '#244339'
        }
      }
    },
  },
  plugins: [],
};