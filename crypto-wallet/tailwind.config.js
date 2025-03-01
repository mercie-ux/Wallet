/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '390px',
        'md': '480px',
        'lg': '768px',
        'xl': '1024px',
      },
      colors: {
        "wallet-blue": {
          DEFAULT: "#2563EB", // Primary blue(base)
          hover: "#1D4ED8", // Hover State
          active: "#1E40AF", // Active/pressed state
          light: "#DBEAFE", // light blue for accents/backgrounds
        },
      },
    },
  },
  plugins: [],
}

