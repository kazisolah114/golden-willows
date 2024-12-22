"use client";
import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        projectName: '',
        unit: '',
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
        <div className='py-20 app-container'>
            <h4 className="text-lg mb-16">Access further details</h4>
            <form onSubmit={handleSubmit}>
                <div className='w-3/4 grid grid-cols-2 mx-auto gap-x-14 gap-y-20'>
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='border-b border-gray-400 outline-none py-2'
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Project Name'
                        className='border-b border-gray-400 outline-none py-2'
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Unit'
                        className='border-b border-gray-400 outline-none py-2'
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder='Enter Phone No.'
                        className='border-b border-gray-400 outline-none py-2'
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="Send"
                        className='bg-[#1E1E1E] w-56 p-3 rounded-lg text-white  text-lg cursor-pointer'
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactSection;
