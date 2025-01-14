"use client"

import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Products = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse the JSON response
      console.log(data.products); // Log the data to see the structure
      setProducts(data.products)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div style={{width: "calc(100% - 240px)"}} className='ml-auto '>
     <div className=''>
      <div className="flex justify-between px-6 py-6">
        <h4 className='text-2xl font-bold'>Products</h4>
        <Link href={"/admin/products/addproduct"}>Add Products</Link>
      </div>
      <div className='flex flex-col gap-3'>
        {
          products.map((product, index) => (
            <div key={index} className='flex gap-3 items-center'>
              <Image className='h-20 w-20 object-cover' src={product.imageUrls[0]} width={500} height={500} alt="" />
              <h3>{product.name}</h3>
              <Link className='flex justify-self-end' href={`/product/${product.id}`}>Preview</Link>
            </div>
          ))
        }
      </div>
     </div>
    </div>
  )
}


export default Products;