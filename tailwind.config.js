module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      's0':'257px',
      's1':'323px',
      'ss':'360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#2A4953",
        secondary:"#F5F5F5",
        brown_l: "#C8B691",
        brown_d: "#563524",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        body: ["Poppins", "Open Sans", "Roboto"]
      },
      backgroundImage: {
        'agent0': "url('/src/pages/Home/Components/agent/assets/bg.png')",
        'agent1': "url('/src/pages/Home/Components/agent/assets/rect.png')",
        'checkout': "url('/src/pages/Home/Components/checkout/assets/bg.png')"
       }
    },
  },
  plugins: [],
};