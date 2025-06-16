module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'home-img':"url('/images/home-img.jpg')",
      },
      keyframes:{
        "appear":{
          from:{
            opacity:"0",
          },
          to:{
            opacity:"1",
          }
        },
        "slide":{
          from:{
            "transform":"translateX(100%)",
          },
          to:{
            "transform":"tarnslateX(0%)",
          },
        }
      },
      animation:{
        "appear":"appear 1s ease-in-out",
        "slide":"slide 750ms ease-in-out",
      },
    },
  },
  plugins: [],
}
