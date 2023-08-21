import React from "react";

function PortfolioItem({title, description, imgUrl, stack, link}){
    return(
        <div className="text-white border-2 border-stone-900 ronded-md overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md">
            <img 
                src={imgUrl} 
                alt="PortfolioItem" 
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            <div className="w-full p-2">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <h4 className="text-sm md:text-base mb-2 md:mb-3 font-semibold">{description}</h4>
                <p className="flex flex-wrap gap-2 flex-row items-center justify start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-2 font-semibold rounded-md bg-stone-900">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
        )
}

export default PortfolioItem;