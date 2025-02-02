"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { removeItemFromCart, clearCart } from '@/store/slices/CartSlice';
import Image from 'next/image';

const CartDetails: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity)
    const cartTotalAmount = useSelector((state: RootState) => state.cart.totalAmount)

    const handleRemoveItem = (id: string) => {
        dispatch(removeItemFromCart(id))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='max-w-screen-2xl m-auto sm:px-8 flex flex-col gap-9'>
    <h2 className='text-2xl mt-5'>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <>
        <ul>
          {cartItems.map((item) => (
            <li className='mb-4' key={item.id}>
              <div className='flex w-full gap-5'>
                <Image className='h-36 w-36' width={300} height={300} src={Array.isArray(item.productImage) && item.productImage.length > 0 ? item.productImage[0] : "/vercel.svg"} alt={item.name} />
                <div className='flex justify-between w-full items-center'>
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
        <div className='flex bg-slate-200 rounded-xl p-8'>
            <div className='w-1/4 ml-auto'>
                    <h3>Total Quantity: {cartQuantity}</h3>
                    <h3>Total Amount: ${cartTotalAmount.toFixed(2)}</h3>
                    <button onClick={handleClearCart}>Clear Cart</button>
            </div>
          
        </div>
      </>
    )}
  </div>
  )
}

export default CartDetails