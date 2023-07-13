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
        place1: "url(../assets/images/p-1.jpg)",
        place2: "url(../assets/images/p-2.jpeg)",
        place3: "url(../assets/images/p-3.jpg)",
        place4: "url(../assets/images/p-4.jpeg)",
        place5: "url(../assets/images/p-5.jpg)",
        place6: "url(../assets/images/p-6.jpeg)",
        place7: "url(../assets/images/p-7.jpg)",
        place8: "url(../assets/images/p-8.jpeg)",
        place9: "url(../assets/images/p-9.jpg)",
        place10: "url(../assets/images/p-10.jpeg)",
        place11: "url(../assets/images/p-11.jpeg)",
        place12: "url(../assets/images/p-12.jpeg)",
        place13: "url(../assets/images/p-13.jpeg)",
        place14: "url(../assets/images/p-14.jpeg)",
        place16: "url(../assets/images/p-15.jpeg)",
      },
    },
    container: {
      center: true,
      // padding: '2rem'
    },
  },
  plugins: [],
};
