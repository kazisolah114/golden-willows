import Link from 'next/link';
import React from 'react';

const Navbar = ({set_show_responsive_menu = () => {}}) => {
    const navs = [
        {title: "Home", path: "/"},
        {title: "Overview", path: "#overview"},
        {title: "Gallery", path: "#gallery"},
        {title: "Amenities", path: "#amenities"},
        {title: "Plans", path: "#plans"},
    ]
    return (
        <nav className=''>
            <ul className='flex md:items-center max-md:flex-col gap-1'>
                {navs.map((nav, index) => (
                    <li onClick={() => set_show_responsive_menu(false)} key={index} className={` hover:bg-gray-100 hover:border-gray-400  border border-transparent duration-200 rounded-lg py-2 px-2`}><Link href={nav.path} className='py-2 px-2'>{nav.title}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;