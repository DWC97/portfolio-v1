import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    
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
        "custom-gray": "#6E98AE",
        "primary-dark": "#0C1523",
        "custom-red": "#FF2463"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
