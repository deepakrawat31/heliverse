export default function PluginCard(props) {
   return (
      <div className="flex-1 flex flex-col gap-8 p-6 rounded-lg bg-secondary ring-2 ring-slate-400/10">
         <span className="flex">
            <img src={props.imgSrc} alt="card" className="aspect-square h-48" />
         </span>
         <h3 className="text-2xl font-sora font-medium">{props.heading}</h3>
         <p className="font-outfit text-lg text-slate-400">{props.para}</p>
      </div>
   );
}
