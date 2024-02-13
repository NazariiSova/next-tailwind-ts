import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true, 
      padding: '2rem', 
      screens: {
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        secondary: "#676C85",
        green: "#0ed2af",
        greenLightened: "rgba(14, 210, 175, 0.1)",
        blue: "#4eb9f4",
        dark: "#343d63"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
