"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Products, CartItem } from '@/app/types/cart';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/slices/CartSlice';

interface CollecionGridProps {
    products: Products[];
}

const CollecionGrid: React.FC<CollecionGridProps> = ({ products }) => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const dispatch = useDispatch();

    const getQuantity = (productId: string) => {
        return quantities[productId] || 1;
    };

    const handleQuantityChange = (productId: string, amount: number) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) + amount, 1)
        }));
    };

    const handleAddToCart = (product: Products) => {
        const quantity = getQuantity(product.id);
        console.log(quantity);
        const cartItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            quantity: quantity,
            price: product.price,
            totalPrice: product.price * quantity,
            productImage: product.imageUrls,
        };
        dispatch(addItemToCart(cartItem));
    };

    

    return (
        <div>
            <h2 className='text-3xl mb-7 pt-7'>Skincare</h2>
            <span className='mb-5 block'>{products.length} Products</span>
            <div className='grid grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div key={product.id} className='border border-[#e7dae2] rounded-sm overflow-hidden'>
                        <Link className='flex relative flex-col' href={`/product/${product.id}`}>
                        {product.imageUrls?.length > 0 && (
                            <Image
                                className='object-cover h-auto w-auto'
                                src={product.imageUrls[0] ?? "/vercel.svg"}
                                height={300}
                                width={300}
                                alt={product.name}
                            />
                           )
                        }
                        {product.imageUrls?.length > 0 && (
                            <Image
                                className='object-cover absolute h-auto w-auto opacity-0 hover:opacity-100 transition duration-700 ease-in-out'
                                src={product.imageUrls[1] ?? "/vercel.svg"}
                                height={300}
                                width={300}
                                alt={product.name}
                            />
                           )
                        }
                        </Link>
                        <div className='flex flex-col p-5 gap-4 justify-between bg-white'>
                            <div className='flex justify-between'>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <div className="quantity-selector w-[30%] h-fit relative">
                                    <button
                                        onClick={() => handleQuantityChange(product.id, -1)}
                                        type="button"
                                        className="flex items-center text-[#393939] h-full justify-center p-0 absolute top-1/2 transform -translate-y-1/2 w-[1.875rem] left-0"
                                    >
                                        <span className="icon icon--minus">-</span>
                                    </button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={getQuantity(product.id)}
                                        className="quantity-selector__input border border-[#393939] h-10 px-3 py-2 rounded w-full text-center"
                                        style={{
                                            border: '1px solid #393939',
                                            height: '2.5rem',
                                            padding: '0 0.75rem',
                                            borderRadius: '0.25rem',
                                            width: '100%',
                                            textAlign: 'center',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                    <button
                                        onClick={() => handleQuantityChange(product.id, 1)}
                                        type="button"
                                        className="flex items-center text-[#393939] h-full justify-center p-0 absolute top-1/2 transform -translate-y-1/2 w-[1.875rem] right-0"
                                    >
                                        <span className="icon icon--plus">+</span>
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className='flex items-center justify-center h-10 border border-[#393939] text-[#393939] px-1.5 w-[70%] rounded-sm hover:text-white hover:border-white hover:bg-[#393939] text-sm'
                                >
                                    Add to cart - ${product.price}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollecionGrid;
