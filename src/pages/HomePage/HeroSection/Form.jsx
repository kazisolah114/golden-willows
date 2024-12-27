import PhoneNumber from '@/components/PhoneNumber/PhoneNumber';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        plans: [],
    });
    const [errors, setErrors] = useState({
        phone: '',
    });

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
        const phoneDigits = value.replace(/[^0-9]/g, '');
        if (phoneDigits.length > 15) {
            setErrors({ ...errors, phone: 'Phone number must be up to 15 digits only.' });
        } else if (phoneDigits.length < 10) {
            setErrors({ ...errors, phone: 'Phone number must be at least 10 digits long.' });
        } else {
            setErrors({ ...errors, phone: '' });
        }
    };

    const handlePlanChange = (plan) => {
        setFormData((prevState) => {
            const plans = prevState.plans.includes(plan)
                ? prevState.plans.filter((p) => p !== plan)
                : [...prevState.plans, plan];
            return { ...prevState, plans };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            setErrors({ ...errors, phone: 'Please enter a valid phone number.' });
            return;
        }
        alert(`Form submitted:
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Plans: ${formData.plans.length ? formData.plans.join(', ') : 'No plans selected'}`);
    };

    return (
        <div className="bg-white border rounded-lg p-5 w-[26rem] max-md:w-full">
            <h2 className="text-center text-[27px] font-semibold text-gray-800">Get Started With Your Hassle-Free Journey!</h2>
            <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-[6px] mb-5">
                    <label htmlFor="name" className="text-gray-600 text-sm">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        name="fullName"
                        id="name"
                        className="bg-transparent border border-gray-400 text-gray-800 outline-none rounded p-2 w-full"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-[6px] mb-5">
                    <label htmlFor="email" className="text-gray-600 text-sm">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        id="email"
                        className="bg-transparent border border-gray-400 text-gray-800 outline-none rounded p-2 w-full"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <PhoneNumber
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    error={errors.phone}
                />
                <div className="flex flex-col gap-[6px] mb-7">
                    <label className="text-gray-600 text-sm">Select the plans below</label>
                    <div className="flex items-center justify-between">
                        {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((plan) => (
                            <div key={plan} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={plan}
                                    className="w-4 h-4 cursor-pointer"
                                    onChange={() => handlePlanChange(plan)}
                                    checked={formData.plans.includes(plan)}
                                />
                                <label htmlFor={plan} className="text-gray-800 text-[15px] cursor-pointer">{plan}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-[#1E1E1E] hover:bg-[#292828] duration-200 w-full p-3 rounded-lg text-white cursor-pointer"
                    >
                        Talk to us
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
