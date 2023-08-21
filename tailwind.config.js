/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'code': "url('assets/cool-background.jpg')",
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

