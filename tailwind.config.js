/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292A73",
          secondary: "#F49C00",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
