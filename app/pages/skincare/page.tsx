import React from 'react'
import CollecionGrid from '@/components/collection/CollecionGrid'
import { prisma } from '@/lib';
import { Products } from '@/app/types/cart';

async function getAllProducts() {

    const res = await prisma.product.findMany();
    console.log(res)
    return res;
}

const Page = async () => {
    const products: Products[] = await getAllProducts();
    return (
        <div className='max-w-screen-2xl px-12 m-auto'>
            <CollecionGrid products={products} />
        </div>
    );
}

export default Page;