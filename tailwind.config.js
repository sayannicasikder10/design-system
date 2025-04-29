/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          500: '#0ea5e9',
          700: '#0369a1',
        },
        secondary: {
          500: '#64748b',
        },
        success: {
          500: '#22c55e',
        },
        error: {
          500: '#ef4444',
        },
        warning: {
          500: '#f59e0b',
        },
        neutral: {
          50: '#f9fafb',
          500: '#6b7280',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}

