"use client"

import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player'
import { useRef } from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const heroVidSrc = '/homepage/HeroVideo/hero.mp4' 
const HeroVideo = () => {

  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(['.top-text', '.bottom-text'], {
      y: 97
    }, {
      yPercent: -97,
      duration: 0.4,
      ease: "power1.inOut",
      delay: 1,
      stagger: 0.2
    })

    // gsap.fromTo('.bottom-text', {
    //   y: 97
    // }, {
    //   yPercent: -97,
    //   duration: 0.5,
    //   stagger: 0.2
    // })
  }, { scope: container })


  return (
    <section ref={container} className='h-screen w-full'>
            <div className='h-full'>
                <ReactPlayer 
                url={heroVidSrc}
                playing
                muted
                loop
                controls={false}
                width="100%"
                height="100%"
                config={{
                        file: {
                          attributes: {
                            muted: true,
                            autoPlay: true,
                            playsInline: true,
                            style: {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                            },
                          },
                        },
                      }}
                />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <div className='h-[100px] overflow-hidden flex items-end' >
            <h1 className='top-text font-[PPMori] text-8xl text-center text-white overflow-hidden'>
            <span className='font-[PPEditorialNewItalic]'>True</span> to Oneself </h1>
            </div>
            <div className='h-[100px] overflow-hidden flex items-end justify-center' >
              <h1 className='bottom-text font-[PPMori] text-8xl text-center text-white'>kind to <span className='font-[PPEditorialNewItalic]'>Nature</span>
              </h1>
              </div>
              <p>{`Unreservedly honest products that truly work, be`}</p>
              <p>{`kind to skin and the planet – no exceptions!`}</p>
            </div>
            <div className='w-1/2 absolute bottom-5 left-1/2 transform -translate-x-1/2'>
              <Link className='px-6 py-5 border flex relative bg-white rounded-full' href={'/'}>
              <span className='w-full text-center uppercase underline'>Shop All Products</span>
               <div className='absolute right-2 -translate-y-1/2 h-14 w-14 bg-black top-1/2 rounded-full flex justify-center items-center'>
               <svg
                  className="icon-arrow"
                  width={13}
                  height={8}
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-a74c202d=""
                >
                  <path
                    d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="icon-arrow"
                  width={13}
                  height={8}
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-a74c202d=""
                >
                  <path
                    d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
               </div>
              </Link>
            </div>
    </section>
  )
}




export default HeroVideo