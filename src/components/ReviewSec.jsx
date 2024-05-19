import g2 from "../assets/g2.png";
import leaf from "../assets/leaf.png";
import w from "../assets/w.png";
import Review from "./Review";

export default function ReviewSec() {
   return (
      <section className="flex flex-col items-center gap-12 p-4">
         <h2 className="text-2xl font-outfit text-center">
            Trusted by thousands of users around the world
         </h2>
         <div className="flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-4 w-full">
            <Review imgSrc={g2} />
            <Review imgSrc={leaf} />
            <Review imgSrc={w} />
         </div>
      </section>
   );
}
