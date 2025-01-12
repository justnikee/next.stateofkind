
import React from 'react'
import Products from './products/edit';
import AddProduct from './products/add';


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