/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pm: {
          petrol: "#0F3B43",
          aqua:   "#4AC6B7",
          gray:   "#F5F6F7",
          white:  "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        body:    ["var(--font-open-sans)"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(15,59,67,.08)",
      },
    },
  },
  plugins: [],
};