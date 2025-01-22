"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import ProductList from '@/app/ui/productList';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


type Product = {
  name: string;
  imageUrls: string[];
  id: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const controller = new AbortController();
      setLoading(true);
  
      const fetchProducts = async () => {
        try {
          const url = `/api/product${search ? `?q=${search}` : ''}`;
          console.log("Fetching from:", url); // Debug fetch URL
  
          const response = await fetch(url, { signal: controller.signal });
          if (!response?.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log("Fetched products:", data.products); // Debug fetched data
  
          setProducts(data.products);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, 300); // Debounce delay of 300ms
  
    return () => {
      clearTimeout(delayDebounceFn); // Cleanup timeout
    };
  }, [search]);


  return (
    <div className='ml-auto px-3'>
      <div className=''>
        <div className="flex justify-between px-6 py-6">
          <h4 className='text-2xl font-bold'>Products</h4>
          <form>
            <Input
            className='w-96'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log("Search term:", e.target.value); // Debug search term
              }}
              placeholder="Search Products"
            />
          </form>
          <Button>
          <Link href={"/admin/products/addproduct"}>Add Products</Link>
          </Button> 
        </div>
        <div className='flex flex-col gap-3'>
          <ProductList products={products} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default Products;