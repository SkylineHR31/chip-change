import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "gray-bg": "#F6F7FF",
      },
      backgroundImage: {
        "hero-section":
          "linear-gradient(0deg, rgba(44, 54, 242, 0.50) 0%, rgba(44, 54, 242, 0.50) 100%), url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
