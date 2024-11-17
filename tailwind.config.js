// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customBlue: '#30277F',
        C5C6C9: '#C5C6C9',
        EEEFFF: '#EEEFFF',
      },
       maxWidth: {
        'custom': '546px',
        'custom5': '500px',
      },
      fontFamily: {
        unbounded: ['"Unbounded"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
