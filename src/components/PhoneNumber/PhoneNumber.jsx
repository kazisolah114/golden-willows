import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneNumber = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-[6px] mb-5 w-full">
      <label htmlFor="phone" className="text-gray-600 text-sm">Phone Number</label>
      <PhoneInput
        country="in"
        value={value}
        onChange={onChange}
        inputStyle={{
          backgroundColor: 'transparent',
          color: 'gray',
          border: '1px solid gray',
          borderRadius: '5px',
          width: "100%",
          height: "40px",
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          borderColor: 'gray',
        }}
        dropdownStyle={{
          backgroundColor: '#1a202c',
          color: '#4F4F4F',
        }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PhoneNumber;
