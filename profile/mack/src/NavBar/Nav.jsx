import { useState } from "react";
import MyCat from "./meriCat.png";

export function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const inverter = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex flex-row items-center h-28 cursor-pointer bg-slate-100 z-50">
                <img src={MyCat} className="h-24 w-20" alt="My Cat" />
                <div className="flex flex-row gap-7 text-4xl absolute right-20">
                    <div onClick={() => window.location.href="https://www.instagram.com/mohit_sati01/"} className="bg-violet-600 hover:bg-red-600 transition-transform duration-300 ease-in-out transform hover:scale-130 w-48 text-center rounded-[10px] p-6 flex-row justify-center text-white hidden md:flex font-extrabold">Visit</div>
                    <div onClick={() => window.location.href="https://leetcode.com/u/MackWalker/"} className="bg-violet-600 hover:bg-red-600 transition-transform duration-300 ease-in-out transform hover:scale-130 w-48 text-center rounded-[10px] p-6 flex-row justify-center text-white hidden md:flex font-extrabold">Code</div>
                    <div className="relative top-3 left-16 md:hidden" onClick={inverter}><i className="fa-solid fa-bars"></i></div>
                </div>
            </div>

            {toggleMenu && (
                <div className="fixed top:0 bg-slate-100 h-[400px] w-full inset-0 flex flex-col items-center justify-center z-40">
                    <div className="absolute top-4 right-4" onClick={inverter}><i className="fa-solid fa-xmark text-4xl"></i></div>
                    <img src={MyCat} className="h-24 w-20" alt="My Cat" />
                    <div className="flex flex-col items-center gap-7 text-4xl">
                        <div onClick={() => window.location.href="https://www.instagram.com/mohit_sati01/"} className="bg-violet-600 hover:bg-red-600 w-40 text-center rounded-[10px] p-2 text-white transition-transform duration-300 ease-in-out transform hover:scale-130">Visit</div>
                        <div onClick={() => window.location.href="https://leetcode.com/u/MackWalker/"} className="bg-violet-600 hover:bg-red-600 w-40 text-center rounded-[10px] p-2 text-white transition-transform duration-300 ease-in-out transform hover:scale-130">Code</div>
                    </div>
                </div>
            )}
        </>
    );
}
