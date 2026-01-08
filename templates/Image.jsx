import React from "react"
import hero from "../src/assets/images/hero.webp"

export const Image = () => {
    return (
        <>
            <div className="p-4">
                <img src={hero}
                    className="rounded-lg [mask-image:radial-gradient(155.14%_111.78%_at_50%_-11.78%,_#D9D9D9_60%,_rgba(115,_115,_115,_0.00)_90%)]"
                />
            </div>
            
        </>
    )
} 
