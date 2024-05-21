import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Animation() {
   const container = useRef();

   useGSAP(
      () => {
         gsap.to(".circle", {
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "sine.inOut",
         });
      },
      { scope: container }
   );

   return (
      <div
         className="absolute -z-20 top-0 left-0 right-0 h-dvh"
         ref={container}
      >
         <span className="circle absolute top-20 md:top-40 left-6 md:left-20 aspect-square h-20 md:h-40 rounded-full bg-rose-400/40 blur-2xl block"></span>
         <span className="circle absolute top-52 md:top-72 right-2 md:left-96 aspect-square h-32 md:h-60 rounded-full bg-amber-400/40 blur-2xl block"></span>
         <span className="circle absolute bottom-10 right-14 md:right-40 aspect-square h-12 md:h-28 rounded-full bg-emerald-400/40 blur-2xl block"></span>
         <span className="circle absolute bottom-14 md:top-10 left-2 md:right-60 aspect-square h-60 md:h-96 rounded-full bg-purple-400/40 blur-2xl block"></span>
      </div>
   );
}
