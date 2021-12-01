module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        gray: '#707070',
        blue: '#1B4167'
      },
      borderColor: {
        gray: '#A8A8A8',
        blue: '#1B4167'
      },
      textColor: {
        secondary: '#D5D0AC',
        gray: '#3D3D3D',
        "gray-light": '#A8A8A8',
        'gray-bg': '#707070',
        blue: '#1B4167',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
