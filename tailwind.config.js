// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        base: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#111827',
          dark: '#f1f5f9',
        },
        section: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        accent: {
          from: '#7C3AED',
          to: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}
