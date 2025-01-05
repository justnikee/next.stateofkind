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
                          <div className='flex w-full gap-5'>
                            <Image className='h-36 w-36' width={300} height={300} src={item.productImage} alt={item.name} />
                            <div className='flex flex-col justify-between w-full items-center'>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Total: ${item.totalPrice.toFixed(2)}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
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