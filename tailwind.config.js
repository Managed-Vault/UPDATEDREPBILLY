/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      /* ----------  COLOR SYSTEM ---------- */
      colors: {
        /* BRAND blues */
        brand: {
          50:  '#f1f6fc',
          100: '#e1ecfa',
          200: '#c3d9f5',
          300: '#9cc4ef',
          400: '#75afe9',
          500: '#4e99e3',   // hover, active tints
          600: '#4db2d3',   // <— your current #1E56A0
          700: '#4db2d3',
          800: '#f0f0f0',
          900: '#081b30',
        },

        /* ACCENT violets (button highlights, links, etc.) */
        accent: {
          50:  '#4db2d3',
          100: '#4db2d3',
          200: '#4db2d3',
          300: '#4db2d3',
          400: '#4db2d3',
          500: '#4db2d3',
          600: '#4db2d3',
          700: '#4db2d3',
          800: '#4db2d3',
          900: '#4db2d3',
        },

        /* NEUTRAL greys tuned for light UI */
        neutral: {
          50:  '#fafbfc',
          100: '#f4f6f8',
          200: '#e5e9ed',
          300: '#d3d9e0',
          400: '#b6c0cb',
          500: '#8e9aae',
          600: '#647085',
          700: '#4c5668',
          800: '#333b49',
          900: '#1a1e25',
        },
      },

      /* ----------  TYPOGRAPHY ---------- */
      fontFamily: {
        headline:   ["Inter", "system-ui", "sans-serif"],
        subheadline:["Montserrat", "Inter", "sans-serif"],
        content:    ["Poppins", "Montserrat", "sans-serif"],
        tagline:    ["Merriweather", "serif"],   // 900-weight punch lines
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};