/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'code': "url('/assets/cool-background.webp')",
        'UEA': "url('/assets/UEA-background.webp')",
        'bury_2': "url('/assets/Bury_2.webp')",
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

