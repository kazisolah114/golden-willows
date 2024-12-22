import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import OverviewSection from './OverviewSection/OverviewSection';
import GallerySection from './GallerySection/GallerySection';
import AmenitiesSection from './AmenitiesSection/AmenitiesSection';
import ContactSection from './ContactSection/ContactSection';
import Floating from '@/components/Floating/Floating';

const HomePage = () => {
    return (
        <div className='relative'>
            <Floating />
            <HeroSection />
            <OverviewSection />
            <GallerySection />
            <AmenitiesSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;