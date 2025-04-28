/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#000042',
        'custom-sage': '#e79f31',
      },
    },
  },
  plugins: [],
};
