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
            setbgColor('bg-white');
        }else{
            setIcon('sun');
            setbgColor('bg-black');
        }
    }

    const [icon, setIcon] = useState('sun');
    const[bgColor, setbgColor] = useState('bg-black')
    
    return (
        <>
            <div className={`flex justify-center items-center relative w-full h-screen transition-colors duration-600
            ease-in-out gradientStyle ${bgColor}`} id="gradientStyle">
                <div className="mx-w-fit bg-neutral-800 text-white
                    rounded-xl px-2 py-2">
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
                    <i className={`ri-${icon}-line transition-all duration-300 ease-in-out`} ></i>
                </div>
            </div>
        </>
    )
}