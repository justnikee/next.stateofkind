"use client"

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartDrawer from '@/components/cart/cartDrawer';
import { useState } from 'react';


const leftSideLinks = [
    { name: 'Shop', link: '/pages/skincare' },
    { name: 'Our Philosophy', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Learn', link: '#' }
  ];

  // const rightSideLinks = [
  //   { name: 'Account', link: '/account' },
  //   { name: 'Bag', link: '#' }
  // ];

const NavigationBar = () => {

  const [isCartOpen, setCartOpen] = useState(false)

const handleBagRef = (e:any) => {
  e.preventDefault();
  setCartOpen(prev => !prev)
}

const quantityInCart = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <>
     <div className='bg-white h-16 z-10 flex items-center sticky top-0'>
      <div className='sm:px-8 md:px-16 flex justify-between items-center w-full m-auto'>
      <div className='flex gap-5 w-1/3 m-auto '>
            {leftSideLinks.map((item, index) => (
                <Link className='text-lg leading-6 text-black font-[SpaceMono-reg] uppercase' key={index} href={item.link}>
                    {item.name}
                </Link>
            ))}
        </div>
        <div className='w-1/3 flex justify-center'>
            <Link className='text-3xl text-black font-[SpaceMono-bold] uppercase' href={"/"}>
            State of Kind
            </Link>
        </div>
        <div className='flex gap-5 w-1/3 justify-end'>
        <Link className="text-lg leading-6 text-black font-[SpaceMono-reg] uppercase" href="/account">
         Account
        </Link>
        <Link onClick={handleBagRef} className="text-lg leading-6 text-black font-[SpaceMono-reg] uppercase" href="#">
        Bag<span>({quantityInCart})</span>
        </Link>
        </div>
    </div>
      </div>
        
    <CartDrawer isOpen={isCartOpen} setIsOpen={setCartOpen}/>
    </>
  );
}


export default NavigationBar