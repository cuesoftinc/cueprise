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
        aboutPageHeroImgVision: "url('./assets/imgs/about-hero-vision.jpg')",
        "partnersPage-heroImg": "url('./assets/imgs/partners-page-hero.svg')",
        footerBgLine: "url('./assets/vectors/footer-line-vector.svg')"
      },
      colors: {
        bgPrimary: '#B888F1',
        textPrimary: '#475569'
      }
    },
    fontFamily: {
      inter: "Inter"
    }
  },
  plugins: []
};
