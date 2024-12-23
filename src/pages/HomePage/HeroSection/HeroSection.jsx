import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='relative h-screen'>
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/images/hero-video.mp4"
                autoPlay
                loop
                muted
            ></video>

            {/* Overlay Content */}
            <div className='bg-black bg-opacity-40  relative z-10 flex flex-col mt-10 justify-center h-full '>
                <div className="px-20 max-lg:px-10 max-md:px-5 main-hero">
                    <h1 className='text-white text-8xl max-sm:text-[4rem] font-semibold '><span>Views beyond</span> <br /> imagination</h1>
                    <h4 className='text-3xl my-8 text-white'>Golden Willows, a Hiranandani Project in Panvel</h4>
                    <p className='text-gray-300 mb-3'>8 Buildings — Fortune City Project</p>
                    <p className='text-white lg:w-5/12 '>Indulge in opulence at the heart of Panvel with Golden Willows— seamless connectivity, world-class amenities, and stunning views.</p>
                    <button className='w-96 max-sm:w-72 bg-white p-2 rounded-md mt-8'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
