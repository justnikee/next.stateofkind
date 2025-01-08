
import Banner from "./ui/Banner";
import {FeaturedProduct} from "./ui/FeaturedProduct";
import ProductSlider from "./ui/ProductSlider";

import { prisma } from "@/lib";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
   <>
    <Banner />
    {/* <FeaturedProduct/> */}
    <ProductSlider products={products}/>
   </>
  );
}
