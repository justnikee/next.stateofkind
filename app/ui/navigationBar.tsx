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
     <div className='bg-white h-16 z-10 border-b-2 border-black flex items-center sticky top-0'>
      <div className='max-w-screen-2xl sm:px-8 md:px-10 flex justify-between items-center w-full m-auto'>
      <div className='flex gap-5 w-1/3 m-auto '>
            {leftSideLinks.map((item, index) => (
                <Link className='text-[#343c46]' key={index} href={item.link}>
                    {item.name}
                </Link>
            ))}
        </div>
        <div className='w-1/3 flex justify-center'>
            <Link className='text-3xl text-[#343c46]' href={"/"}>
            State of Kind
            </Link>
        </div>
        <div className='flex gap-5 w-1/3 justify-end'>
        <Link className="text-[#343c46]" href="/account">
         Account
        </Link>
        <Link onClick={handleBagRef} className="text-[#343c46]" href="#">
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