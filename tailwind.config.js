/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        border: 'var(--border)',
      },
      backgroundImage: {
        'pattern-2': "url('/pattern-bg.svg')",
      },
    },
  },
  plugins: [],
}
