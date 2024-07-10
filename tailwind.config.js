/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accentPrimary: 'var(--accent-primary)',
        accentSecondary: 'var(--accent-secondary)',
        background: 'var(--background)',
      },
      
    },
    fontFamily: {
      kalam: ['Kalam', 'cursive'],
      serif: ['Baskervville SC', 'serif'],
    },

  },
  plugins: [],
}