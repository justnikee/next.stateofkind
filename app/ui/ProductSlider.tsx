"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../types/cart";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/admin/getproducts");
        if (!res.ok) {
          console.error("Error fetching products");
          return;
        }
        const data = await res.json();
        
        // Ensure that data is an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []); // Empty dependency array to only run once on mount

  return (
    <div className="max-w-screen-xl px-12 py-12 m-auto">
      <div className="mb-10">
        <h2 className="text-center text-3xl">Popular on our Store.</h2>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            {products.length > 0 ? (
              products.map((product, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <div className="">
                    <Link className="flex flex-col gap-5" href={`/product/${product.id}`}>
                      {product.imageUrls.length > 0 ? (
                        <Image
                          className="rounded-3xl object-cover h-60 w-60"
                          src={product.imageUrls[0]}
                          height={300}
                          width={300}
                          alt={product.name}
                        />
                      ) : (
                        <p>No Image Available</p>
                      )}
                      <h3>{product.name}</h3>
                    </Link>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p>No products available</p>
            )}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSlider;
