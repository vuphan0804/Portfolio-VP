/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#032055",
        secondary: "#0a1e5e",
        background: "#000",
        borderColor: "#11326f",
        bshover: "rgb(59 55 188 / 50%)",
        textSecondary: "#b3b3b3",
        textPrimary: "#fff",
        linearPrimary:
          "linear-gradient(90deg, #ce06d6, #f440a3 39%, #fdc7ca 67%, #6183f3)",
        linearSecondary:
          "linear-gradient(90deg, #bd10c3, #cd1590 28%, #d2177e 56%, #ec8686)",
      },
      backgroundColor: {
        linearPrimary:
          "linear-gradient(90deg, #ce06d6, #f440a3 39%, #fdc7ca 67%, #6183f3)",
        linearSecondary:
          "linear-gradient(90deg, #bd10c3, #cd1590 28%, #d2177e 56%, #ec8686)",
      },
      screens: {
        mobile: "575px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
