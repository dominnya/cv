import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundPosition: {
      "right-6": "right 1.5rem center",
    },
    extend: {
      screens: {
        short: { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [],
};
export default config;
