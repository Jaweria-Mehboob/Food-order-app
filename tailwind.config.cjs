/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidedown: {
          from: { opacity: "0", transform: "translate(-50% ,-4rem)" },
          to: { opacity: "1", transform: "translate(-50%,0)" },
        },
        slideup: {
          from: { opacity: "0", transform: "translateY(4rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slidedown: "slidedown 1s ease-out forwards",
        slideup: "slideup 1s ease-out forwards",
        bump: "bump 300ms ease-out",
      },
      colors: {
        primary: "#7F2607",
        secondary: "#383638",
      },
      fontFamily: {
        serif: ["Noto Sans JP", "sans-serif"],
      },
    },
    plugins: [],
  },
};
