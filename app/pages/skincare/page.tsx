"use client";
import React, { Suspense, useEffect, useState } from "react";
import CollecionGrid from "@/components/collection/CollecionGrid";
import { Products } from "@/app/types/cart";
import { Button } from "@/components/ui/button";
import Loading from "./loading";

const Page = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true)
      try {
        const res = await fetch(`/api/product?page=${currentPage}`);
        if (res.ok) {
          const data = await res.json();
  
          setProducts(prev => (currentPage === 1 ? data.products : [...prev, ...data.products]));
  
          setTotalPages(data.totalPage); 
        } else {
          console.error("Error fetching products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }finally{
        setLoading(false)
      }
    };
  
    fetchProducts();
  }, [currentPage]);
   

  function handlePageLoad() {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1); 
    }
  }

  return (
    <Suspense fallback={"loading ..."}>
    <div className="max-w-screen-2xl px-12 m-auto">
        {
            loading ? (<>
    <div id="webcrumbs"> 
            	<div className="w-[1200px]">
    	    <h2 className="text-3xl mb-7 pt-7">Shop All</h2>
    	    <span className="mb-5 block animate-pulse bg-gray-200 h-6 w-32 rounded" />
    	    <div className="grid grid-cols-4 gap-6">
    	        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    	            <div key={item} className="border border-[#e7dae2] rounded-sm overflow-hidden">
    	                <div className="relative">
    	                    <div className="bg-gray-200 h-[300px] w-[300px] animate-pulse" />
    	                </div>
    	                <div className="flex flex-col p-5 gap-4 justify-between bg-white">
    	                    <div className="flex justify-between">
    	                        <div className="h-6 bg-gray-200 w-24 animate-pulse rounded" />
    	                        <div className="h-6 bg-gray-200 w-16 animate-pulse rounded" />
    	                    </div>
    	                    <div className="flex justify-between gap-5">
    	                        <div className="w-[30%] h-10 bg-gray-200 animate-pulse rounded" />
    	                        <div className="w-[70%] h-10 bg-gray-200 animate-pulse rounded" />
    	                    </div>
    	                </div>
    	            </div>
    	        ))}
    	    </div>
    	</div> 
            </div>
            </>) : (
                <CollecionGrid products={products} />
            )
        }
      
      {currentPage < totalPages && (
        <div className="flex justify-center pt-16">
          <Button className="m-auto" onClick={handlePageLoad}>
            Load More
          </Button>
        </div>
      )}
    </div>
    </Suspense>
  );
};

export default Page;
