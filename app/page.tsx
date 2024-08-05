
import Banner from "./ui/Banner";
import Cart from "./ui/Cart";
import {FeaturedProduct} from "./ui/FeaturedProduct";
import ProductSlider from "./ui/ProductSlider";


export default   function Home() {

  return (
   <>
    <Banner />
    {/* <FeaturedProduct/> */}
    <ProductSlider/>
    <Cart />
   </>
  );
}
