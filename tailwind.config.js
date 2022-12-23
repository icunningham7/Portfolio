/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/(**/)?*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Mirza', '"Arima Madurai"', 'OpenSans', 'cursive']
      },
      minHeight: {
        '40': '10rem',
        '96': '24rem',
      },
      maxHeight: {
        '96': '24rem',
        '128': '32rem',
      },
      height: {
        '128': '32rem'
      },
      minWidth: {
        '40': '10rem'
      },
      maxWidth: {
        '96': '24rem',
      }

    },

  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
