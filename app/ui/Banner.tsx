import React from 'react'
import Image from 'next/image'
import bannerImage from '@/public/Hero Images/hero.webp'
import Link from 'next/link'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='h-[600px] w-auto mt-0 ml-11 mr-11 relative -z-0 rounded-3xl overflow-hidden'>
        <div className='flex flex-col gap-5 max-w-screen-2xl sm:px-8 h-full justify-center z-10 relative'>
           <h2 className='text-[#343c46] text-[80px] leading-[90px]'>Skincare — <br/>Simplified.</h2>
           <p className='text-[#343c46]'>
            Multi-benefit, organic skincare. Made in California.<br/>
            Gentler to skin and our planet — the antidote to <br/> lengthy skincare routines.
           </p>
           <Link className='bg-slate-800 border-1 border-black px-5 py-3 mt-3 text-sm uppercase text-yellow-100 w-fit' href='/pages/skincare'>Shop Now</Link>
        </div>
        <Image className='absolute top-0 left-0 h-full w-full' src={bannerImage} alt='banner Image' />
    </div>
  )
}

export default Banner