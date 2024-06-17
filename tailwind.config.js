/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyberpunk: ['Cyberway Riders', 'sans-serif'],
      },
      colors: {
        "dark-blue": "#00EEFF",
        "med-blue": "#4BD2D5",
        "light-blue": "#BDE6EC",
        "custom-gray": "#6E98AE"
      },
    },
  },
  plugins: [],
};
