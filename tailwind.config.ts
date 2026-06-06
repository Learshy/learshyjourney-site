import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060a",
        panel: "#0d1018",
        line: "rgba(255,255,255,0.1)",
        cyan: "#38bdf8",
        violet: "#8b5cf6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(56, 189, 248, 0.22)",
        violet: "0 0 52px rgba(139, 92, 246, 0.18)"
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.22), transparent 32%)",
        "radial-violet": "radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.2), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
