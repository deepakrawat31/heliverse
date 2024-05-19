export default function IntroSec() {
   return (
      <section className="flex flex-col md:flex-row items-center text-center md:text-start px-6 lg:px-12 py-24">
         <div className="flex flex-col gap-2 text-xl font-medium font-sora max-w-36 p-4">
            <small className="bg-primary-gradient text-transparent bg-clip-text">
               Transform Your Website
            </small>
            <small>With Motion Art Effect</small>
         </div>
         <div className="flex-1 flex justify-center p-4">
            <div className="max-w-2xl tracking-wide flex flex-col gap-4">
               <h1 className="font-sora text-4xl lg:text-6xl lg:leading-snug font-medium flex flex-col">
                  <span>Attract Your Visitors Attention With Colorful</span>
                  <span className="bg-primary-gradient text-transparent bg-clip-text">
                     Motion Art Effect
                  </span>
               </h1>
               <p className="text-lg text-slate-400 font-outfit">
                  Unleash the power of creativity with Motion Art for Elementor
                  - your ultimate solution for seamlessly integrating
                  captivating animations into your website.
               </p>
            </div>
         </div>
      </section>
   );
}
