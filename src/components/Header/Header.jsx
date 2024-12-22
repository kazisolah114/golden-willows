import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='app-container flex items-center justify-between py-4'>
            <div className='border border-gray-400 rounded-lg w-40 flex items-center justify-center'>
                <Link href="/" className='w-full text-center font-semibold p-2 flex items-center justify-center gap-2'> <div className=' bg-black w-[6px] h-[6px] rounded-full '></div>Golden Willows</Link>
            </div>
            <Navbar />
            <div>
                <button className='border border-gray-400 rounded-md px-5 py-2'>Contact</button>
            </div>
        </header>
    );
};

export default Header;