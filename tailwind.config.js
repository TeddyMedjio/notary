const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#9F1832",
          "light-red": "#B4203D",
          blue: "#002654",
          "dark-blue": "#001631",
          yellow: "#F4AC45",
          gray: "#2B3B45",
          "light-gray": "#758896",
        },
      },
      fontFamily: {
        openSans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Vidaloka", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        31: "7.75rem",
        54: "13.5rem",
      },
      fontSize: {
        "2xl": ["1.625rem", { lineHeight: "2rem" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
