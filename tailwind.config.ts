import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5602d4",
        "background-light": "#f7f5f8",
        "background-dark": "#111126",
        "electric-blue": "#477cff",
        "charcoal-field": "#1c1c36",
        "border-dark": "#2f273a",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;