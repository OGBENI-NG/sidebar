/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0d1826",
        bgWhtColor: "#e2e2e2",
        darkColor: '#03081b',
        lightColor: '#FEFFFE',
        lightHvColor: '#A9AFFF',
        logoColor: '#1b217942',
        borderColor: '#ffffff18',
        borderLgtColor: 'rgba(221, 221, 221, 0.70)',
        toggleBgColor: '#475363',
        lightBgColor: '#e9eff5',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
};
