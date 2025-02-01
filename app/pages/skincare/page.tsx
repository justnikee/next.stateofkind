"use client"
import React, { useEffect, useState } from 'react'
import CollecionGrid from '@/components/collection/CollecionGrid'
import { Products } from '@/app/types/cart';

const Page = () => {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/admin/getproducts");
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error("Error fetching products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='max-w-screen-2xl px-12 m-auto'>
            <CollecionGrid products={products} />
        </div>
    );
}

export default Page;
