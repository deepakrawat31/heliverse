import stars from "../assets/stars.png";

export default function Review(props) {
   return (
      <span className="flex items-center gap-2">
         <img
            src={props.imgSrc}
            alt="some logo"
            className="aspect-square h-20"
         />
         <span className="flex flex-col gap-4">
            <img src={stars} alt="stars" />
            <span className="text-slate-400 font-sora font-medium">
               <strong>4.5</strong> Score, <strong>9</strong> Reviews
            </span>
         </span>
      </span>
   );
}
