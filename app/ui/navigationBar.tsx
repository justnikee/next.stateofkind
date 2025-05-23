"use client"

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartDrawer from '@/components/cart/cartDrawer';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const logo = '/homepage/State-kind.svg'


const leftSideLinks = [
    { name: 'Shop', link: '/pages/skincare' },
    { name: 'Our Philosophy', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Learn', link: '#' }
  ];

const NavigationBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isCartOpen, setCartOpen] = useState(false)

const handleBagRef = (e:any) => {
  e.preventDefault();
  setCartOpen(prev => !prev)
}

const quantityInCart = useSelector((state: RootState) => state.cart?.totalQuantity);

  return (
    <>
     <div className={`${isHomePage ? "bg-transparent" : "bg-black"} h-16 z-10 flex items-center sticky top-0`}>
      <div className='sm:px-8 md:px-16 flex justify-between items-center w-full m-auto'>
      <div className='w-1/3 flex justify-start'>
            <Link className='text-3xl text-white font-[SpaceMono-bold] uppercase' href={"/"}>
            <Image width={136} height={28} src={logo} alt='logo'/>
            </Link>
        </div>
      <div className='flex gap-12 w-1/3 m-auto justify-center'>
            {leftSideLinks.map((item, index) => (
                <Link className='text-sm font-bold text-white font-[PPMori] uppercase' key={index} href={item.link}>
                    {item.name}
                </Link>
            ))}
        </div>
        <div className='flex gap-5 w-1/3 justify-end'>
        <Link className="text-sm text-white font-[PPMori] uppercase" href="/account">
         Account
        </Link>
        <Link onClick={handleBagRef} className="text-sm text-white font-[PPMori] uppercase" href="#">
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