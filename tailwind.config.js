/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/src/components/Home/HomeSlider/assets/bg.png')",
        bgColor: "url('/src/components/Home/HomeSlider/assets/bgColor.png')",
        aboutBg: "url('/src/components/About/assets/Vector.png')",
        cat_bg: "url('/src/components/Home/LotteryCategory/assets/cat_bg.png')",
        item_bg:
          "url('/src/components/Home/LotteryCategory/assets/item_bg.png')",
        small: "url('/src/components/Home/LotteryCategory/assets/small.png')",
        game: "url('/src/components/Home/GamingCategory/assets/game.png')",
        game_bg:
          "url('/src/components/Gaming/GamingSlider/assets/game_bg.png')",
        award: "url('/src/components/Gaming/Awards/assets/award.png')",
        left: "url('/src/components/Contact/assets/left.png')",
      },
      colors: {
        primary: "#AE7404",
      },
      fontFamily: {
        "Open Sans": ["Open Sans"],
        Poppins: ["Poppins"],
        Rossans: ["Rossans"],
        Nunito: ["Nunito"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
