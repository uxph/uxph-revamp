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
      fontSize: {
        body: "0.875rem",
        h1: "3rem",
        h2: "2rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1rem",
      },
    },
  },
  plugins: [],
};
