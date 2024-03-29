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
        ptSans: ["ptSans", "sans-serif"],
      },
      colors: {
        deepBlue: "#2563EB",
        vividBlue: "#60A5FA",
        violet: "#6F4AAA",
        lightBlue: "#E0F2FE",
        slate: "F1F5F9",
        whiteFont: "#F8FAFC",
        fontGray: "#D1D5DB",
        gray: "#A1A1AA",
        grayDark: "#9CA3AF",
        lightGray: "#4B5563",
        black: "#020617",
        green: "#22C55E",
        red: "E11D48",
        purple: "#3F3493",
        lavender: "#EEF2FF",
        mainBg: "#EEF2FF",
      },
    },
    screens: {
      xs: "320px",
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    backgroundImage: {
      mobile: "url('/public/img/hand-holds-smartphone.jpg')",
    },
  },
  plugins: [],
  styles: {
    ".transition": {
      transition: "all 0.2s ease-in-out",
    },
    ".textBlack": {
      color: "black",
    },
  },
};
