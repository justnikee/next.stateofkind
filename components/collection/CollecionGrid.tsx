"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Products, CartItem } from '@/app/types/cart'; // Ensure this import is correct
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/slices/CartSlice'; // Ensure this import is correct

interface CollecionGridProps {
    products: Products[];
}

const CollecionGrid: React.FC<CollecionGridProps> = ({ products }) => {
    const [quantities, setQuantities] = useState<Record<string, number>>({}); // State for quantities
    const dispatch = useDispatch();

    // Initialize quantity for a specific product
    const getQuantity = (productId: string) => {
        return quantities[productId] || 1; // Default to 1 if not set
    };

    const handleAddToCart = (product: Products) => {
        const cartItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            quantity: getQuantity(product.id),
            price: product.price,
            totalPrice: product.price * getQuantity(product.id),
            productImage: product.imageUrl,
        };
        dispatch(addItemToCart(cartItem));
    };

    const handleMinus = (productId: string) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) - 1, 1) // Ensure quantity doesn't go below 1
        }));
    };

    const handlePlus = (productId: string) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1
        }));
    };

    return (
        <div>
            <h2 className='text-3xl mb-7 pt-7'>Skincare</h2>
            <span className='mb-5 block'>{products.length} Products</span>
            <div className='grid grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div key={product.id} className='border border-[#e7dae2] rounded-sm overflow-hidden'>
                        <Link className='flex flex-col' href={`/product/${product.id}`}>
                            <Image
                                className='object-cover h-96 w-full'
                                src={product.imageUrl ?? "/vercel.svg"}
                                height={300}
                                width={300}
                                alt={product.name}
                            />
                        </Link>
                        <div className='flex flex-col p-5 gap-4 justify-between bg-white'>
                            <div className='flex justify-between'>
                                <h3>{product.name}</h3>
                                <p>$ {product.price}.00</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <div className="quantity-selector w-[30%] h-fit relative">
                                    <input
                                        type="number"
                                        name="quantity"
                                        id={`ProductTileQuickAdd-Quantity-${product.id}`}
                                        value={getQuantity(product.id)}
                                        min="1"
                                        max="100"
                                        pattern="[0-9]*"
                                        readOnly
                                        className="quantity-selector__input border border-[#393939] h-10 px-3 py-2 rounded w-full text-center"
                                        style={{
                                            border: '1px solid #393939',
                                            height: '2.5rem', // Adjust height as needed
                                            padding: '0 0.75rem', // Adjust padding as needed
                                            borderRadius: '0.25rem',
                                            width: '100%', // Make sure the width is appropriate
                                            textAlign: 'center', // Horizontally center the text
                                            boxSizing: 'border-box', // Ensure padding is included in width/height
                                        }}
                                    />
                                    <button
                                        onClick={() => handleMinus(product.id)}
                                        type="button"
                                        className="flex items-center text-[#393939] h-full justify-center p-0 absolute top-1/2 transform -translate-y-1/2 w-[1.875rem] right-0"
                                    >
                                        <span className="icon icon--minus">-</span>
                                    </button>
                                    <button
                                        onClick={() => handlePlus(product.id)}
                                        type="button"
                                        className="flex items-center text-[#393939] h-full justify-center p-0 absolute top-1/2 transform -translate-y-1/2 w-[1.875rem]"
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
