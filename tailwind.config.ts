import type { Config } from "tailwindcss";
import tailwindRtl from "tailwindcss-rtl";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "custom-blue": "#364099",
        "custom-light-blue": "#555EAE",
      },
    },
  },

  plugins: [tailwindRtl],
} satisfies Config;
