import React from 'react'
import Image from 'next/image'
// import bannerImage from '@/public/Hero Images/hero.webp'
import Link from 'next/link'

const bannerImage = 'https://res.cloudinary.com/dgywanyap/image/upload/v1736448623/WEB_HALO_2024_December_Week_51_Hero_Banner_Desktop_01-copy_e97axa.jpg'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='h-[800px] w-auto -mt-[93px] relative -z-0 overflow-hidden flex items-end'>
        <div className='flex gap-5 sm:px-8 h-fit w-full justify-between items-center z-10 relative mb-4'>
           <h2 className='text-[#fff] text-[40px] leading-[50px] uppercase flex-1'>The Sale.</h2>
           <p className='text-white text-lg flex-1 text-center'>SAVE UP TO 50% ON EVERYTHING</p>
           <div className='flex-1 flex justify-end items-center'>
           <Link className='bg-white px-5 py-3 text-sm uppercase text-black w-fit rounded-full' href='/pages/skincare'>Shop Now</Link>
           </div>
        </div>
        <Image className='absolute top-0 left-0 h-full w-full object-cover' width={1920} height={1080} src={bannerImage} alt='banner Image' />
    </div>
  )
}

export default Banner