module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          color: "#1E354D",
          activeColor: "#031930",
          shadowColor: "#BFCBDA",
        },
        secondary: {
          color: "#6C8199",
          activeColor: "#425A74",
          shadowColor: "#E0E8F1",
        },
        brand: {
          color: "#0F7AFF",
          activeColor: "#005FD3",
          shadowColor: "#B9D8FF",
        },
        danger: {
          color: "#DD2134",
          activeColor: "#C41C2C",
          shadowColor: "#FFB7BE",
        },
        success: {
          color: "#28A745",
          activeColor: "#148B30",
          shadowColor: "#B0E9BD",
        },
      },
    },
  },
  plugins: [],
}
