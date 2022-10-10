import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'

const Navbar = () => {
    return (
        <div className='bg-teal-400'>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <div className='flex items-center text-gray-900 text-3xl font-bold'>
                    <img className='h-20 w-20' src={logo} alt="" />
                    <p className=''>WEBorotary</p>
                </div>
                <div className='flex text-gray-900 text-2xl font-bold'>
                    <Link to='/'>Home</Link>
                    <Link className='mx-4' to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;