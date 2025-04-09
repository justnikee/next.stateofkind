
// import Banner from "./ui/Banner";
import EmpowerSkinCare from "./ui/homepage/empower-skincare";
import ProductSlider from "./ui/ProductSlider";
import HPCollections from "./ui/homepage/three-collection-section";
import FixedImageWithText from "./ui/homepage/fixed-section";
import Marquee from "./ui/homepage/marquee";
import HeroVideo from "./ui/homepage/new-homepage-sections/hero";
import ParallaxSection from "./ui/homepage/new-homepage-sections/parallax-section";
// import Preloader from "./ui/preloader";


export default async function Home() {
  return (
   <>
    {/* <Preloader/> */}
    {/* <Banner /> */}
    <HeroVideo/>
    <ParallaxSection />
    {/* <EmpowerSkinCare/>
    <HPCollections />
    <FixedImageWithText/>
    <Marquee/>
    <ProductSlider /> */}
   </>
  );
}
