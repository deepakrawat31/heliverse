import browsers from "../assets/browsers.png";
import section from "../assets/section.png";
import page from "../assets/page.png";

export default function ProductSec() {
   return (
      <section className="flex flex-col gap-8 p-8">
         <h2 className="font-sora text-4xl font-medium max-w-2xl text-center self-center pb-12 leading-snug">
            Apply On Any Section Or Enable For Whole Page
         </h2>
         <div className="flex flex-col md:flex-row gap-4 md:h-[600px]">
            <div className="flex flex-col gap-4 p-8 bg-secondary rounded-xl ring-2 ring-slate-400/10 h-fit">
               <h2 className="font-sora text-2xl font-medium">
                  Apply On Section
               </h2>
               <p className="font-outfit text-slate-400 text-lg">
                  Apply on section is a game-changer, offering an unparalleled
                  way to manage applications directly from your website.{" "}
               </p>
               <img src={section} alt="" />
            </div>
            <div className="flex flex-col gap-4 p-8 bg-secondary rounded-xl ring-2 ring-slate-400/10 h-fit self-end">
               <h2 className="font-sora text-2xl font-medium">Apply On Page</h2>
               <p className="font-outfit text-slate-400 text-lg">
                  Take your website to new heights with Motion Art for
                  Elementor. Embrace the power of motion and animation.{" "}
               </p>
               <img src={page} alt="" />
            </div>
         </div>
         <div className="p-8 rounded-xl bg-secondary ring-2 ring-slate-400/10 flex flex-col gap-6 items-center">
            <h3 className="text-2xl font-medium font-sora">
               Supported by All Popular Browsers
            </h3>
            <p className="text-lg font-outfit text-slate-400 max-w-sm text-center">
               Rest assured, Motion Art is designed to be compatible with all
               major web browsers.
            </p>
            <img src={browsers} alt="browsers" />
         </div>
      </section>
   );
}
