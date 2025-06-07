/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        primary: "HakgyoansimDunggeunmisoOTF-B",
        PB: "Pretendard-Bold",
        PM: "Pretendard-Medium",
        PR: "Pretendard-Regular",
      },
    },
  },
  plugins: [],
};
