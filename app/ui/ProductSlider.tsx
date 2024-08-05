import { prisma } from '@/lib'
import React from 'react'
import Image from 'next/image';
import { Product } from '../types/cart';
import Link from 'next/link';

import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from '@/components/ui/carousel';


const getProductsForSlider = async():Promise<Product[]> => {
    const products = await prisma.product.findMany();
    return products
}

const ProductSlider:React.FC<Product[]> = async () => {

    const products = await getProductsForSlider();

  return (
    <div className='max-w-screen-xl px-12 py-12 m-auto'>
        <div className='mb-10'>
            <h2 className='text-center text-3xl'>Popular on our Store.</h2>
        </div>
        <div className=''>
            <Carousel>
                <CarouselContent>
                {
                products.map((product, index) => (
                    <CarouselItem key={index} className='basis-1/5'>
                    <div className=''>
                        <Link className='flex flex-col gap-5' href={`/product/${product.id}`}>
                           <Image className='rounded-3xl object-cover h-60 w-60' src={product.imageUrl ?? "../../public/vercel.svg"} height={300} width={300} alt={product.name} />
                           <h3>{product.name}</h3>
                           </Link>
                    </div>
                    </CarouselItem>
                ))
             }
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious/>
            </Carousel>

        </div>
    </div>
  )
}

export default ProductSlider