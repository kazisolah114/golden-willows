"use client";
import React, { useState } from 'react';
import { HiOutlinePhone, HiXMark } from 'react-icons/hi2';
import { FaWhatsapp } from "react-icons/fa";
import OtpInput from '../OtpInput/OtpInput';

const Floating = () => {
    const [show_enquire, set_show_enquire] = useState(false);
    const [show_form, set_show_form] = useState(false);
    const [show_zero, set_show_zero] = useState(false);
    const [show_success_message, set_show_success_message] = useState(false);

    const [otp_sent, set_otp_sent] = useState(false);
    const [isValid, setIsValid] = useState(false);

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
            set_otp_sent(true);
            if (otp_sent && isValid) {
                const response = await fetch('http://localhost:5000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (result.success) {
                    set_show_form(false); // Close the form
                    set_show_success_message(true); // Show success message
                } else {
                    alert('Error submitting form!');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form!');
            set_otp_sent(false);
        }
    };

    return (
        <div className="fixed top-1/3 max-md:top-24 right-20 max-md:right-5 z-30">
            <div>
                <h1
                    onMouseOver={() => set_show_enquire(true)}
                    className="border border-gray-400 w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl font-semibold cursor-pointer mb-4"
                >
                    <HiOutlinePhone className="text-xl" />
                </h1>
                <div
                    onMouseLeave={() => set_show_enquire(false)}
                    onClick={() => set_show_form(true)}
                    className={`${show_enquire ? '' : 'hidden'} bg-white border border-gray-400 rounded-lg p-4 w-max absolute top-0 right-0 cursor-pointer flex items-center gap-2`}
                >
                    <FaWhatsapp className="text-xl" /> <p>Enquire here</p>
                </div>
                <div
                    className={`${show_form ? '' : 'hidden'} z-20 bg-white border border-gray-400 rounded-lg p-4 w-[26rem] absolute top-0 right-0`}
                >
                    <div className="flex items-center justify-between">
                        <p>Enquire here</p>
                        <button onClick={() => set_show_form(false)}>
                            <HiXMark />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-5 mb-2">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            className="border-b border-gray-300 text-gray-800 outline-none py-2 w-full mb-7"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter Phone No."
                            name="phone"
                            className="border-b border-gray-300 text-gray-800 outline-none py-2 w-full mb-10"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <div className=' flex flex-col gap-10 items-center justify-center'>
                            <div className={`${otp_sent ? '' : 'hidden'}`}>
                                <OtpInput isValid={isValid} setIsValid={setIsValid} />
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value={otp_sent ? "Submit" : "Send OTP"}
                                    className='bg-[#1E1E1E] hover:bg-[#292828] duration-200 w-56 p-4 rounded-lg text-white   cursor-pointer'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            {show_success_message && (
                <div className="z-30 bg-white border border-gray-400 rounded-lg p-4 w-[26rem] absolute top-0 right-0">
                    <h2 className="text-2xl font-semibold mb-4">Thank you for registering your interest!</h2>
                    <p className="text-gray-800">
                        Due to high traffic, we may take some time to reach out to you. Your patience and understanding
                        will help both ways.
                    </p>
                    <button
                        onClick={() => set_show_success_message(false)}
                        className="mt-4 bg-[#1E1E1E] text-white py-2 px-4 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            )}

            <div className="relative">
                <p
                    onMouseOver={() => set_show_zero(true)}
                    className="border border-gray-400 w-14 h-14 rounded-full bg-white flex items-center justify-center text-xl text-gray-800 font-[500] cursor-pointer"
                >
                    0
                </p>
                <div
                    onMouseLeave={() => set_show_zero(false)}
                    className={`${show_zero ? '' : 'hidden'} bg-white border border-gray-400 rounded-lg p-4 w-[26rem] absolute top-0 right-0`}
                >
                    <p>Why pay extra when you don't have to? </p>
                    <h3 className="font-semibold my-5 text-2xl">
                        Your perfect space- Just a step away, no strings attached!
                    </h3>
                    <p>
                        At Golden Willows, we bring you luxury living with{' '}
                        <span className="font-semibold">zero brokerage fees</span>—because finding your dream home
                        shouldn't come with hidden costs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Floating;
