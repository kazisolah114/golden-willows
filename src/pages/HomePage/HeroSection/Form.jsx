import React from 'react';

const Form = () => {
    return (
        <div className='bg-white/50 backdrop-blur border rounded-lg p-5 w-[26rem] max-md:w-full'>
            <h2 className='text-center text-2xl font-semibold text-white'>Get Started With Zero Hassle!</h2>
            <form action="" className='mt-8'>
                <div className='flex flex-col gap-1 mb-5'>
                    <label htmlFor="name" className='text-white'>Full Name</label>
                    <input type="text" placeholder='Enter Name' name='fullName' id="name" className='bg-transparent border border-white text-white outline-none rounded p-2  w-full ' required />
                </div>
                <div className='flex flex-col gap-1 mb-5'>
                    <label htmlFor="email" className='text-white'>Email Address</label>
                    <input type="text" placeholder='Enter email' name='email' id="email" className='bg-transparent border border-white text-white outline-none rounded p-2  w-full ' required />
                </div>
                <div className='flex flex-col gap-1 mb-5'>
                    <label htmlFor="phone" className='text-white'>Phone Number</label>
                    <input type="text" placeholder='Enter Phone' name='phone' id="phone" className='bg-transparent border border-white text-white outline-none rounded p-2 w-full ' required />
                </div>
                <div className='flex flex-col gap-1 mb-5'>
                    <label className='text-white'>Select the plans below</label>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' id="1bhk" className='w-4 h-4 cursor-pointer' />
                            <label htmlFor="1bhk" className='text-white cursor-pointer'>1 BHK</label>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <input type='checkbox' id="2bhk" className='w-4 h-4 cursor-pointer' />
                            <label htmlFor="2bhk" className='text-white cursor-pointer'>2 BHK</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' id="3bhk" className='w-4 h-4 cursor-pointer' />
                            <label htmlFor="3bhk" className='text-white cursor-pointer'>3 BHK</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' id="4bhk" className='w-4 h-4 cursor-pointer' />
                            <label htmlFor="4bhk" className='text-white cursor-pointer'>4 BHK</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 mb-5'>
                    <label htmlFor="details" className='text-white'>Details of Flat / Apartment / Property / Site </label>
                    <input type="text" placeholder='Details' name='details' id="details" className='bg-transparent border border-white text-white outline-none rounded p-2 w-full ' required />
                </div>
                <div>
                    <input type="submit" value="Talk to us" className='bg-[#1E1E1E] hover:bg-[#292828] duration-200 w-full p-4 rounded-lg text-white   cursor-pointer' />
                </div>
            </form>
        </div>
    );
};

export default Form;