/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C75BC",   // Blue
        secondary: "#FFD447", // Yellow
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // always good to add a fallback
      },
    },
  },
  plugins: [],
};
