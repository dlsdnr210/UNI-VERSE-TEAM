/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C4DFF",
        secondary: "#8B5CF6",
        dark: {
          DEFAULT: "#0F0F17",
          card: "#151521",
          hover: "#1a1a2e"
        },
        light: "#F7F7FA",
        sub: "#A8A8B8"
      }
    },
  },
  plugins: [],
}
