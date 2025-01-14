"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const param = useParams()

    const productId = param.id;
    console.log(productId);

    


  return (
    <div>page</div>
  )
}

export default page