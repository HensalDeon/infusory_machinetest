/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fef4ec",
        secondary: "#f2994a",
        tertiary: "#b87132",
        blackcs: "#5e6670",
        light: "#1d1836",
        adprimary: "#081028",
        adsecondary: "#081028",
        adtertiary: "#343b4f",
        bluecs: "#0b1739",
        adlight: "#aeb9e1",
      },
    },
  },
  plugins: [],
};
