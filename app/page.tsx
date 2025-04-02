
import Banner from "./ui/Banner";
import EmpowerSkinCare from "./ui/homepage/empower-skincare";
import ProductSlider from "./ui/ProductSlider";
import HPCollections from "./ui/homepage/three-collection-section";
import FixedImageWithText from "./ui/homepage/fixed-section";
// import Preloader from "./ui/preloader";


export default async function Home() {
  return (
   <>
    {/* <Preloader/> */}
    <Banner />
    <EmpowerSkinCare/>
    <HPCollections />
    <FixedImageWithText/>
    <ProductSlider />
   </>
  );
}
