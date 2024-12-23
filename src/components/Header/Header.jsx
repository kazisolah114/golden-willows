"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Header = () => {
    const [show_responsive_menu, set_show_responsive_menu] = useState(false);
    return (
        <header className="w-full bg-white md:px-20 max-lg:px-10 max-md:px-5 flex items-center justify-between py-4">
            <div className="border border-gray-400 rounded-lg w-40 flex items-center justify-center">
                <Link href="/" className="w-full text-center font-semibold p-2 flex items-center justify-center gap-2">
                    <div className="bg-black w-[6px] h-[6px] rounded-full"></div>Golden Willows
                </Link>
            </div>
            <div className="max-md:hidden">
                <Navbar />
            </div>
            <div className="max-md:hidden">
                <button className="border border-gray-400 rounded-md px-5 py-2">Contact</button>
            </div>
            <div className="md:hidden relative">
                <button
                    onClick={() => set_show_responsive_menu(!show_responsive_menu)}
                    className="border border-gray-400 p-1 rounded-lg"
                >
                    {show_responsive_menu ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
                </button>
                <div
                    className={`${
                        show_responsive_menu ? "" : "hidden"
                    } absolute top-12 -right-5 w-screen bg-white z-50 py-10`}
                >
                    <Navbar set_show_responsive_menu={set_show_responsive_menu} show_responsive_menu={show_responsive_menu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
