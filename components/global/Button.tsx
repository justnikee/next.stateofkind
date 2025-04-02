type Button = {
    buttonLink: string
    buttonText: string
    dark: boolean
}

function Button({buttonLink, buttonText, dark}: Button){
    return(
        <>
        <a className={`${dark ? 
            "bg-black text-white hover:bg-white hover:text-black" : 
            "bg-white text-black hover:text-white hover:bg-black"} 
            transition-all duration-300 px-6 py-3 rounded-full uppercase mt-6`} 
            href={buttonLink}>
            {buttonText}
        </a>
        </>
    )
}

export default Button