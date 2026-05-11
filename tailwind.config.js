/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        petrol: {
          50: '#E8F1F8',
          100: '#C5DCF0',
          200: '#8FB8DF',
          300: '#5A94CE',
          400: '#2E7BBF',
          500: '#1B6CA8',
          600: '#0D4F7C',
          700: '#072C4A',
          800: '#051E35',
          900: '#03111F',
        },
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 20s infinite alternate',
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
