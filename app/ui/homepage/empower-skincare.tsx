import Image from "next/image"
import Link from "next/link"

const img1 = "/homepage/Empower-skin/cream_25533314-33e0-4562-b089-d218121fe798.avif";
const img2 = "/homepage/Empower-skin/mokosh-butelka-12_9aee4959-19ad-4899-8628-412d2818893a.avif";
const img3 = "/homepage/Empower-skin/mokosh-butelka-2.avif";

function EmpowerSkinCare(){
  return(
    <section>
        <div className="px-5 py-16 flex justify-center flex-col items-center sm:max-w-[1376px] sm:m-auto">
            <span>Empower Your Skin care</span>
            <div className="mt-4">
                <h3 className="text-3xl text-center leading-normal lg:text-4xl">The harmony between powerful 
                    <Link className="inline group" href={"/"}>
                    <Image className="inline w-16 h-12 rounded-full mx-3 object-cover lg:w-20 group-hover:w-22" src={img1} height={100} width={100} alt="image" />
                    </Link> 
                    image oil high-performance ingredients 
                    <Link className="inline" href={"/"}>
                    <Image className="inline w-16 h-12 rounded-full mx-3 object-cover lg:w-20" src={img2} height={100} width={100} alt="image" />
                    </Link> 
                    image cream and exceptionally simple 
                    <Link className="inline" href={"/"}>
                    <Image className="inline w-16 h-12 rounded-full mx-3 object-cover lg:w-20" src={img3} height={100} width={100} alt="image" />
                    </Link> 
                    image women skincare routines.
                </h3>
            </div>
        </div>
    </section>
  )
}


export default EmpowerSkinCare