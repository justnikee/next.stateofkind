"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../types/cart";
import Link from "next/link";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setProducts } from "@/store/slices/ProductsSlice";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductSlider = () => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector((state: RootState) => state.product.list)
  // const [products, setProducts] = useState<Product[]>([]);

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
          dispatch(setProducts(data))
          // setProducts(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [dispatch]); // Empty dependency array to only run once on mount

  return (
<div className="max-w-screen-xl px-12 py-12 m-auto">
      <h2 className="text-center text-3xl mb-10">Popular on our Store.</h2>
      <div>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <Carousel>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="basis-1/5">
                  <Link href={`/product/${product.id}`} className="flex flex-col gap-5">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
