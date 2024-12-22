import React from 'react';

const AmenitiesSection = () => {
    return (
        <div className='px-20 max-lg:px-10 max-md:px-5 py-20'>
            <h4 className="text-lg mb-16">Amenities</h4>
            <div className='flex justify-center'>
                <video width={200} height={200}  autoPlay loop muted className='w-3/5 max-md:w-11/12 rounded-lg'>
                    <source src='/images/amenities.mp4' type='video/mp4' />
                </video>
            </div>
        </div>
    );
};

export default AmenitiesSection;