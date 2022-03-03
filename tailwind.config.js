const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Roboto", "system-ui"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: fontFamily,
    container: {
      center: "true",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
