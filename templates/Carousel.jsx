import React from "react";

export const Carousel = () => {
    return (
        <>
            <div className="flex flex-col gap-7">
                <p className="text-center text-sm font-medium text-slate-900">Trusted by fast-growing startups</p>
                <div className="flex justify-between overflow-hidden flex-nowrap">
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                    <img src="../src/assets/images/resend_v2.webp" className="w-20 object-cover"/>
                </div>
            </div>
        </>
    )
} 