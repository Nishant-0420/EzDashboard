/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ez-dashboard/dist/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}