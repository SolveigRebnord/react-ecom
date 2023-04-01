/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        mainGreen: '#60750E',
        mainYellow: '#E2AA65',
        mainBrown: '#AE8573',
        mainGrey: '#F6F6F6',
        mainBeige: '#EED8BD',
        mainOffBlack: '#5B5B5B'
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
        'roboto': 'Roboto, sans-serif'
      },
      content: {
        'link': '"',
      },
 
    },
  },
  plugins: [],
}

