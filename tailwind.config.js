/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // poppins: "'', sans-serif",
        "merchant": "merchant",
        "bai-jamjuree": 'Bai Jamjuree'
      },
      colors: {
        "orange": "#FF5C00",
      },
      screens: {
        "pad": "1080px",
        "desktop": "1920px"
      }
    },
  },
  plugins: [],
};
