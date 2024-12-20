"use client";
import Image from "next/image";
import React, { useState } from "react";
import './OverviewSection.css'

const OverviewSection = () => {
    const overview_data = {
        category: "Residential", status: "Under Construction", configurations: "1, 2, 3 & 4 BHK", project_size: "8 Buildings", location: "Survey No. 30, Bhokharpada Village NH-4, Raigad, Panvel", city: "Navi Mumbai", avg_price: "17.58 K - ₹18.49 K/sq.ft"
    };
    const [current_section, set_current_section] = useState("first");

    return (
        <div className="app-container py-20">
            <h4 className="text-lg mb-28">Overview</h4>
            <div className="grid grid-cols-8">
                <div className="actions flex flex-col gap-3">
                    {["first", "second", "third"].map((section) => (
                        <button
                            key={section}
                            onClick={() => set_current_section(section)}
                            className={`${
                                current_section === section
                                    ? "w-20 bg-gray-800 scale-105"
                                    : "w-14 bg-gray-300"
                            } h-2 rounded-full transition-all duration-300`}
                        ></button>
                    ))}
                </div>
                <div className="sections col-span-7 relative overflow-hidden">
                    {current_section === "first" && (
                        <section
                            className="grid grid-cols-2 gap-44 items-center animate-slide-in-up"
                        >
                            <div>
                                <h3 className="text-3xl font-semibold mb-20 animate-fade-in">
                                    Step into your next lavish abode
                                </h3>
                                <p className="mb-5 animate-fade-in">
                                    Each 1 BHK to 4 BHK residence is an elegant
                                    sanctuary of space and sophistication.
                                </p>
                                <p className="animate-fade-in">
                                    Surrounded by lush, landscaped gardens and
                                    filled with natural light, these homes are
                                    paired with exceptional amenities, including
                                    a modern clubhouse, a rejuvenating pool, and
                                    a fully equipped gym.
                                </p>
                            </div>
                            <div className="animate-slide-in-up">
                                <ul className="flex flex-col gap-5">
                                    {Object.keys(overview_data).map((key) => (
                                        <li
                                            key={key}
                                            className="border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]"
                                        >
                                            {key.charAt(0).toUpperCase() +
                                                key.slice(1)}
                                            <span className="font-normal text-[#1E1E1E] col-span-2">
                                                {overview_data[key]}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}
                    {current_section === "second" && (
                        <section
                            className="grid grid-cols-2 gap-44 items-center animate-fade-in"
                        >
                            <div>
                                <h3 className="text-3xl font-semibold mb-20">
                                    Say Bye to long commutes
                                </h3>
                                <p className="mb-5">
                                    Set in the vibrant suburbs of Panvel, Golden
                                    Willows offers connectivity to the upcoming
                                    Navi Mumbai International Airport with metro
                                    and Yotta- Asia's Largest Data Center.
                                </p>
                                <p>
                                    This exclusive address offers a school,
                                    hospital, mall, restaurants and a bus stand
                                    all within a minutes reach.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="/images/map.png"
                                    alt="map_map"
                                    width={500}
                                    height={500}
                                    className="w-full h-96 rounded-md animate-slide-in-up"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </section>
                    )}
                    {current_section === "third" && (
                        <section
                            className="grid grid-cols-2 gap-44 items-center animate-slide-in-up"
                        >
                            <div>
                                <h3 className="text-3xl font-semibold mb-20">
                                    Silence, Serentity and Beauty come together
                                    here
                                </h3>
                                <p className="mb-5">
                                    Surrounded by verdant landscapes and
                                    designed with impeccable precision, this
                                    residence redefines modern luxury.
                                </p>
                                <p>
                                    Here, every detail speaks to a life
                                    elevated—where the serenity of nature meets
                                    peak comfort.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="/images/overview.jpg"
                                    alt="overview_map"
                                    width={500}
                                    height={500}
                                    className="w-full h-96 rounded-md animate-fade-in"
                                    quality={100}
                                    priority
                                />
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;
