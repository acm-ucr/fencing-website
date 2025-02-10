/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fencing: {
          "border-blue": "#008CFF",
          "title-background-blue": "#062C4E",
          "overall-background": "#081422",
        },
      },
    },
  },
  plugins: [],
};
