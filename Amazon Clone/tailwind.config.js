/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          light: '#232F3E',
          DEFAULT: '#131921',
          yellow: '#FEBD69',
          orange: '#FF9900'
        },
      },
    },
  },
  plugins: [],
}