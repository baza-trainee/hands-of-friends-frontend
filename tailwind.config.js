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
        body: ["ptSans", "sans-serif"],
        // heading: ['bloggerSans', 'sans-serif'],
      },
      colors: {
        deepBlue: "#2563EB",
        vividBlue: "#60A5FA",
        lightBlue: "#E0F2FE",
        purple: "#3F3493",
        black: "#020617",
        gray: "#A1A1AA",
        violet: "#4C1D95",
        whiteFont: "#F8FAFC",
      },
    },
    screens: {
      xs: "320px",
      sm: "420px",
      lg: "1024px",
    },
  },
  plugins: [],
};
