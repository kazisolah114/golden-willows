import React from 'react';
import { HiMap, HiMapPin, HiMiniPhone } from 'react-icons/hi2';

const Footer = () => {
    return (
        <div className=' bg-[#1E1E1E]'>
            <div className='app-container px-52 py-20 grid grid-cols-2 gap-28'>
                <div>
                    <h2 className='text-3xl text-white'>Looking for Expedited Assistance?</h2>
                    <ul className='mt-10'>
                        <li className='flex items-center gap-3 mb-3 text-gray-300'><HiMiniPhone className='text-xl p-1 rounded-full bg-gray-800 items-center justify-center' /> +91 98206 71739</li>
                        <li className='flex items-center gap-3 text-gray-300'><HiMiniPhone className='text-xl p-1 rounded-full bg-gray-800 items-center justify-center' /> smluxuryestate@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl text-white'>Our Office</h2>
                    <ul className='mt-10'>
                        <li className='flex items-start gap-3 mb-3 text-gray-300'><HiMapPin className='text-xl p-1 rounded-full bg-gray-800 items-center justify-center relative top-[2px]' /> 603, Gateway Plaza, Hiranandani Gardens, Central Avenue, Mumbai - 400076</li>
                        <li className='flex items-start gap-3 text-gray-300'><HiMapPin className='text-xl p-1 rounded-full bg-gray-800 items-center justify-center relative top-[2px]' />  907, Kailash Business Park, Hiranandani Vikhroli Link Road, Vikhroli West, Mumbai - 400079</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;