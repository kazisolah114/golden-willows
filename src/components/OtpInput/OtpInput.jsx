"use client";
import React, { useEffect, useState } from 'react';

const OtpInput = ({ set_show_plan = () => {} }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [isValid, setIsValid] = useState(false); // For checking validity
    useEffect(() => {
        // Trigger the state update in the parent component if OTP is valid
        if (isValid) {
            set_show_plan(true);
        }
    }, [isValid, set_show_plan]);
    const handleChange = (value, index) => {
        // Allow only numeric input
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Automatically focus the next input
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-${index + 1}`).focus();
            }

            // Check if OTP is full and valid (replace '1234' with real condition)
            if (newOtp.join("").length === 4) {
                setIsValid(newOtp.join("") === "1234");
            } else {
                setIsValid(false);
            }
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace to focus the previous box
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };
    return (
        <div>
            <p className='mb-3 text-gray-600'>Enter OTP</p>
            <div className="flex items-center  space-x-5">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={`w-12 h-12 text-center text-lg text-gray-600 border-2 rounded-md focus:outline-none ${otp.join("").length === 4 && isValid
                            ? "border-green-400"
                            : isValid === false && otp.join("").length === 4 ? "border-red-400"
                                : otp[index]
                                    ? "border-sky-300"
                                    : "border-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OtpInput;