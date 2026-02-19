/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d8eeff',
          200: '#b9e2ff',
          300: '#8fd3ff',
          400: '#5ab8ff',
          500: '#3398ff',
          600: '#1f79f5',
          700: '#1a61e1',
          800: '#1b4eb5',
          900: '#1b438f'
        }
      }
    }
  },
  plugins: []
};
