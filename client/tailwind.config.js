/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "raisin-black": "#262626",
        quartz: "#574454",
        "ghost-white": "#FAF8FF",
        arsenic: "#404247",
        "black-coral": "#58626A",
        "slate-gray": "#6E858B",
      },
    },
  },
  plugins: [],
};
