"use client";
import React, { useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import OverviewSection from './OverviewSection/OverviewSection';
import GallerySection from './GallerySection/GallerySection';
import AmenitiesSection from './AmenitiesSection/AmenitiesSection';
import AccessDetails from './AccessDetails/AccessDetails';
import Floating from '@/components/Floating/Floating';
import Plan from './Plan/Plan';

const HomePage = () => {
    const [show_plan, set_show_plan] = useState(false);
    return (
        <div className='relative'>
            <Floating />
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <AmenitiesSection />
            {show_plan ? <Plan /> : <AccessDetails set_show_plan={set_show_plan} /> }
        </div>
    );
};

export default HomePage;