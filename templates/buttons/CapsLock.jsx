import React from "react";

export const CapsLock = () => {
    return (
        <>
            <div className="flex gap-1">
                <div className="pl-2 py-2 w-24 flex flex-col cursor-pointer bg-black text-sm rounded-lg
                shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2  border-neutral-500 hover:border-l-2 group">
                    <div className="flex-1"></div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">Caps Lock</div>
                </div>
                <div className="w-add py-2 flex flex-col items-center justify-center 
                cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">A</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">S</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">D</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">F</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">G</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">H</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">J</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">K</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">L</div>
                </div>

                <div className="w-add h-13.5 py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out
                    opacity-85">:</div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">;</div>
                </div>

                <div className="w-add h-13.5 py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out opacity-85">"</div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">'</div>
                </div>

                <div className="flex-1 w-21 py-2 pr-2 flex flex-col items-end cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="flex-1"></div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">Enter</div>
                </div>
            </div>
        </>
    )
}