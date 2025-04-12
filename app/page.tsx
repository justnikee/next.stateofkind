
// import Banner from "./ui/Banner";
import EmpowerSkinCare from "./ui/homepage/empower-skincare";
import ProductSlider from "./ui/ProductSlider";
import HPCollections from "./ui/homepage/three-collection-section";
import FixedImageWithText from "./ui/homepage/fixed-section";
import Marquee from "./ui/homepage/marquee";
import HeroVideo from "./ui/homepage/new-homepage-sections/hero";
import ParallaxSection from "./ui/homepage/new-homepage-sections/parallax-section";
// import Preloader from "./ui/preloader";
import ProductsShowcase from "./ui/homepage/new-homepage-sections/products-showcase";

import { ReactLenis, useLenis } from 'lenis/react'




export default async function Home() {

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })
  return (
    <ReactLenis root>
       <>
    {/* <Preloader/> */}
    {/* <Banner /> */}
    <HeroVideo/>
    <ParallaxSection />
    <ProductsShowcase />
    {/* <EmpowerSkinCare/>
    <HPCollections />
    <FixedImageWithText/>
    <Marquee/>
    <ProductSlider /> */}
   </>
</ReactLenis>
  );
}
