import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
      flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          400: '#e1f4f5',
          500: '#D3E8E9',
          600: '#c5dadb',
          700: '#b1c6c7',
          800: '#7d9091',
          900: '#96aaab'
        },
        greener: '#3CB043'
      },
    },
  },
  plugins: [
      flowbite.plugin()
  ],
} satisfies Config;
