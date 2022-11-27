/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        JetMono: ["JetBrains Mono", "monospace"],
        Secular: ["Secular One", "sans-serif"],
        Frag: ["Fragment Mono", "monospace"],
      },
      colors: {
        primaryText: "#ededed",
        secondaryText: "#9f9e9f",
        primaryBg: "#222222",
        secondaryBg: "#333333",
        primaryButtonBg: "#222123"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
