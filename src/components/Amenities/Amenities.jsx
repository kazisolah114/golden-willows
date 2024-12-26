import React from 'react';
import Marquee from "react-fast-marquee";
import { HiOutlineCheck, HiOutlineCheckBadge, HiOutlineUser, HiUser } from 'react-icons/hi2';

const Amenities = () => {
    const amenities = [
        {title: "Amphitheater", logo: ""},
        {title: "Cricket Pitch", logo: ""},
        {title: "Wall Climbing", logo: ""},
        {title: "Gazebo", logo: ""},
        {title: "Barbecue Area", logo: ""},
        {title: "Reflexology Park", logo: ""},
        {title: "Skating Rink", logo: ""},
        {title: "Landscaping & Tree", logo: ""},
        {title: "Gymnasium", logo: ""},
        {title: "Car Parking", logo: ""},
        {title: "Jogging Track", logo: ""},
        {title: "Multipurpose Hall", logo: ""},
        {title: "Senior Citizen Siteout", logo: ""},
        {title: "Yoga/Meditation Area", logo: ""},
        {title: "Indoor Games", logo: ""},
        {title: "Business Center", logo: ""},
    ]
    return (
        <div className='mt-20'>
            <Marquee speed={40} className=''>
                {amenities.map((item, index) => <div key={index} className='ml-14 flex items-center flex-col gap-3'>
                    <HiOutlineCheckBadge className='text-3xl' />
                    {item.title}
                </div>)}
            </Marquee>
        </div>
    );
};

export default Amenities;