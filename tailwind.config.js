/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 3s",
        textAds: 'textAds 5s ease infinite',

      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(60px, -80px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },  
        textAds: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        }, 
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
