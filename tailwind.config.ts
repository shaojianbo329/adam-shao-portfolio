import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C1424",
        navy: "#12213A",
        steel: "#536276",
        line: "#D9E0EA",
        paper: "#F7F9FC",
        mist: "#EDF2F7",
        silver: "#A8B2C1",
        accent: "#8E9FB5"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "Segoe UI",
          "Arial",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        lift: "0 24px 70px rgba(12, 20, 36, 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
