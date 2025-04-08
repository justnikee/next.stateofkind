"use client"

import React from 'react'
import ReactPlayer from 'react-player'

const heroVidSrc = '/homepage/HeroVideo/hero.mp4' 
const HeroVideo = () => {
  return (
    <section className='h-screen w-full'>
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
    </section>
  )
}

export default HeroVideo