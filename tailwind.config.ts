import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0d1b2f",
        gold: "#d7b56d",
        mist: "#dbe7f3"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
