"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import Amenities from "@/components/Amenities/Amenities";

const GallerySection = () => {
    const slides = [
        "/images/property-1.png",
        "/images/property-2.jpg",
        "/images/property-3.png",
        "/images/property-4.jpg",
        "/images/property-5.jpg",
    ];

    const swiperRef = useRef(null);
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => setShowMore(!showMore);

    return (
        <section className="py-20">
            <div className="px-20 max-lg:px-10 max-md:px-5">
                <h4 className="text-lg mb-16">Gallery</h4>

                {/* Swiper for large screens */}
                <div className="max-md:hidden">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 1000,
                        }}
                        loop={true}
                        className="pb-10"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center relative">
                                    <Image
                                        src={slide}
                                        alt="slide"
                                        width={500}
                                        height={500}
                                        quality={100}
                                        priority
                                        className="w-full h-[44rem] rounded-lg object-fill"
                                    />
                                    <div className="about absolute top-10 left-0 w-full flex justify-between items-center px-5">
                                        <Image
                                            src="/images/hiranandani.png"
                                            alt="img"
                                            width={150}
                                            height={150}
                                            className=""
                                        />
                                        <Image
                                            src="/images/luxury-estate.png"
                                            alt="img"
                                            width={120}
                                            height={120}
                                            className=""
                                        />
                                    </div>
                                    <div className="absolute top-[50%] left-0 w-full flex justify-between items-center px-5">
                                        <button
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            aria-label="Previous"
                                            className="w-20 h-20 flex items-center justify-center text-xl border-gray-200 border text-white rounded-full bg-transparent backdrop-blur-md"
                                        >
                                            <HiArrowLeft />
                                        </button>
                                        <button
                                            onClick={() => swiperRef.current?.slideNext()}
                                            aria-label="Next"
                                            className="w-20 h-20 flex items-center justify-center text-xl border-gray-200 border text-white rounded-full bg-transparent backdrop-blur-md"
                                        >
                                            <HiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Grid for small screens */}
                <div className="hidden max-md:block">
                    <div className="grid grid-cols-1 gap-5">
                        {/* First two images */}
                        {slides.slice(0, 2).map((slide, index) => (
                            <div key={index} className="rounded-lg overflow-hidden">
                                <Image
                                    src={slide}
                                    alt={`Gallery image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Additional images */}
                    {showMore && (
                        <div className="grid grid-cols-3 gap-5 mt-5">
                            {/* First row: col-span-2 vs col-span-1 */}
                            <div className="col-span-2 rounded-lg overflow-hidden">
                                <Image
                                    src={slides[2]}
                                    alt="Gallery image 3"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src={slides[3]}
                                    alt="Gallery image 4"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Second row: col-span-1 vs col-span-2 */}
                            <div className="col-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src={slides[3]}
                                    alt="Gallery image 4"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-2 rounded-lg overflow-hidden">
                                <Image
                                    src={slides[4]}
                                    alt="Gallery image 5"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    )}

                    {/* Show More / Show Less Button */}
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={toggleShowMore}
                            className="px-5 py-2 text-gray-800 rounded-md font-[500] transition-colors duration-300"
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>
            <Amenities />
        </section>
    );
};

export default GallerySection;
