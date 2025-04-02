type Button = {
    buttonLink: string
    buttonText: string
    dark: boolean
    css?: string
}

function Button({buttonLink, buttonText, dark, css}: Button){
    return(
        <>
        <a className={`${dark ? 
            "bg-black text-white hover:bg-white hover:text-black border-black border" : 
            "bg-white text-black hover:text-white hover:bg-black"} 
            transition-all duration-300 px-6 py-3 rounded-full uppercase mt-6 ${css}`} 
            href={buttonLink}>
            {buttonText}
        </a>
        </>
    )
}

export default Button