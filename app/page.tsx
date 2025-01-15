
import Banner from "./ui/Banner";
import ProductSlider from "./ui/ProductSlider";
import { prisma } from "@/lib";
import Preloader from "./ui/preloader";


export default async function Home() {
  const products = await prisma.product.findMany();
  return (
   <>
   <Preloader/>
    <Banner />
    {/* <FeaturedProduct/> */}
    <ProductSlider products={products}/>
   
   </>
  );
}
