import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        banana: "#FFE81F",
        orange: "#F7941D",
        blue: "#00008B",
        green: "#006400",
        rose: "#FF0000",
        grey: "#808080",
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#FFFF00",
        purple: "#800080",
        pink: "#FFC0CB",
        brown: "#A52A2A",
        cyan: "#00FFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        starjedi: ["var(--font-starjedi)"],
      },
    },
  },
  plugins: [],
};
export default config;
