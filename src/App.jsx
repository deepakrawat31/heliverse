import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroSec from "./components/IntroSec";
import PluginSec from "./components/PluginSec";
import ProductSec from "./components/ProductSec";
import ReviewSec from "./components/ReviewSec";
import WandSec from "./components/WandSec";

export default function App() {
   return (
      <main>
         <Header />
         <IntroSec />
         <ReviewSec />
         <WandSec />
         <ProductSec />
         <PluginSec />
         <Footer />
      </main>
   );
}
