import React from 'react';
import {TbNumber1, TbNumber2} from 'react-icons/tb'

const Dashboard = () => {
    return (
        <div>
            <div className='text-center mt-8'>
                <h1 className='text-4xl font-semibold text-gray-600 mb-2'>Welcome, Imran!</h1>
                <p className='text-gray-500'>Finish these steps below to setup and verify your account.</p>
            </div>
            <div>
                <div className='flex items-center mt-12'>
                    <span className='text-blue-900 bg-gray-100 rounded-full mr-3 text-3xl p-3'><TbNumber1/></span>
                    <div>
                        <h3 className='text-xl'>Statement Account</h3>
                        <p className='text-gray-600'>Add the bank account details to receive your payouts.</p>
                    </div>
                    <button className='bg-blue-900 py-3 px-10 rounded ml-72 text-white items-end'>Continue</button>
                </div>
            </div>
            <div className='mt-12 mr-24'>
                <hr />
            </div>
            <div>
                <div className='flex items-center mt-12'>
                    <span className='text-blue-900 bg-gray-100 rounded-full mr-3 text-3xl p-3'><TbNumber2/></span>
                    <div>
                        <h3 className='text-xl'>Setup Your Profile</h3>
                        <p className='text-gray-600'>Click the continue button to setup your creator profile.</p>
                    </div>
                    <button className='bg-blue-900 py-3 px-10 rounded ml-72 text-white items-end'>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;