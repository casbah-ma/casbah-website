const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mako: ["var(--font-mako)"],
        inter: ["var(--font-inter)"],
        made: ["var(--font-made)"],
      },
      colors: {
        deepBlue: "#000F9F",
        brightOrange: "#FF5100",
        grayIsh: "#FF5100",
        blackIsh: "#151B18",
      },
      screens: {
        md: "600px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
