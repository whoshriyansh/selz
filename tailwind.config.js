/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  flyonui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    addDynamicIconSelectors(),
  ],
};
