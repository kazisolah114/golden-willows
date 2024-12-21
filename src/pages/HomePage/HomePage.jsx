import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import OverviewSection from './OverviewSection/OverviewSection';
import GallerySection from './GallerySection/GallerySection';
import AmenitiesSection from './AmenitiesSection/AmenitiesSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <AmenitiesSection />
        </div>
    );
};

export default HomePage;