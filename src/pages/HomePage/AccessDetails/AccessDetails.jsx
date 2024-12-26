"use client";
import OtpInput from '@/components/OtpInput/OtpInput';
import React, { useState } from 'react';

const AccessDetails = ({ set_show_plan }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        projectName: '',
        unit: '',
        phone: '',
        otp: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [otp_sent, set_otp_sent] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            set_otp_sent(true);
            if (otp_sent && isValid) {
                const response = await fetch('https://golden-willows-server.vercel.app/api/contact', {
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
                    set_show_plan("true");
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
        <div className='py-36 px-20 max-lg:px-10 max-md:px-5' id="plans">
            <p className="text-lg mb-16">Access further details</p>
            <form onSubmit={handleSubmit}>
                <div className='md:w-3/4 mx-auto grid grid-cols-2  gap-x-14 max-sm:gap-x-5 gap-y-20'>
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='border-b border-gray-400 outline-none py-2'
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Project Name'
                        className='border-b border-gray-400 outline-none py-2'
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Unit'
                        className='border-b border-gray-400 outline-none py-2'
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter Phone No.'
                        className='border-b border-gray-400 outline-none py-2'
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='mt-16 flex flex-col gap-10 items-center justify-center'>
                    <div className={`${otp_sent ? '' : 'hidden'}`}>
                        <OtpInput isValid={isValid} setIsValid={setIsValid} />
                    </div>
                    <div>
                        {otp_sent ? <input
                            type="submit"
                            value={"Access Plan"}
                            // onClick={handleAccessPlanClicked}
                            className='bg-[#1E1E1E] hover:bg-[#292828] duration-200 w-56 p-4 rounded-lg text-white   cursor-pointer'
                        /> : <input
                            type="submit"
                            value={"Send OTP"}
                            className='bg-[#1E1E1E] hover:bg-[#292828] duration-200 w-56 p-4 rounded-lg text-white   cursor-pointer'
                        />}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AccessDetails;
