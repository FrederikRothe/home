/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Using class strategy for dark mode
  theme: {
    extend: {
      colors: {
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        accent: 'var(--accent)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
            h1: {
              color: 'var(--foreground)',
              fontWeight: '700',
            },
            h2: {
              color: 'var(--foreground)',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--foreground)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--foreground)',
            },
            blockquote: {
              color: 'var(--foreground)',
              borderLeftColor: 'var(--secondary)',
            },
            code: {
              color: 'var(--primary)',
              backgroundColor: 'var(--background-light)',
            },
            pre: {
              backgroundColor: 'var(--background-light)',
            },
            strong: {
              color: 'var(--foreground)',
              fontWeight: '700',
            },
          },
        },
        dark: {
          css: {
            // Dark mode specific customizations if needed
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}