import React from "react";
import { Link } from "react-router-dom";
import finta from "../src/assets/images/finta.svg"

export const Navbar = () => {
    return(
        <>
            <div className="py-4 px-3 max-w-262.5 mx-auto border-r border-l border-slate-300">
                <div className="flex items-center justify-between">
                    <img src={finta}
                        className="w-18"
                    />
                    <div className="flex items-center gap-7 text-sm">
                        <div className="text-neutral-800 font-medium cursor-pointer hover:text-neutral-600
                        transition duration-100">Founders</div>

                        <div className="text-neutral-800 font-medium cursor-pointer hover:text-neutral-600
                        transition duration-100"><Link to="/key">Guide</Link></div>

                        <div className="text-neutral-800 font-medium cursor-pointer hover:text-neutral-600
                        transition duration-100">Pricing</div>

                        <div className="text-neutral-800 font-medium cursor-pointer hover:text-neutral-600
                        transition duration-100">login</div>

                        <button className="bg-[#2769f3] hover:bg-[#2262C7] text-white py-2 px-4
                         rounded-md tracking-wide
                        font-medium transition duration-300 ease-in-out cursor-pointer
                        drop-shadow-xl text-shadow-xs">Get started</button>
                    </div>
                </div>
            </div>
        </>
    )
}