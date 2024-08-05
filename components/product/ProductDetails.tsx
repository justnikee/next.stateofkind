"use client"


import Image from 'next/image';
import Link from 'next/link';
import moon from '@/public/night-icon.png'
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
        productImage: product.imageUrl,
      };
      dispatch(addItemToCart(cartItem));
    }

  return (
    <div>
      <Toaster/>
      <div className='grid grid-cols-2 max-w-screen-2xl px-8'>
        <div>
          <Image
            height={600}
            width={400}
            src={product.imageUrl ?? '../../../public/vercel.svg'}
            alt={product.name ?? 'Product image'}
          />
        </div>
        <div className='flex flex-col justify-center gap-5 max-w-[60%]'>
          <Image height={25} width={25} src={moon} alt="moon" />
          <h2 className='text-3xl'>{product.name}</h2>
          <h3>${product.price}</h3>
          <Link onClick={handleAddToCart} className='border-t-2 border-b-2 px-4 py-3 uppercase w-fit' href=''>
            Add To Bag
          </Link>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;