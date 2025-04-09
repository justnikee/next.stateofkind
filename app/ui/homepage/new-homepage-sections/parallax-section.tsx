import Image from "next/image"
const maskImage = "/homepage/Parallax/svgexport-1.png"
const girlImage = "/homepage/Parallax/ingredients-clip.jpg"

const firstRowImgOne = "/homepage/Parallax/Radical Transparency.png"
const firstRowImgTwo = "/homepage/Parallax/Potent & Multi Tasking.png"

const arrowImage = '/homepage/Parallax/svgexport-13.png'
const leaf = '/homepage/Parallax/leaf.png'
const peal = '/homepage/Parallax/empress.png'

const ParallaxSection = () => {
  return (
    <section className="section relative">
         <div className="container">
            <div className="relative mb-32">
                <h2 className="font-[PPMori] text-7xl font-bold mb-7 text-[#3b3b3b] uppercase">Clean, Conscious,<br/>
                Performance</h2>
                <h2 className="absolute font-[PPEditorialNewItalic] text-8xl text-[#3b3b3b] left-[28rem] underline-style">skincare.</h2>
                <p className="text-[#3b3b3b]">Unreservedly honest products that truly work, be <br/> kind to skin and the planet – no exceptions!</p>
                <div className="arrow-image">
                <Image className="w-full h-full object-cover" height={1000} width={600} alt="image" src={arrowImage}/>
                </div>
            </div>
            <div className="ingrediants-wrapper relative" >
            <IngrediantsFirstRow/>
            <IngrediantsSecondRow/>
            <ParallaxWrapper/>
            </div>
            <div className="leaf w-64 h-64 absolute right-[20%] top-[40%]">
            <Image className="w-full h-full object-cover" height={265} width={265} alt="image" src={leaf}/>
            </div>
            <div className="peal w-64 h-64 absolute left-[20%] bottom-[15%]">
            <Image className="w-full h-full object-cover" height={265} width={265} alt="image" src={peal}/>
            </div>
         </div>
    </section>
  )
}


function ParallaxWrapper(){
    return(
    <div className="ingrediants -z-[1]"
    style={{
        WebkitMaskImage: `url('/homepage/Parallax/svgexport-1.png')`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskImage: `url('/homepage/Parallax/svgexport-1.png')`,
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
      }}
    >
        <Image className="w-full h-full object-cover object-center fixed top-0" height={1000} width={600} alt="image" src={girlImage}/>
    </div>
    )
}

function IngrediantsFirstRow(){
    return(
        <div className="z-10 flex gap-7">
            <div className="item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center mt-[300px]">
                <Image className="bg-white rounded-full mb-5" src={firstRowImgOne} height={100} width={100} alt="logo" />
                <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
                <p className="text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
            </div>
            <div className="item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center h-fit">
                <Image className="bg-white rounded-full mb-5" src={firstRowImgOne} height={100} width={100} alt="logo" />
                <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
                <p className="text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
            </div>
        </div>
    )
}


function IngrediantsSecondRow(){
    return(
        <div className="z-10 flex gap-7 second-row mt-[-10%]">
            <div className="item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center mt-[300px]">
                <Image className="bg-white rounded-full mb-5" src={firstRowImgOne} height={100} width={100} alt="logo" />
                <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
                <p className="text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
            </div>
            <div className="item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center h-fit">
                <Image className="bg-white rounded-full mb-5" src={firstRowImgOne} height={100} width={100} alt="logo" />
                <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
                <p className="text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
            </div>
        </div>
    )
}

export default ParallaxSection