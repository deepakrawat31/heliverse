/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            outfit: ["Outfit", "sans-serif"],
            sora: ["Sora", "sans-serif"],
         },
         colors: {
            primary: "#12131E",
            secondary: "#0D061F",
         },
         backgroundImage: {
            "primary-gradient":
               "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
         },
      },
   },
   plugins: [],
};
