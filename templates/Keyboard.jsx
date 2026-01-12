import React, { useState } from "react"
import { F_line } from "./buttons/F_line"
import { N_line } from "./buttons/N_line"
import { TabLine } from "./buttons/tabLine"
import { CapsLock } from "./buttons/CapsLock"
import { Shift } from "./buttons/Shift"
import { Space } from "./buttons/Space"

export const Keyboard = () => {
    const ChangeIcon = () => {
        if(icon == 'sun'){
            setIcon('moon');
        }else{
            setIcon('sun');
        }
    }

    const handleThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains('dark')
            ? "light"
            : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme-tailwind", currentTheme);
    }

    const [icon, setIcon] = useState('moon');
    
    return (
        <>
            <div className="flex justify-center items-center relative w-full h-screen transition-colors duration-600
            ease-in-out gradientStyle dark:bg-foreground bg-background " >
                <div className="mx-w-fit dark:bg-neutral-900 dark:text-white bg-slate-300 text-neutral-950 
                border dark:border-neutral-700 border-slate-400 rounded-xl px-2 py-2 shadow-lg dark:shadow-slate-300/20 shadow-black/25">
                    <div className="flex flex-col gap-1">
                        <F_line />
                        <N_line />
                        <TabLine />
                        <CapsLock />
                        <Shift />
                        <Space />
                    </div>
                </div>
                <div className="text-white cursor-pointer absolute top-1/12 right-1/12 border border-neutral-200 px-2 py-1 rounded-lg
                bg-neutral-900 inset-shadow-sm inset-shadow-neutral-600" onClick={ChangeIcon}>
                    <i className={`ri-${icon}-line transition-all duration-300 ease-in-out`} onClick={handleThemeChange}></i>
                </div>
            </div>
        </>
    )
}