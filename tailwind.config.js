module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
    },
    extend: {
      colors: {
        primary: "#195efe",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
