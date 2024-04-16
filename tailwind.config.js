/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(calc(400px - 100%))",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        slide: "slide 5s ease infinite",
      },
    },
  },
  plugins: [],
};
