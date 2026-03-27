import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          "secondary-light": "var(--color-bg-secondary-light)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        border: {
          subtle: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      spacing: {
        "section": "var(--section-padding)",
      },
      maxWidth: {
        content: "var(--content-max-width)",
        body: "var(--body-max-width)",
      },
      transitionTimingFunction: {
        smooth: "var(--ease-smooth)",
        spring: "var(--ease-spring)",
        exit: "var(--ease-exit)",
      },
      transitionDuration: {
        micro: "var(--duration-micro)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },
    },
  },
  plugins: [],
};

export default config;
