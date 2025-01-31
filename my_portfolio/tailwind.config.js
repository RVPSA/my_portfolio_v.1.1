/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Courier New"],
      serif: ["serif"],
      mono: ["monospace"],
    },
    screens: {
      SMobile: "320px", //Small mobile 320px-480px
      Mobile: "481px", //Mobile 481px-600px
      STablet: "601px", //Small Tablet 601px-768px
      Tablet: "769px", //Tablet 769px-1024px
      Laptop: "1025px", //Laptop/Small Desktop 1025px-1280px
      LDesktop: "1281px", //Large Desktop 1281px-1440px
      ELDesktop: "1441px", //Extra Large Desktop 1441px - up
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};