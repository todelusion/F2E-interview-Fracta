module.exports = {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "384px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
      colors: {
        primary: "#1D4A90",
        primary_Dark: "#003F97",
        primary_light: "#0554C0",
        second: "#191919",
      },
      padding: {
        3.5: "0.875rem",
      },
      spacing: {
        18: "4.5rem",
        42: "10.5rem",
        70: "17.5rem",
        100: "25rem",
        113: "28.25rem",
        120: "30rem",
        160: "40rem",
      },
    },
    fontFamily: {
      sansTC: ["Noto Sans TC", "Roboto"],
      sansEG: ["Poppins", "Roboto"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
  ],
};
