/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "8xl": "1460px",
      },
      fontFamily: {
        sans: ["A1Sans", "sans-serif"],
        serif: ["A1Serif", "serif"],
      },
      borderRadius: {
        a1: "1rem",
      },
      scale: {},
      colors: {
        primary: "#da291c",
        primaryDark: "#9C1A19",
        primaryLight: "#fdf3f3",
        // lightRed: "#fdf3f3",
        error: "#da291c",
        secondary: "#6294AB",
        secondaryLight: "#e0eaee",

        // placehodler: "#818181",
        success: "#72c224",
        succsessLight: "#60ba07",
        // lightBlue: "#e0eaee",
        base: {
          100: "#f7f7f7",
          200: "#d8d8d8",
          300: "#BBBBBB",
          400: "#979797",
          500: "#646464",
          800: "#353535",
        },
        beige: {
          100: "#f9f7f5",
          200: "#F0EDEA",
        },
      },
      fontSize: {
        xxs: ["0.625rem", "0.875rem"],
        xs: ["0.75rem", "1.125rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.25rem"],
        lg: ["1.125rem", "1.375rem"],
        xl: ["1.25rem", "1.5rem"],
        "1xl": ["1.375rem", "1.625rem"],
        "2xl": ["1.5rem", "1.75rem"],
      },
      rotate: {
        60: "60deg",
        30: "30deg",
      },

      keyframes: {
        loader: {
          "0%, 100%": { transform: "scale(110%)" },
          "50%": { transform: "scale(80%)" },
        },
        drop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        translateFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0%) ", opacity: 0 },
          "100%": { transform: "scale(100%) ", opacity: 1 },
        },

        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        loader: "loader 1s ease-in-out infinite",
        drop: "drop 1s ease-in-out",
        translateFromBottom: "translateFromBottom 0.3s ease-in-out",
        scaleFast: "scale 0.3s ease-in-out",
        opacity: "opacity 0.3s linear",
      },
    },
  },
  plugins: [],
};
