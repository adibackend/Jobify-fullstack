/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        jobifycolor:'#2CB1BC',
        bgcolor:'#F8FAFC',
      }
    },
  },
  plugins: [],
}

