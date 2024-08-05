import { prisma } from '@/lib'
import React from 'react'
import moon from '@/public/night-icon.png'
import Image from 'next/image'
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const getProuct = async (): Promise<Product> => {
    const product = await prisma.product.findFirst();
    return product
}

export const FeaturedProduct: React.FC<Product> = async() => {
  const product = await getProuct();
  return (
    <div>
        <div className='grid grid-cols-2 max-w-screen-2xl px-8 pt-28 pb-28' key={product.id}>
                <div className='flex flex-col justify-center gap-5 max-w-[60%]'>
                <Image height={25} width={25} src={moon} alt="moon" />
                <h2 className='text-3xl'>{product.name}</h2>
                <p className=''>{product.description}</p>
                <Link href={`/product/${product.id}`} className='border-t-2 border-b-2 px-4 py-3 uppercase w-fit'>View Product</Link>
                </div>
                <div className='flex justify-center items-center h-[500px]'>
                  <Image className='h-full w-auto border border-black' height={600} width={400} src={product.imageUrl ?? '../../public/vercel.svg'} alt='product image' />
              </div>
          </div>
    </div>
  )
}
