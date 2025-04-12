"use client"

import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const leftImage = '/homepage/Parallax/explore-1.jpg'

gsap.registerPlugin(ScrollTrigger);

const ProductsShowcase = () => {



  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.parallax_image',
        {
          yPercent: -15,
        },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-scope',
            start: 'top 100%',
            end: 'bottom top',
            scrub: 0.5,
          },
        }
      );
    });
  
    return () => ctx.revert();
  }, { scope: '.section-scope' });

      


  return (
    <section className='section h-screen section-scope overflow-hidden'>
        <div className='flex h-full'>
           <div className='big_image flex-1  parallax_image'>
               <Image className='h-full w-full object-cover ' height={1000} width={1000} alt='image' src={leftImage} />
           </div>
           <div className='products_slider flex-1'>
               
           </div>
        </div>
    </section>
  )
}

export default ProductsShowcase