import React from 'react';

const HeroSection = () => {
    return (
        <div className='bg-gray-500 py-20'>
            <div className="app-container">
                <h1 className='text-white text-8xl  font-semibold '> Views beyond <br /> imagination</h1>
                <h4 className='text-3xl my-7 text-white'>Golden Willows, a Hiranandani Project in Panvel</h4>
                <p className='text-gray-300 mb-3'>8 Buildings - Fortune City Project</p>
                <p className='text-white lg:w-5/12'>Indulge in opulence at the heart of Panvel with Golden Willows— seamless connectivity, world-class amenities, and stunning views.</p>
                <button className='flex items-center justify-center w-80 bg-white p-2 rounded-md mt-5'>Contact</button>
            </div>
        </div>
    );
};

export default HeroSection;