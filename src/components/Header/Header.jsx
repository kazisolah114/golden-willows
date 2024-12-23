import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';

const Header = () => {
    return (
        <header className='fixed top-0 overflow-auto z-20 w-full bg-white px-20 max-lg:px-10 max-md:px-5 flex items-center justify-between py-4'>
            <div className='border border-gray-400 rounded-lg w-40 flex items-center justify-center'>
                <Link href="/" className='w-full text-center font-semibold p-2 flex items-center justify-center gap-2'> <div className=' bg-black w-[6px] h-[6px] rounded-full '></div>Golden Willows</Link>
            </div>
            <div className='max-md:hidden'>
                <Navbar />
            </div>
            <div className='max-md:hidden'>
                <button className='border border-gray-400 rounded-md px-5 py-2'>Contact</button>
            </div>
            <div className='md:hidden'>
                <button className='border border-gray-400 p-1 rounded-lg'><HiBars3 className='text-2xl' /></button>
            </div>
        </header>
    );
};

export default Header;