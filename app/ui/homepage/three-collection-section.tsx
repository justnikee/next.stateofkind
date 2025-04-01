import Image from "next/image"

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
             <div className="flex">
                <CollectionCard image={img1} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
                <CollectionCard image={img2} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
                <CollectionCard image={img3} title="Orchid"  subtitle="Orchid Antioxidant Beauty Face Oil" buttonLink="#"/>
             </div>
        </section>
    )
}


function CollectionCard({image, title, subtitle, buttonLink}:CardType){
    return(
        <div>
            <Image src={image} height={600} width={400} alt="image" />
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <a href={buttonLink}>Shop Now</a>
            </div>
        </div>
    )
}

export default HPCollections