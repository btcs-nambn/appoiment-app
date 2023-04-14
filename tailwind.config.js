module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        input: "inset 0 0 1px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
