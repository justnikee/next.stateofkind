import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#353C46] mt-20'>
        <div className='flex justify-between max-w-screen-2xl m-auto py-16'>
            <div>
               <ul className="flex flex-col gap-3 text-white" >
                <h2 className='uppercase'>Info</h2>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Faq</li>
               </ul>
            </div>
            <div>
               <form className='flex flex-col gap-4 justify-start'>
                  <input className='p-3 rounded-sm placeholder:text-sm placeholder:capitalize' type='email' placeholder='enter your email!!'></input> 
                  <button className='p-2 bg-slate-200'>Subscribe</button>
               </form>
            </div>
        </div>
    </div>
  )
}

export default Footer