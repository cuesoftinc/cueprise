/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: "true"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      backgroundImage: {
        heroEllipseLeft:
          "url('./assets/others/hero-ellipse-background-left.svg')",
        heroEllipseRight:
          "url('./assets/others/hero-ellipse-background-right.svg')",
        screenSectionBg:
          "url('./assets/others/screens-section-background.svg')",
        footerBgLine: "url('./assets/vectors/footer-line-vector.svg')",
        pricingWavyBg: "url('./assets/others/wavy-bg.svg')"
      },
      colors: {
        bgPrimary: "#B888F1",
        textPrimary: "#475569",
        textHeader: "#64748B"
      }
    },
    fontFamily: {
      inter: "Inter"
    }
  },
  plugins: []
};
