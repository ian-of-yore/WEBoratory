import React from 'react';
import img from '../../images/img-background.png'

const HomeHeader = () => {
    return (
        <div className='w-full'>
            <div className='grid sm:grid-cols-3 mt-16 w-11/12 mx-auto bg-slate-800 rounded-xl'>
                <div className='w-full sm:flex order-first sm:order-last'>
                    <img className='w-full rounded-xl' src={img} alt="" />
                </div>
                <div className='sm:col-span-2 py-8 px-10 text-gray-100'>
                    <p className='text-4xl font-semibold mb-3'>WEBoratory</p>
                    <p className='text-2xl font-medium'>The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform.</p>
                    <button className='border-2 bg-gray-700 text-white p-2 rounded-lg text-xl font-semibold mt-5 hover:bg-stone-500'>Start Your Journey</button>
                </div>

            </div>
        </div>
    );
};

export default HomeHeader;