// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      light: "#FFFFFF",
      black: "#090E34",
      red: "#D31F3C",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4,10,34,0.2)",
        one: "0px 2px 3px rgba(7,7,77,0.05)",
        stickv: "inset 0 -1px 0 rgba(0,0,0,0.1)",
      },
      fontFamily: {
        serif: ['Lora', 'serif'], // Ajoutez Lora ici
      },
    },
  },
  plugins: [],
};

export default config;
