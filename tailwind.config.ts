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
        // Re-mapping the primary scale to the new warm earth tones
        primary: {
          50: "#FFDBBB",   // Lightest (Peach)
          100: "#CCBEB1",  // Light (Tan/Neutral)
          200: "#997E67",  // Medium (Bronze)
          300: "#664930",  // Dark (Espresso)
          400: "#4a3523",  // Deepest (Dark Cocoa)
        },
        writer: {
          /* Mapping these strategically so the 'Deep Blue' areas 
             become the bold 'Espresso' color.
          */
          "deep-blue": "#664930",    // Your Darkest Color (Primary Text/Buttons)
          "sky-blue": "#997E67",     // Your Medium Bronze (Accents/Hovers)
          cornflower: "#CCBEB1",     // Your Neutral Tan (Secondary/Borders)
          lavender: "#E6D5C5",       // A slightly lighter tint for gradients
          powder: "#FFDBBB",         // Your Lightest Peach (Backgrounds)
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
          // Glow now uses the bronze tone instead of blue
          "0%": { boxShadow: "0 0 5px #997E67" },
          "100%": { boxShadow: "0 0 20px #997E67, 0 0 30px #997E67" },
        },
      },
    },
  },
  plugins: [],
};

export default config;