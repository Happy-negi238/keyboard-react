import React from "react";

export const Space = () => {
    return (
        <>
            <div className="flex gap-1">
                <div className="w-add py-2 flex flex-col items-center justify-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 hover:border-l-2 group">
                    <div className="text-[12px] group-hover:text-[11px] font-medium transition duration-200 ease-in-out">Ctrl</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className="text-[12px] group-hover:text-[11px] font-medium transition duration-200 ease-in-out">Fn</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className="">
                        <i class="ri-windows-fill  group-hover:text-[11px] font-medium transition duration-200 ease-in-out "></i>
                    </div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className="text-[12px] group-hover:text-[11px] font-medium transition duration-200 ease-in-out">Alt</div>
                </div>
                <div className="flex-1 w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light  hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-shadow duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className=""></div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className="text-[12px] group-hover:text-[11px] font-medium transition duration-200 ease-in-out">Alt Gr</div>
                </div>
                <div className="w-add py-2 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                transition-transform duration-100 border-t-2 dark:border-neutral-500 border-slate-400 group">
                    <div className="text-[12px] group-hover:text-[11px] font-medium transition duration-200 ease-in-out">Ctrl</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="w-12 h-7.5 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                        gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                        transition-transform duration-100 border-t hover:border-t-0 hover:border-b dark:border-neutral-500 border-slate-400 group">
                        <div className="text-[12px] group-hover:scale-[0.98] group-hover:text-[11px] font-medium
                             transition-all duration-200 ease-in-out">
                            <i class="ri-triangle-line"></i>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-12 py-1.5 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                        gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                        transition-transform duration-100 border-t hover:border-t-0 hover:border-b dark:border-neutral-500 border-slate-400 group">
                            <div className="text-[12px] -rotate-90 group-hover:text-[11px] font-medium
                             transition-all duration-200 ease-in-out">
                                <i class="ri-triangle-line"></i>
                             </div>
                        </div>
                        <div className="w-12 py-1.5 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                        gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                        transition-transform duration-100 border-t hover:border-t-0 hover:border-b dark:border-neutral-500 border-slate-400 group">
                            <div className="text-[12px] rotate-180 group-hover:text-[11px] font-medium transition-all 
                            duration-200 ease-in-out"><i class="ri-triangle-line"></i></div>
                        </div>
                        <div className="w-12 py-1.5 flex flex-col justify-center items-center cursor-pointer dark:bg-black bg-neutral-100/95 text-sm rounded-lg
                        gap-0.5 dark:shadow-add shadow-light hover:scale-[0.98] dark:hover:shadow-none hover:shadow-black/40
                        transition-transform duration-100 border-t hover:border-t-0 hover:border-b dark:border-neutral-500 border-slate-400 group">
                            <div className="text-[12px] rotate-90 group-hover:text-[11px] font-medium transition-all 
                            duration-200 ease-in-out"><i class="ri-triangle-line"></i></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}