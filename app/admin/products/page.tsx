"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductList from '@/app/ui/productList';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product } from '@/app/types/product';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  console.log("Current Page:", page);

  function handleLoadMore() {
    if (page < pages) {
      setPage((prevState) => prevState + 1);
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const controller = new AbortController();
      setLoading(true);

      const fetchProducts = async () => {
        try {
          const url = `/api/product?q=${search}&page=${page}`;
          console.log("Fetching from:", url);

          const response = await fetch(url, { signal: controller.signal });
          if (!response?.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data);
          console.log("Fetched products:", data.products);
          
          setProducts((prevState) => [...prevState, ...data.products]);
          setPages(data.totalPage);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, 300);

    return () => {
      clearTimeout(delayDebounceFn);
    }
  }, [search, page]);

  return (
    <div className='ml-auto px-3'>
      <div>
        <div className="flex justify-between px-6 py-6">
          <h4 className='text-2xl font-bold'>Products</h4>
          <form>
            <Input
              className='w-96'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
                setProducts([]);
                console.log("Search term:", e.target.value);
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
          <div className="flex w-full justify-center mt-6 mb-6">
            <Button
              onClick={handleLoadMore}
              disabled={loading || page >= pages}
              className="m-auto"
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
