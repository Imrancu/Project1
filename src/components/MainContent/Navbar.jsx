import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosFunnel, IoMdNotifications } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <div className='flex items-center rounded bg-gray-100 my-3 mr-64 p-2'>
                <span className='text-2xl text-gray-500 px-3'><AiOutlineSearch /></span>
                <input type="text" placeholder="Search here" className=" px-3 text-gray-500 ml-3 mr-48 input w-full text-lg max-w-xs bg-gray-100" />
                <span className='text-xl text-gray-500'><IoIosFunnel /></span>
            </div>
            <div className='flex justify-end'>
                <p className='flex items-center'><IoMdNotifications/> <span className='mx-10 font-semibold text-gray-500'>Md Imran</span> <span className='bg-blue-900 text-white p-2 rounded-full text-sm mr-10'>MI</span></p>
            </div>
        </div>
    );
};

export default Navbar;