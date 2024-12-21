"use client";
import React, { useState } from 'react';

const OverviewSection = () => {
    const overview_data = {
        category: "Residential", status: "Under Construction", configurations: "1, 2, 3 & 4 BHK", project_size: "8 Buildings", location: "Survey No. 30, Bhokharpada Village NH-4, Raigad, Panvel", city: "Navi Mumbai", avg_price: "17.58 K - ₹18.49 K/sq.ft"
    }
    const [current_section, set_current_section] = useState("first");
    return (
        <div className='app-container py-20'>
            <h4 className='text-lg mb-28'>Overview</h4>
            <div className='grid grid-cols-8'>
                <div className="actions">Actions</div>
                <div className="sections col-span-7">
                    {current_section === "first" ?
                        <section className='grid grid-cols-2 gap-44 items-center'>
                            <div>
                                <h3 className='text-3xl font-semibold mb-20'>Step into your next lavish abode</h3>
                                <p className='mb-5'>Each 1 BHK to 4 BHK residence is an elegant sanctuary of space and sophistication.</p>
                                <p>Surrounded by lush, landscaped gardens and filled with natural light, these homes are paired with exceptional amenities, including a modern clubhouse, a rejuvenating pool, and a fully equipped gym.</p>
                            </div>
                            <div>
                                <ul className='flex flex-col gap-5'>
                                    <li className='border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]'>Category <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.category}</span></li>
                                    <li className='border-b border-gray-300 pb-4 grid grid-cols-3 gap-5 font-[500]'>Status <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.status}</span></li>
                                    <li className='border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]'>Configurations <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.configurations}</span></li>
                                    <li className='border-b border-gray-300 pb-4 grid grid-cols-3 gap-5 font-[500]'>Project Size <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.project_size}</span></li>
                                    <li className='border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]'>Location <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.location}</span></li>
                                    <li className='border-b border-gray-300 pb-4 grid grid-cols-3 gap-5 font-[500]'>City <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.city}</span></li>
                                    <li className='border-b border-gray-300 pb-4 grid grid-cols-3 gap-5 font-[500]'>Avg. Price <span className='font-normal text-[#1E1E1E] col-span-2'>{overview_data.avg_price}</span></li>
                                </ul>
                            </div>
                        </section> :
                        current_section === "second" ?
                            <section></section> :
                            current_section === "third" ?
                                <section></section> : 'NONE'
                    }
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;