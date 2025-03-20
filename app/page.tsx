
import Banner from "./ui/Banner";
import ProductSlider from "./ui/ProductSlider";
// import Preloader from "./ui/preloader";


export default async function Home() {
  return (
   <>
    {/* <Preloader/> */}
    <Banner />
    <ProductSlider />
   </>
  );
}
