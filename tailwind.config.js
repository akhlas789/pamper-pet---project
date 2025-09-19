/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        golden: "#FFDC26", 
        clifford: "#da373d",
      },

      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },

      backgroundImage: {
        
        "big-cat": "url('./c1-assets/cat-big.png')",
        "footer-texture": "url('./c1-assets/footer.png')",
      },
    },
  },

  plugins: [],
};
