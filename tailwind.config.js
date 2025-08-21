/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        primary: "Ownglyph_PDH-Rg",
        PB: "Pretendard-Bold",
        PM: "Pretendard-Medium",
        PR: "Pretendard-Regular",
        DNF: "DNFBitBitv2"
      },
      colors: {
        primary: "#367B4D",
        text100: "#121212", // 100%
        text80: "#121212CC", // 80%
        text60: "#12121299", // 60%
        text40: "#12121266", // 40%
        text20: "#12121233", // 20%
        text4: "#1212120A", // 4%
      },
    },
  },
  plugins: [],
};
