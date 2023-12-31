/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: 'Work Sans, sans-serif',
        caveat: 'Caveat, cursive',
      },
      backgroundImage: {
        'formBg': "url('https://i.ibb.co/6nMd0Tj/form-bg.jpg')",
      },
      
    },
  },
  plugins: [require("daisyui")],
}

