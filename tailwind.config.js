/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'code': "url('/assets/cool-background.jpg')",
        'UEA': "url('/assets/UEA-background.jpg')",
        'norwich': "url('/assets/Norwich.png')",
        'bury': "url('/assets/Bury.png')",
        'bury_2': "url('/assets/Bury_2.jpg')",
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

