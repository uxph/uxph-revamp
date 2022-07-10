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
          color: "#15b0de",
          activeColor: "#007bbf",
          shadowColor: "#b5ebfc",
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
        adaptive: {
          dark: {
            1: "#10171D",
            2: "#21272D",
            3: "#182336",
          },
          white: {
            1: "#fafcff",
            2: "#f6f9fc",
            3: "#e3e9f0",
            4: "#d1d5db",
          },
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
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
