module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ["'Be Vietnam Pro'", "sans-serif"], // 👈 Gắn font mới
      },
    },
  },
  plugins: [],
};
