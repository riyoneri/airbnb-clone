/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#FF385C",
      },
      fontFamily: {
        main: "Air-bnb",
        "main-medium": "Air-bnb-Medium",
        "main-bold": "Air-bnb-Bold",
      },
      backgroundImage: {
        "place1": "url(../assets/images/place-1.jpeg)"
      }
    },
  },
  plugins: [],
};
