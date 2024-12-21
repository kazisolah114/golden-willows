import React from 'react';

const ContactSection = () => {
    return (
        <div className='py-20 app-container'>
            <h4 className="text-lg mb-16">Access further details</h4>
            <form action="" method="post">
                <div className='w-3/4 grid grid-cols-2 mx-auto gap-x-14 gap-y-20'>
                    <input type="text" placeholder='Full name' className='border-b border-gray-400 outline-none pb-2' />
                    <input type="text" placeholder='Project name' className='border-b border-gray-400 outline-none pb-2' />
                    <input type="text" placeholder='Unit' className='border-b border-gray-400 outline-none pb-2' />
                    <input type="text" placeholder='Enter Phone' className='border-b border-gray-400 outline-none pb-2' />
                    <input type="submit" value="Send" className='bg-[#1E1E1E] w-56 p-3 rounded-lg text-white  text-lg cursor-pointer' />
                </div>
                
            </form>
        </div>
    );
};

export default ContactSection;