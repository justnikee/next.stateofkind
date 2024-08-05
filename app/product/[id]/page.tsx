import { prisma } from '@/lib'
import ProductDetails from '@/components/product/ProductDetails';


async function getProduct(id: string): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
  });
} 

const Page = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return  <ProductDetails product={product} />
};

export default Page;