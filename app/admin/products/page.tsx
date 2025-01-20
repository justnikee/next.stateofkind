"use client"

import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductList from '@/app/ui/productList';


type Product = {
  name: string;
  imageUrls: string[];
  id: string;
}

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product", { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      
        const data = await response.json(); // Parse the JSON response
        console.log(data.products); // Log the data to see the structure

        setProducts(prevProducts => {
          // Compare new data with current state before updating
          if (JSON.stringify(prevProducts) !== JSON.stringify(data.products)) {
            return data.products;
          }
          return prevProducts;
        });
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      controller.abort(); // Cleanup to avoid memory leaks
    };
  }, []);

  return (
    <div className='ml-auto px-3'>
      <div className=''>
        <div className="flex justify-between px-6 py-6">
          <h4 className='text-2xl font-bold'>Products</h4>
          <Link href={"/admin/products/addproduct"}>Add Products</Link>
        </div>
        <div className='flex flex-col gap-3'>
          <ProductList products={products} loading={loading}/>
        </div>
      </div>
    </div>
  )
}


export default Products;