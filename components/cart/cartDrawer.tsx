"use client"

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeItemFromCart } from '@/store/slices/CartSlice';
import Image from 'next/image';
import Link from 'next/link';

const CartDrawer = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const cartTotal = useSelector((state: RootState) => state.cart.totalAmount)
    const handleRemoveItem = (id: string) => {
        dispatch(removeItemFromCart(id))
    }
    
  return (
    <div
    className={`max-w-[476px] w-full fixed top-0 h-screen z-50 bg-white transition-all duration-300 ${isOpen ? 'right-0' : '-right-full'}`}>
       <div className='flex relative flex-col h-full items-start border-b border-2 border-black'>
         <div className='flex justify-between items-center p-3 w-full border-b-2 border-black'>
            <span>Bag</span>
            <span className='cursor-pointer' onClick={() => setIsOpen(false)}>Close</span>
         </div>
         <div className='p-3 w-full'>
         {cartItems.length === 0 ? (
            <p className='text-center'>No Products in the Cart!!</p>
         ) : (
            <div>
            <ul>
                      {cartItems.map((item) => (
                        <li className='mb-4' key={item.id}>
                          <div className='flex w-full gap-2 items-center'>
                            <Image className='h-36 w-36 mr-5' width={300} height={300} src={Array.isArray(item.productImage) && item.productImage.length > 0 ? item.productImage[0] : "/vercel.svg"} alt={item.name} />
                            <div className='flex gap-1 flex-col w-full'>
                            <h3 className='text-sm'>{item.name}</h3>
                            <p className='text-[12px]'>${item.price.toFixed(2)}</p>
                            <p className='text-[12px]'>Quantity: {item.quantity}</p>
                            </div>
                            <button className='text-[12px]' onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            
                          </div>
                        </li>
                      ))}
                    </ul>
            </div>
         )}
         </div>
         {
            cartItems.length === 0 ? '' : (
                        <div className='flex flex-col gap-2 fixed bottom-0 px-5 w-full max-w-[475px] mb-5'>
                          <p>Total Ammount: ${cartTotal.toFixed(2)}</p>
                        <Link onClick={() => setIsOpen(false)} className='px-6 py-3 bg-transparent border border-black uppercase text-center' href={'/pages/cart'}>View Cart</Link>
                        <Link className='px-6 py-3 bg-transparent border border-black uppercase bg-black text-fuchsia-50 text-center' href={'/pages/checkout'}>Checkout</Link>
                        </div>
            )
         }
         
       </div>
    </div>
  )
}

export default CartDrawer;