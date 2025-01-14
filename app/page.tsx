
import Banner from "./ui/Banner";
import AnnouncementBar from "./ui/announcementbar";
import NavigationBar from "./ui/navigationBar";
import ProductSlider from "./ui/ProductSlider";

import { prisma } from "@/lib";
import Footer from "./ui/footer";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
   <>
    <AnnouncementBar/>
    <NavigationBar />
    <Banner />
    {/* <FeaturedProduct/> */}
    <ProductSlider products={products}/>
    <Footer/>
   </>
  );
}
