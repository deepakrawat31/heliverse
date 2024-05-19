import wand from "../assets/wand.png";

export default function WandSec() {
   return (
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-12 lg:p-24">
         <div className="flex flex-col gap-8 max-w-3xl text-center md:text-start">
            <h2 className="font-sora text-4xl leading-snug font-medium">
               Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="font-outfit text-slate-400 leading-snug">
               Motion Art for Elementor is a groundbreaking plugin that empowers
               you to effortlessly infuse your website with visually stunning
               motion art elements.
            </p>
            <a
               href="/"
               className="flex items-center gap-4 font-sora capitalize text-lg md:text-xl bg-primary-gradient px-4 md:px-8 py-4 w-fit rounded-2xl"
            >
               <span>purchase from envato</span>
               <span>&#x2192;</span>
            </a>
         </div>
         <div className="h-64 aspect-square">
            <img src={wand} alt="wand" />
         </div>
      </section>
   );
}
