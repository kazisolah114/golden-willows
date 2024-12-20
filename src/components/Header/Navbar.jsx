import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navs = [
        {title: "Home", path: "/"},
        {title: "Overview", path: "/"},
        {title: "Gallery", path: "/"},
        {title: "Amenities", path: "/"},
        {title: "Plans", path: "/"},
    ]
    return (
        <nav>
            <ul className='flex items-center gap-7'>
                {navs.map((nav, index) => (
                    <li key={index}><Link href="">{nav.title}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;