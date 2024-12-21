import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='app-container flex items-center justify-between py-4'>
            <div>LOGO</div>
            <Navbar />
            <div>
                <button className='border border-gray-500 rounded-md px-5 py-2'>Contact</button>
            </div>
        </header>
    );
};

export default Header;