"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const bannerImage = 'https://res.cloudinary.com/dgywanyap/image/upload/v1736448623/WEB_HALO_2024_December_Week_51_Hero_Banner_Desktop_01-copy_e97axa.jpg'
const bannerVideo = "https://res.cloudinary.com/dgywanyap/video/upload/v1737058576/image-video_sigwfi.mp4"
const bannerVideo2 = "https://res.cloudinary.com/dgywanyap/video/upload/v1737059864/6009596_4k_Video_Attractive_1920x1080_ofh1jc.mp4"

const Banner = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  )

  return (
    <div className='h-screen w-auto -mt-[93px] relative -z-0 overflow-hidden flex items-end'>
      <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className='h-full'>
          <CarouselItem className='h-full'>
          <Video prop={bannerVideo}/>
          </CarouselItem>
          <CarouselItem className='h-full'> 
            {/* <Image className='object-cover h-full' src={bannerImage} width={1920} height={1080} alt='banner Image' /> */}
            <Video prop={bannerVideo2}/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}


const Video = ({prop}: any) => {
  return (
    <video width="1920" height="1080" autoPlay loop muted playsInline preload="none">
      <source src={prop} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Banner