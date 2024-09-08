import React, { useContext, useEffect, useState } from "react";
import Logo from "../shared/Logo";
import Login from "../shared/Login";
import { HandleContext } from "../../hooks/HandleState";

const LandingHearder = () => {
    const [nav, setNav] = useState({ top: "1%" });
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 80) {
                setBlur(true);
            } else {
                setBlur(false);
            }
            if (scrollTop > lastScroll) {
                setNav({ top: "-100%" });
            } else {
                setNav({ top: "1%" });
            }
            lastScroll = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { setOpenLogin } = useContext(HandleContext);
    return (
        <>
            <header
                style={{ top: nav.top }}
                className={`z-20 ${blur ? "bg-opacity-20" : "bg-opacity-0"
                    } duration-500 p-[10px] rounded-[20px] bg-black fixed top-[10px] left-1/2 -translate-x-1/2 container mx-auto max-w-[88rem] flex flex-row justify-between items-center `}
            >
                <h1 className=" flex flex-row items-center justify-center gap-2">
                    <Logo />
                    <span className="text-[32px] font-bold text-[#FF541E] ">Rapid</span>
                </h1>
                <button className=" py-2 px-[22px] capitalize rounded-[32px] bg-[#FF541E] text-[16px] text-white font-semibold">
                    login
                </button>
            </header>
            <header
                style={{ top: nav.top }}
                className={`z-20 ${blur ? "bg-opacity-20" : "bg-opacity-0"
                    } duration-500 p-[10px] rounded-[20px] bg-black fixed top-[10px] left-1/2 -translate-x-1/2 container mx-auto max-w-[88rem] flex flex-row justify-between items-center `}
            >
                <h1 className=" flex flex-row items-center justify-center gap-2">
                    <Logo />
                    <span className="text-[32px] font-bold text-[#FF541E] ">Rapid</span>
                </h1>
                <button
                    onClick={(e)=>{
                        e.preventDefault()
                        setOpenLogin(true)
                    }}
                    className=" py-2 px-[22px] capitalize rounded-[32px] bg-[#FF541E] text-[16px] text-white font-semibold"
                >
                    login
                </button>
            </header>

            <Login />
        </>
    );
};

export default LandingHearder;
