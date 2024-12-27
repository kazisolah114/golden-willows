import React from 'react';
import './HeroSection.css';
import Form from './Form';

const HeroSection = () => {
    return (
        <div className='relative h-screen max-lg:h-max max-lg:py-16'>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/images/hero-video.mp4"
                autoPlay
                loop
                muted
            ></video>
            <div className='lg:bg-black lg:bg-opacity-40  relative z-10  h-full flex flex-col justify-center'>
                <div className='flex max-lg:flex-col gap-10 justify-between items-center px-20 max-lg:px-10 max-md:px-5'>
                    <div className="max-lg:hidden ">
                        <h1 className='text-white text-8xl max-sm:text-[4rem] font-semibold '><span>Views beyond</span> <br /> imagination</h1>
                        <h4 className='text-3xl my-8 text-white'>Golden Willows, a Hiranandani Project in Panvel</h4>
                        <p className='text-gray-300 mb-3'>8 Buildings — Fortune City Project</p>
                        <p className='text-white lg:w-5/12 '>Indulge in opulence at the heart of Panvel with Golden Willows— seamless connectivity, world-class amenities, and stunning views.</p>
                        <button className='w-96 max-sm:w-72 bg-white p-2 rounded-md mt-8'>Contact</button>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
