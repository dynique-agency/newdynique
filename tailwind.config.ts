import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          950: "#050505",
          900: "#070707",
          850: "#080808",
          800: "#0a0a0a",
        },
        accent: {
          amber: "#fbbf24",
          indigo: "#6366f1",
          rose: "#f43f5e",
          teal: "#14b8a6",
          tan: "#d4a574",
          violet: "#a78bfa",
          mint: "#34d399",
          gold: "#eab308",
        },
      },
      fontFamily: {
        sans: ["var(--font-display)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;




