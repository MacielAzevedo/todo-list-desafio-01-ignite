/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8284FA',
        purpleDark: '#5E60CE',
        blue: '#4EA8DE',
        blueDark: '#1E6F9F',

        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },

        danger: '#E25858',
      },
      width: {
        23: '5.625rem',
        100: '32.75rem',
        112: '46rem'
      },
      height: {
        11: '3.25rem',
        13: '3.375rem',
        18: '4.5rem'
      },
      maxWidth: {
        '2xl': '46rem'
      },
      maxHeight: {
        custom: '46rem'
      },
      lineHeight: {
        5: '1.18rem'
      }
    },
  },
  plugins: [],
}
