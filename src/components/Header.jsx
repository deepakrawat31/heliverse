import { useState } from "react";
import logo from "../assets/logo.png";
import { useEffect } from "react";

export default function Header() {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   useEffect(() => {
      const handleResize = () => {
         setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return (
      <header className="flex items-center justify-between gap-4 px-6 lg:px-12 py-4">
         <img src={logo} alt="logo" />
         {screenWidth > 768 && (
            <button className="px-10 py-3 bg-slate-200 hover:bg-transparent focus:bg-transparent text-black hover:text-white focus:text-white hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white transition-all rounded capitalize text-lg font-outfit">
               purchase now
            </button>
         )}
      </header>
   );
}
