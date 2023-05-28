const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      strokeWidth: {
        1.5: "1.5px",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [require("tailwindcss-radix-colors"), require("tailwindcss-animate")],
};

module.exports = withTV(config);
