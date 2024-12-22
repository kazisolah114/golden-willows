"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import Amenities from '@/components/Amenities/Amenities';

const GallerySection = () => {
    const slides = [
        "/images/property-1.png",
        "/images/property-2.jpg",
        "/images/property-3.png",
        "/images/property-4.jpg",
        "/images/property-5.jpg",
    ];

    const swiperRef = useRef(null)

    return (
        <section className=" py-20">
            <div className="px-20 max-lg:px-10 max-md:px-5">
                <h4 className="text-lg mb-16">Gallery</h4>
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // modules={[Navigation, Pagination]}
                    autoplay={{
                        delay: 1000,

                    }}
                    loop={true}
                    className="pb-10"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center relative">
                                <Image src={slide} alt="slide" width={500} height={500} quality={100} priority className='w-full h-[44rem] rounded-lg object-fill' />
                                <div className="about absolute top-10 left-0 w-full flex justify-between items-center px-5">
                                    <Image src="/images/hiranandani.png" alt="img" width={150} height={150} className='' />
                                    <Image src="/images/luxury-estate.png" alt="img" width={120} height={120} className='' />
                                </div>
                                <div className='absolute top-[50%] left-0 w-full flex justify-between items-center px-5'>
                                    <button onClick={() => swiperRef.current?.slidePrev()}
                                        aria-label="Previous" className='w-20 h-20 flex items-center justify-center text-xl border-gray-200 border text-white rounded-full bg-transparent backdrop-blur-md '><HiArrowLeft /></button>
                                    <button onClick={() => swiperRef.current?.slideNext()}
                                        aria-label="Next" className='w-20 h-20 flex items-center justify-center text-xl border-gray-200 border text-white rounded-full bg-transparent backdrop-blur-md'><HiArrowRight /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Amenities />
        </section>
    );
};

export default GallerySection;
