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
        bgColor: "#111613",
        bgWhtColor: "#e2e2e2",
        darkColor: '#060D38',
        lightColor: '#FEFFFE',
        lightHvColor: '#A9AFFF',
        logoColor: '#1b217942',
        borderColor: '#ffffff18',
        borderLgtColor: 'rgba(221, 221, 221, 0.70)',
        toggleBgColor: 'rgba(83, 91, 189, 0.30)',
        lightBgColor: '#949a9fa0',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
};
