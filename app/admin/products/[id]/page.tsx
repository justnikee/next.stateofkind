"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import AddProduct from '../add'

const page = () => {

    const param = useParams()

    const productId = param.id;
    console.log(productId);

    


  return (
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex flex-col gap-4 m-4 pt-0">
      <AddProduct/>
    </div>
  )
}

export default page