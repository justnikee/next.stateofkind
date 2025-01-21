"use client"


import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/slices/CartSlice';
import { Product, CartItem } from '@/app/types/cart';
import React from 'react';
import { Toaster } from 'react-hot-toast';



interface ProductDetailsProps {
    product: Product;
  }

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const dispatch = useDispatch();

    const handleAddToCart = () => {
      const cartItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        totalPrice: product.price,
        productImage: product.imageUrls,
      };
      dispatch(addItemToCart(cartItem));
    }

  return (
    <div>
      <Toaster/>
      <div className='grid gap-10 m-auto grid-cols-2 max-w-full px-8 pl-0'>
        <div className='grid grid-cols-2 image-grid'>
           {product?.imageUrls?.length ? (
                      product.imageUrls.map((url, index) => (
                        <Image
                          key={index}
                          className="h-fit w-full object-contain"
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
        <div className='h-full relative flex justify-center pt-10'>
        <div className='flex flex-col pt-20 max-w-[487px] h-fit sticky top-5'>
          <h2 className='text-lg uppercase'>{product.name}</h2>
          <h3>$<span className='font-bold'>{product.price}</span></h3>
          <Link onClick={handleAddToCart} className='mt-7 border-t-2 border-b-2 px-4 py-3 uppercase w-full bg-black text-center text-white' href=''>
            Add To Cart
          </Link>
          <p className='mt-4'>{product.description}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;