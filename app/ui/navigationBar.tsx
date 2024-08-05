"use client"


import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
type Props = {}

const leftSideLinks = [
    { name: 'Shop', link: '/pages/skincare' },
    { name: 'Our Philosophy', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Learn', link: '#' }
  ];

  const rightSideLinks = [
    { name: 'Account', link: '/account' },
    { name: 'Bag', link: '/pages/cart' }
  ];

const NavigationBar = (props: Props) => {

const quantityInCart = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <>
     <div className='flex justify-between items-center max-w-screen-2xl sm:px-8 md:px-10 bg-transparent h-16 z-10 relative'>
        <div className='flex gap-5 w-1/3'>
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
        {rightSideLinks.map((item, index) => (
                <Link className='text-[#343c46]' key={index} href={item.link}>
                    {item.name} {index === 1 ? (
                      <span>({quantityInCart})</span>
                    ) : (
                      null
                    )}
                </Link>
            ))}
        </div>
    </div>
    </>
   
  )
}


export default NavigationBar