import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navs = [
        {title: "Home", path: "/"},
        {title: "Overview", path: "#overview"},
        {title: "Gallery", path: "#gallery"},
        {title: "Amenities", path: "#amenities"},
        {title: "Plans", path: "#contact"},
    ]
    return (
        <nav>
            <ul className='flex items-center gap-1'>
                {navs.map((nav, index) => (
                    <li key={index} className={`hover:bg-gray-100 hover:border-gray-400  border border-transparent duration-200 rounded-lg py-2 px-2`}><Link href={nav.path} className='py-2 px-2'>{nav.title}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;