import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hero_name: "#22177A",
        hero_skill: "#605EA1",
        button_color: "#091057",
        skill_bg: "#091057",
      },
    },
  },
  plugins: [],
} satisfies Config;
