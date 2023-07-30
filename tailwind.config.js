/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bgdark": "#1E293B",
      "textgray": "#CBD5E1",
      "gray": "#CBD5E1",
      "amber-500" : "#f59e0b",
      "slate-500":"#64748b",
      "slate-100" : "#f1f5f9",
      "neutral-700" : "#404040",
      "white" : "#fff",
      "sky-600":"#0284c7"
    },
    extend: {},
  },
  plugins: [],
};
