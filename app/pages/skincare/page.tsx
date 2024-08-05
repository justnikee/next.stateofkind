import React from 'react'
import CollecionGrid from '@/components/collection/CollecionGrid'
import { prisma } from '@/lib';
import { Products } from '@/app/types/cart';

async function getAllProducts() {
    const res = await prisma.product.findMany();
    return res;
}

const Page = async () => {
    const products: Products[] = await getAllProducts();
    return (
        <div className='max-w-screen-2xl px-12 m-auto bg-[#F8F1F4]'>
            <CollecionGrid products={products} />
        </div>
    );
}

export default Page;