import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0) 38.44%, #000000 64.64%), linear-gradient(0deg, rgba(4, 16, 42, 0.3), rgba(4, 16, 42, 0.3))",
      },
      fontFamily: {
        avantgarde: ['"AvantGarde Bk BT"', "sans-serif"],
        gothic_book: ['"ITC Avant Garde Gothic Book"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
