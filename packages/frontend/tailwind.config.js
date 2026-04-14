/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        mini: '350px',
        xs: '450px',
      },
      colors: {
        primary: {
          400: 'oklch(77.7% 0.152 181.912)', // teal-400
          500: 'oklch(70.4% 0.14 182.503)', // teal-500
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        mini: ['0.65rem', '0.9rem'],
      },
      backgroundImage: {
        'primary-shimmer':
          'linear-gradient(90deg, oklch(70.4% 0.14 182.503) 0% 50%, oklch(75.5% 0.138 181.071) 73%, oklch(70.4% 0.14 182.503) 94%)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { 'background-position': '0 0' },
          '30%': { 'background-position': '0 0' },
          '70%': { 'background-position': '0 0' },
          'to': { 'background-position': '-200% 0' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite forwards',
        shimmerdelayed: 'shimmer 4s linear 1s infinite forwards',
      },
    },
  },
};
