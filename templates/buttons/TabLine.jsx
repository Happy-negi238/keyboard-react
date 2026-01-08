import React from "react";

export const TabLine = () => {
    return (
        <>
            <div className="flex gap-1">
                <div className="pl-2 py-2 w-29 flex flex-col cursor-pointer bg-black text-sm rounded-lg
                shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2  border-neutral-500 hover:border-l-2 group">
                    <div className="flex-1"></div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">Tab</div>
                </div>
                <div className="w-add py-2 flex flex-col items-center justify-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">Q</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">W</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">E</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">R</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">T</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">Y</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">U</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">I</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">O</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">P</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out
                    opacity-85">&#123;</div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">&#91;</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out
                    opacity-85">&#125;</div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">&#93;</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer bg-black text-sm rounded-lg
                gap-0.5 shadow-add hover:scale-[0.98] hover:shadow-none
                transition-transform duration-100 border-t-2 border-neutral-500 group">
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out
                    opacity-85">|</div>
                    <div className="text-[12px] group-hover:text-[10px] transition-all duration-200 ease-in-out">\</div>
                </div>
            </div>
        </>
    )
}