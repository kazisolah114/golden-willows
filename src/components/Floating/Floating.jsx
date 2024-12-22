"use client";
import React, { useState } from 'react';
import { HiOutlinePhone, HiXMark } from 'react-icons/hi2';
import { FaWhatsapp } from "react-icons/fa";

const Floating = () => {
    const [show_enquire, set_show_enquire] = useState(false);
    const [show_form, set_show_form] = useState(false);
    const [show_zero, set_show_zero] = useState(false);

    // Form submission
    const [formData, setFormData] = useState({
        fullName: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) 
            });

            const result = await response.json();
            console.log("result: ", result)
            if (result.success) {
                alert('Form submitted successfully!');
            } else {
                alert('Error submitting form!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form!');
        }
    };

    return (
        <div className='fixed top-1/3 right-10  z-50 '>
            <div>
                <h1 onMouseOver={() => set_show_enquire(true)} className='border border-gray-400 w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl font-semibold cursor-pointer mb-4'><HiOutlinePhone className='text-xl' /></h1>
                <div onMouseLeave={() => set_show_enquire(false)} onClick={() => set_show_form(true)} className={`${show_enquire ? '' : 'hidden'} bg-white border border-gray-400 rounded-lg p-4 w-max absolute top-0 right-0 cursor-pointer flex items-center gap-2`}>
                    <FaWhatsapp className='text-xl' /> <p>Enquire here</p>
                </div>
                <div className={`${show_form ? '' : 'hidden'} z-20 bg-white border border-gray-400 rounded-lg p-4 w-[26rem] absolute top-0 right-0`}>
                    <div className='flex items-center justify-between'>
                        <p>Enquire here</p>
                        <button onClick={() => set_show_form(false)}><HiXMark /></button>
                    </div>
                    <form onSubmit={handleSubmit} className='mt-5 mb-2'>
                        <input
                            type="text"
                            placeholder='Full Name'
                            name="fullName"
                            className='border-b border-gray-300 text-gray-800 outline-none py-2 w-full mb-7'
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Enter Phone No.'
                            name="phone"
                            className='border-b border-gray-300 text-gray-800 outline-none py-2 w-full mb-10'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className='bg-[#1E1E1E] w-full p-2 rounded-lg text-white  text-lg cursor-pointer'
                        />
                    </form>
                </div>
            </div>
            <div className='relative'>
                <h1 onMouseOver={() => set_show_zero(true)} className='border border-gray-400 w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl font-semibold cursor-pointer'>0</h1>
                <div onMouseLeave={() => set_show_zero(false)} className={`${show_zero ? '' : 'hidden'} bg-white border border-gray-400 rounded-lg p-4 w-[26rem] absolute top-0 right-0`}>
                    <p>Why pay extra when you don't have to? </p>
                    <h3 className='font-semibold my-5 text-2xl'> Your perfect space-
                        Just a step away, no strings attached!</h3>
                    <p>At Golden Willows, we bring you luxury living with
                        <span className='font-semibold'> zero brokerage fees</span>—because finding your dream home shouldn't come with hidden costs.</p>
                </div>
            </div>
        </div>
    );
};

export default Floating;