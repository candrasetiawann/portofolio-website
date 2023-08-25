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
      "bgdark2" : "#18181b",
      "bgdark3" : "#24242b",
      "dark" : "#263856",
      "textgray": "#CBD5E1",
      "gray": "#CBD5E1",
      "amber-500" : "#f59e0b",
      "indigo-600" : "#4f46e5",
      "slate-500":"#64748b",
      "slate-100" : "#f1f5f9",
      "slate-50" : "#565656",
      "slate-200" : "#e2e8f0",
      "neutral-700" : "#404040",
      "white" : "#fff",
      "sky-600":"#0284c7",
      "blue-500" : "#1E4FD9",
      "red-500" : "#EF4444",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
