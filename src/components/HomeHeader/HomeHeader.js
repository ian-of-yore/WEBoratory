import React from 'react';
import HomeHeaderImg from '../../images/HomeHeader.png'
import img from '../../images/img-background.png'

const HomeHeader = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-around mt-16 w-11/12 mx-auto items-center bg-emerald-700 rounded-xl'>
                <div className=' px-10 text-gray-100'>
                    <p className='text-4xl font-semibold mb-3'>WEBoratory</p>
                    <p className='text-2xl font-medium'>The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform.</p>
                    <button className='border-2 bg-teal-600 text-white p-2 rounded-lg text-xl font-semibold mt-5 hover:bg-gray-700'>Start Your Journey</button>
                </div>
                <div className='w-2/4 flex justify-center'>
                    <img className='w-full rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;