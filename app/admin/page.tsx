"use client"
import React from 'react'
import { CldUploadButton } from 'next-cloudinary';
import Products from './manageProducts/products';


type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <Products/>
      {/* <CldUploadButton uploadPreset="<Upload Preset>" /> */}
    </div>
  )
}

export default page;