import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#ffffff",
        muted: "#6b7280",
        line: "#e5e7eb",
        accent: "#2563eb",
        panel: "#f8f8f7"
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "sans-serif"
        ],
        heading: [
          "Lato",
          "Helvetica Neue",
          "Helvetica",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol"
        ]
      },
      maxWidth: {
        content: "780px"
      }
    }
  },
  plugins: []
};

export default config;
