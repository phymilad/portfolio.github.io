/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode
        'navy': '#0B192F',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'slate': '#8892B0',
        'light-slate': '#A8B2D1',
        'lightest-slate': '#CCD6F6',
        // Light mode
        'light-bg': '#FFFFFF',
        'light-secondary': '#F5F5F5',
        'light-text': '#8892B0',      // Updated to match the gray text
        'light-heading': '#0A192F',   // Updated to match the dark heading
        'light-nav': '#94A3B8',
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
