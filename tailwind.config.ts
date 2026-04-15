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
        "on-secondary-fixed-variant": "#6b3741",
        "surface-bright": "#fff8f8",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#e3bdc7",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#8d004e",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "surface": "#fff8f8",
        "on-secondary-container": "#7b444e",
        "primary-container": "#e10080",
        "tertiary-fixed-dim": "#ffb3b5",
        "outline": "#8f6e78",
        "on-surface-variant": "#5b3f48",
        "primary": "#b40065",
        "surface-tint": "#b90068",
        "inverse-primary": "#ffb0ca",
        "primary-fixed": "#ffd9e3",
        "secondary-fixed": "#ffd9de",
        "primary-fixed-dim": "#ffb0ca",
        "error": "#ba1a1a",
        "background": "#fff8f8",
        "inverse-on-surface": "#fcedf2",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#362e32",
        "on-surface": "#211a1d",
        "on-primary-fixed": "#3e001f",
        "on-primary-container": "#fffbff",
        "secondary": "#874e58",
        "on-secondary-fixed": "#360c17",
        "on-tertiary-fixed-variant": "#8e0f28",
        "on-background": "#211a1d",
        "on-tertiary-container": "#fffbff",
        "tertiary-fixed": "#ffdada",
        "on-error-container": "#93000a",
        "surface-container-high": "#f3e4e9",
        "secondary-fixed-dim": "#fcb3be",
        "surface-dim": "#e5d6db",
        "surface-container": "#f9eaef",
        "on-tertiary-fixed": "#40000b",
        "surface-container-low": "#fff0f5",
        "secondary-container": "#ffb6c1",
        "tertiary": "#ac293b",
        "tertiary-container": "#ce4252",
        "surface-container-highest": "#eddfe4",
        "on-primary": "#ffffff",
        "surface-variant": "#eddfe4"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Be Vietnam Pro", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
