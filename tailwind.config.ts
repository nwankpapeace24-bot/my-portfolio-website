import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDEBF5",
          100: "#ADBBDA",
          200: "#8697C4",
          300: "#7091E6",
          400: "#3D52A0",
        },
        writer: {
          "deep-blue": "#3D52A0",
          "sky-blue": "#7091E6",
          cornflower: "#8697C4",
          lavender: "#ADBBDA",
          powder: "#EDEBF5",
        },
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        body: ["var(--font-inter)"],
        heading: ["var(--font-sora)"],
        accent: ["var(--font-lexend)"],
        mono: ["var(--font-jetbrains)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #7091E6" },
          "100%": { boxShadow: "0 0 20px #7091E6, 0 0 30px #7091E6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
