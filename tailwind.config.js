/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E8432D",

        bg: "#0c0c0e",
        bg2: "#141416",
        bg3: "#1c1c1f",

        border: "rgba(255,255,255,0.07)",
        borderHover: "rgba(255,255,255,0.15)",

        textMain: "#f0ede8",
        muted: "#7a7870",
        muted2: "#5a5855",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },

      borderRadius: {
        xl2: "16px", // for your modal/cards
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
