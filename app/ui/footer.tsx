import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F2F0ED] mt-20'>
        <div className='flex justify-between max-w-screen-2xl m-auto pt-16'>
         <div className='max-w-[570px]'>
           <h2 className='text-2xl font-bold mb-3'>State of Kind</h2>
           <p>Sign up to be notified on discounts, drops and more.</p>
           <form className='flex gap-4 justify-start mt-3'>
                  <input className='p-3 border-[0.5px] border-black rounded-full px-6 placeholder:text-sm' type='email' placeholder='Your@email.com'></input> 
                  <button className='px-10 uppercase bg-[#FA643B]  rounded-full text-white font-bold'>Subscribe</button>
            </form>
            <small className='block mt-4 text-[12px] leading-[14px]'>By signing up via text, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from nuuds at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View Terms & Privacy.</small>
            <div className='flex mt-4 gap-3'>
            <SocialIcons socialUrl={"#"} socialImage={"https://res.cloudinary.com/dgywanyap/image/upload/v1737221200/facebook_eznzds.png"}/>
            <SocialIcons socialUrl={"#"} socialImage={"https://res.cloudinary.com/dgywanyap/image/upload/v1737221201/instagram_yfztdj.png"}/>
            <SocialIcons socialUrl={"#"} socialImage={"https://res.cloudinary.com/dgywanyap/image/upload/v1737221200/twitter_p85qkc.png"}/>
            </div>
         </div>
            <div>
               <ul className="flex flex-col gap-2" >
                <h2 className='font-bold text-xl'>Easy Links</h2>
                <li className=''>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Faq</li>
               </ul>
            </div>
        </div>
        <div className='max-w-screen-2xl m-auto py-5 border-t mt-8 border-black'>
        <FooterRights/>
        </div>
    </div>
  )
}


function SocialIcons ({socialUrl, socialImage}: any) {
   return(
      <>
         <a href={socialUrl}>
            <Image className='h-7 w-7' src={socialImage} height={200} width={200} alt='social icon' />
         </a>
      </>
   )
}

function FooterRights () {

const currentYear = new Date().getFullYear();

   return(
      <>
       <small>© State of Kind {currentYear} all rights reserved</small>
      </>
   )
}

export default Footer