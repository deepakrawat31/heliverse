import bolt from "../assets/bolt.png";
import thumbsUp from "../assets/thumbsup.png";
import moon from "../assets/moon.png";
import PluginCard from "./PluginCard";

export default function PluginSec() {
   return (
      <section className="flex flex-col gap-8 items-center px-12 py-32">
         <h2 className="font-sora max-w-2xl text-4xl font-medium text-center">
            An All-Round Plugin With Powerful Features
         </h2>
         <p className="font-outfit text-slate-400 textlg max-w-xl text-center">
            Whether you{"'"}re a seasoned web designer or just starting out,
            Motion Art for Elementor seamlessly integrates with the Elementor
            platform, providing you with a seamless and intuitive experience.
         </p>
         <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <PluginCard
               imgSrc={bolt}
               heading={"Light Weight"}
               para={"Motion Art for Elementor is designed to be lightweight."}
            />
            <PluginCard
               imgSrc={thumbsUp}
               heading={"100% Responsive"}
               para={
                  "Create a consistent visual experience across all devices."
               }
            />
            <PluginCard
               imgSrc={moon}
               heading={"User Friendly Interface"}
               para={
                  "Ensure a smooth experience for both applicants and administrators."
               }
            />
         </div>
      </section>
   );
}
