import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./hero";
import { Image } from "./Image";
import { Carousel } from "./Carousel";

export const Index = () => {
    return (
        <>
            <div className="bg-linear-to-r from-indigo-100 to-indigo-100 mb-10">
                <div className="background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#EOFOFF_29.28%,#E7EFFD_68.68%_#FFF_100%)">
                    <Navbar />
                </div>
                <div className="border-b border-slate-300">
                    <div className="max-w-262.5 mx-auto">
                        <Hero />
                    </div>
                </div>
                <div className="bg-linear-to-b from-indigo-100 to-white">
                    <div className="max-w-262.5 mx-auto border-r border-l border-slate-300">
                        <Image />
                    </div>
                </div>
                <div className="bg-white">
                    <div className="max-w-262.5 mx-auto">
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}
