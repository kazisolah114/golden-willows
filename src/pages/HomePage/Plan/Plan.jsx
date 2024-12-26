"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Plan = () => {
    const plans = [
        { configurations: "1 BHK", carpet_area: "492 Sq. ft.", price: "₹ 81 Lacs*", floor_plan: "/images/acacia.png", unit_plan: "/images/lavender.png" },
        { configurations: "2 BHK", carpet_area: "645 Sq. ft.", price: "₹ 1.1 Cr*", floor_plan: "/images/lavender.png", unit_plan: "/images/acacia.png" },
        { configurations: "3 BHK", carpet_area: "850 Sq. ft.", price: "₹ 1.6 Cr*", floor_plan: "/images/marigold.png", unit_plan: "/images/acacia.png" },
        { configurations: "4 BHK", carpet_area: "1250 Sq. ft.", price: "₹ 2.4 Cr*", floor_plan: "/images/aster.png", unit_plan: "/images/acacia.png" },
    ];

    const [current_config, set_current_config] = useState("1 BHK");

    const current_plan = plans.find(plan => plan.configurations === current_config);
    const [plan, set_plan] = useState("floor")
    return (
        <section className='px-20 max-lg:px-10 max-md:px-5 py-36' id="plans">
            <p className="text-lg mb-5">Plan</p>
            <div className='grid grid-cols-2 max-md:grid-cols-1  gap-28 items-center'>
                <div>
                    <h2 className='text-3xl  mb-10'>A Detailed Exploration of Your Dream Home</h2>
                    <div>
                        <ul className="flex items-center gap-2">
                            {plans.map((plan, index) => (
                                <li
                                    key={index}
                                    onClick={() => set_current_config(plan.configurations)}
                                    className={`${current_config === plan.configurations
                                        ? "border-gray-400 text-black"
                                        : "border-transparent text-gray-400"
                                        } border rounded-md w-14 h-7 flex items-center justify-center font-[500] text-sm cursor-pointer`}
                                >
                                    {plan.configurations}
                                </li>
                            ))}
                        </ul>
                        {current_plan && (
                            <ul className="mt-10 md:w-3/5">
                                <li className="text-gray-700 grid grid-cols-2 border-b pb-4 mb-4"><span className='font-[500] text-black '>Configuration</span> {current_plan.configurations}</li>
                                <li className="text-gray-700 grid grid-cols-2 border-b pb-4 mb-4"><span className='font-[500] text-black '>Carpet area</span> {current_plan.carpet_area}</li>
                                <li className="text-gray-700 grid grid-cols-2  font-semibold text-lg"><span className='font-[500] text-black text-base '>Price</span> {current_plan.price}</li>
                            </ul>

                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className='flex items-center gap-1'>
                        <button onClick={() => set_plan("floor")} className={`${plan === "floor" ? 'border-gray-400 text-black' : 'border-transparent  text-gray-400'} border rounded-md w-24 h-9 flex items-center justify-center font-[500]`}>Floor Plan</button>
                        <button onClick={() => set_plan("unit")} className={`${plan === "unit" ? 'border-gray-400 text-black' : 'border-transparent  text-gray-400'} border rounded-md w-24 h-9 flex items-center justify-center font-[500]`}>Unit Plan</button>
                    </div>
                    {current_plan && (
                        <Image src={plan === "floor" ? current_plan.floor_plan : current_plan.unit_plan} alt={plan === "floor" ? current_plan.floor_plan : current_plan.unit_plan} width={500} height={500} className='' />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Plan;