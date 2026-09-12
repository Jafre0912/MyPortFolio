/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B2430",
          900: "#0B1220",
          800: "#121A28",
          700: "#1B2430",
        },
        paper: "#F6F7F9",
        slate: {
          muted: "#6B7684",
        },
        signal: {
          DEFAULT: "#4C6FFF",
          soft: "#EEF1FF",
        },
        line: "#E4E7EC",
        lineDark: "#232E3F",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
