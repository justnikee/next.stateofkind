import Button from "@/components/global/Button"
import Image from "next/image"

const imageParallax1 = '/homepage/ThreeCollectionSection/image-paralax-1.webp'
const imageParallax2 = '/homepage/ThreeCollectionSection/image-paralax-2.webp'


type ParallaxProp = {
    imageUrl: string
    imageSrc: string
    customCssImage?: string
    customCssItem?: string
}

function FixedImageWithText(){
    return(
        <section className="h-[350vh] relative">
         <div className="max-w-[1376px] m-auto">
         <StickySection/>
         <ImageParallax/>
         </div>
        </section>
    )
}


function StickySection(){
    return(
        <div className="h-screen sticky top-0 px-5 m-auto flex flex-col justify-center items-center">
           <h2 className="text-4xl text-center lg:text-8xl">Where Every Skincare Moment Counts.</h2>
           <p className="text-center mt-2 lg:max-w-screen-md lg:mt-7">
            {`At Beauty, we believe that skincare isn't just a routine; it's a journey of self-care and self-discovery. Our-Beauty curated selection of premium skincare products is designed to elevate your beauty regimen,
           offering you a sanctuary of indulgence and transformation.`}</p>
           <Button 
           buttonLink={"/"} 
           buttonText="About Us" 
           dark={true} 
           css="lg:mt-12"/>
       </div>
    )
}

function ImageParallax(){
    return(
        <div className="flex flex-col gap-[50vh] custom-padding">
            <ParallaxItem
            imageSrc={imageParallax1}
            imageUrl={'/'} 
            customCssImage="rounded-lg rotate-[7deg]" 
            customCssItem=""/>
            <ParallaxItem 
            imageSrc={imageParallax2}
            imageUrl={'/'} 
            customCssImage="rounded-lg -rotate-[7deg]"
            customCssItem="w-full flex justify-end"/>
        </div>
    )
}

function ParallaxItem({imageSrc, imageUrl, customCssItem, customCssImage}: ParallaxProp){
    return(
        <div className={`${customCssItem}`}>
          <a 
          href={imageUrl}>
            <Image 
            className={`${customCssImage}`} 
            src={imageSrc} 
            height={600} 
            width={400} 
            alt="Image" 
            />
          </a>
        </div>
    )
}

export default FixedImageWithText