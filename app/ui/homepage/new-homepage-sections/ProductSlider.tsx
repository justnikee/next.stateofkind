"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ArrowButton from './components/arrow-button'

type Product = {
  id: string
  name: string
  price: number
  imageUrls: string[]
}

const ProductSlider = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isDragging, setIsDragging] = useState(false);

  async function fetchProducts() {
    const res = await fetch("/api/admin/getproducts")
    const data = await res.json()
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='flex-1 w-1/2 mx-16 overflow-hidden'>
      <div className='flex justify-between items-end mb-10'>
      <h3 className='text-6xl text-[#3b3b3b]'>
      Pure
      <span className='font-[PPEditorialNewItalic] font-light block'>Brilliance</span>
      </h3>
      <ArrowButton/>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        breakpoints={{
          640: { slidesPerView: 1 },
        }}
        className="!overflow-visible"
      >
        {products.slice(0, 5).map((product, index) => (
          <SwiperSlide className='max-w-[400px]' key={index}>
            <Link
              href={`/product/${product.id}`}
              className={`border rounded block ${isDragging ? 'rotate-6 transition-all duration-300 ease-in-out' : '' }`}
            >
              <div className='flex flex-col gap-2 relative'>
                {product.imageUrls.slice(0, 2).map((imgUrl, index) => (
                  <Image
                    data-key={index}
                    key={index}
                    src={imgUrl}
                    height={600}
                    width={400}
                    alt={product.name}
                    className={`rounded object-cover ${index === 1 ? 'absolute top-0 left-0 w-full' : ''}`}
                  />
                ))}
                <div className='flex justify-between items-center px-3 absolute bottom-5 w-full'>
                  <p className='text-sm font-[PPMori] font-extralight uppercase'>
                    {product.name}
                  </p>
                  <p className='text-sm font-[PPMori] font-extralight uppercase'>
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider
