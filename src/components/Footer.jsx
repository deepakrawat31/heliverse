export default function Footer() {
   return (
      <footer className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 p-4 bg-primary-gradient font-outfit">
         <p className="text-sm md:text-base">
            © 2023 Copywrite. All rights reserved by QodeMatrix
         </p>
         <nav className="flex items-center gap-8 text-sm md:text-base">
            <a
               href="https://qodematrix.com/docs/motion-art-for-elementor/"
               target="_blank"
               className="capitalize text-slate-400 hover:text-white focus:text-white transition-colors"
            >
               documentation
            </a>
            <a
               href="https://support.qodematrix.com"
               target="_blank"
               className="capitalize text-slate-400 hover:text-white focus:text-white transition-colors"
            >
               support
            </a>
         </nav>
      </footer>
   );
}
