/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D83F2",
        "primary-dark": "#383838",
      },
      backgroundImage: {
        "btn-primary": "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
      },
    },
  },
  plugins: [],
};
