import React, { useState } from 'react';
import { TbNumber1, TbNumber2 } from 'react-icons/tb';
import Modal from './Modal';
import Navbar from './Navbar';

const MainContent = () => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <div className='px-16'>
            <div className='text-center mt-8'>
                <h1 className='text-2xl font-semibold text-gray-600 mb-2'>Welcome, Imran!</h1>
                <p className='text-gray-500 font-semibold'>Finish these steps below to setup and verify your account.</p>
            </div>
            <Modal />
            <div class="flex flex-col my-28">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden min-w-full">
                            <table class="w-full">
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Verify your identity</h3>
                                            <p className='text-gray-600'>Click the button to start your identity verification process</p>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <label
                                                onClick={setOpenPopup}
                                                htmlFor="popup-modal"
                                                className='btn btn-primary px-10 font-bold rounded text-white text-lg'>Verify Account</label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Link your bank account</h3>
                                            <p className='text-gray-600'>Add the bank account details to receive your payouts</p>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <label
                                                onClick={setOpenPopup}
                                                htmlFor="popup-modal"
                                                className='btn btn-primary px-16 font-bold rounded text-white text-lg'>Link Bank</label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <h3 className='font-semibold'>Set up your profile</h3>
                                            <p className='text-gray-600'>Click the button to setup your creator profile</p>
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <label
                                                onClick={setOpenPopup}
                                                htmlFor="popup-modal"
                                                className='btn btn-primary px-12 font-bold rounded text-white text-lg'>Setup Profile</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;