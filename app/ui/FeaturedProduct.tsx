"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moon from "@/public/night-icon.png";

type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
};

const FeaturedProduct: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/products/featured"); // ✅ Replace with your API endpoint
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>Loading product...</p>;

  return (
    <div>
      <div className="grid grid-cols-2 max-w-screen-2xl px-8 pt-28 pb-28" key={product?.id}>
        <div className="flex flex-col justify-center gap-5 max-w-[60%]">
          <Image height={25} width={25} src={moon} alt="moon" />
          <h2 className="text-3xl">{product?.name}</h2>
          <p>{product?.description}</p>
          <Link href={`/product/${product?.id}`} className="border-t-2 border-b-2 px-4 py-3 uppercase w-fit">
            View Product
          </Link>
        </div>

        <div className="flex justify-center items-center h-[500px]">
          {product?.imageUrls?.length ? (
            product.imageUrls.map((url, index) => (
              <Image
                key={index}
                className="h-full w-auto border border-black"
                height={600}
                width={400}
                src={url}
                alt={`Product image ${index + 1}`}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
