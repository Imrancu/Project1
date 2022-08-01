import React from 'react';
import { IoIosFunnel, IoMdNotifications } from 'react-icons/io'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between justify-items-end py-4 shadow'>
                <div class="relative ml-4 flex items-center ">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="p-2 w-96 pl-10 text-sm text-gray-900 bg-gray-100 rounded  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, type, desc, slug, etc..." required />
                    <span class="flex justify-center items-center text-gray-500 absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-32 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoIosFunnel /></span>
                </div>
                <div className='pr-4'>
                    <div className='flex items-center  space-x-6 text-gray-500'><IoMdNotifications className='text-3xl' />
                        <label for="side-drawer" tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <span>Mohammad Imran</span>
                        <div class="avatar placeholder">
                            <div class="bg-primary text-neutral-content rounded-full w-12">
                                <span>MI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;