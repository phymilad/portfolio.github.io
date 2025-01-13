/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0B192F',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'slate': '#8892B0',
        'light-slate': '#A8B2D1',
        'lightest-slate': '#CCD6F6',
        'green': '#64FFDA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} 
