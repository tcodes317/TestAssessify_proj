/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        desk: "1440px",
        iph_se: "375px",
        iph_xr: "414px",
        iph_12: "390px",
        iph_14: "430px",
        pix: "412px",
        sam_s8: "360px",
        sam_s20: "412px",
        ipad: "768px",
        ipad_air: "820px",
        ipad_pro: "1024px",
        surf_pro: "912px",
        surf_duo: "540px",
        gal: "343px",
        asus: "853px",
        sam_a: "412px",
        nest: "1024px",
      }
    },
  },
  plugins: [],
}

