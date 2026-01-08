import React from "react"

export const Hero = () => {
    return (
        <>
            <div className="border-r border-l border-slate-300 p-4 pt-15">
                <div className="flex flex-col items-center gap-10">
                    <div className="bg-slate-200 border border-slate-300 px-3 py-1 rounded-2xl text-[12px]
                    ">We're hiring Founding Ruby Engineers <i className="ri-arrow-right-line text-slate-500"></i>
                    </div>
                    <div className="flex flex-col gap-6 pb-10">
                        <h1 className="max-w-150 text-6xl text-center tracking-[-1px] font-semibold text-[#202020]">
                            Magically simplify accounting and taxes
                        </h1>
                        <p className="text-center text-lg leading-6 text-[#595959]">Automated bookkeeping. Effortless tax filing. Financial clarity.<br /> Set up in 10 mins. Back to building by 10:17am.</p>
                        <div className="flex gap-6 justify-center">
                            <button className="bg-[#2769f3] hover:bg-[#2262C7] text-white py-2 px-4 rounded-lg
                                font-medium transition duration-300 ease-in-out cursor-pointer text-sm
                                drop-shadow-xl text-shadow-xs tracking-wide">Get started</button>
                            <button className="flex justify-center items-center gap-2 text-[#202020] text-sm
                             font-medium align-middle">Pricing
                                <i className="ri-arrow-right-line text-slate-500"></i>
                            </button>
                        </div>
                        <p className="text-neutral-500 text-center text-[12px]">For US-based startups.</p>
                    </div>
                </div>
            </div>
        </>
    )
}