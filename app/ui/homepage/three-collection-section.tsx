import Image from "next/image"
import Button from "@/components/global/Button";

type CardType = {
    image: string
    title: string
    subtitle: string
    buttonLink: string
}
const img1 = "/homepage/ThreeCollectionSection/baku-mobile-2.webp"
const img2 = "/homepage/ThreeCollectionSection/green_14671770-fa5c-434e-8716-3f170dd17ee8.webp";
const img3 = "/homepage/ThreeCollectionSection/orchid-mobile-2.webp";

function HPCollections(){
    return(
        <section>
             <div className="grid lg:grid-cols-3">
                <CollectionCard image={img1} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
                <CollectionCard image={img2} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
                <CollectionCard image={img3} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
             </div>
        </section>
    )
}


function CollectionCard({image, title, subtitle, buttonLink}:CardType){
    return(
        <div className="relative">
            <Image className="w-full h-full object-cover lg:h-[792px]" src={image} height={792} width={400} alt="image" />
            <div className="flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <h2 className="text-4xl">{title}</h2>
                <p className="text-lg text-center mt-2">{subtitle}</p>
                <Button buttonLink={buttonLink} buttonText="Shop Now" dark={false}/>
            </div>
        </div>
    )
}

export default HPCollections