
import React from 'react'
import { CldUploadButton } from 'next-cloudinary';
import Products from './manageProducts/products';
import AddProduct from './manageProducts/AddProduct';


type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <Products/>
      <AddProduct/>
      {/* <CldUploadButton uploadPreset="<Upload Preset>" /> */}
    </div>
  )
}

export default page;