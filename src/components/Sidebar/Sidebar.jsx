import React from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TiHome } from 'react-icons/ti';
import { MdManageAccounts } from 'react-icons/md'
const Sidebar = () => {
    return (
        <div className='bg-gray-100 py-8 pl-9 pr-24'>
            <h3 className='text-lg font-semibold text-blue-900 flex justify-center items-center'><BsFillLightningChargeFill /> <span className='ml-4'>Get Started</span></h3>
            <div>
                <h5 className='uppercase text-sm mt-4 font-semibold text-gray-500'>overview</h5>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><TiHome /> <span className='ml-2'>Home</span></p>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>My Profile</span></p>
            </div>
            <div>
                <h5 className='uppercase text-sm mt-4 font-semibold text-gray-500'>payment</h5>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><TiHome /> <span className='ml-2'>Payment Links</span></p>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Transfer</span></p>
            </div>
            <div>
                <h5 className='uppercase text-sm mt-4 font-semibold text-gray-500'>commerce</h5>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><TiHome /> <span className='ml-2'>Product Pages</span></p>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Invoicing</span></p>
            </div>
            <div>
                <h5 className='uppercase text-sm mt-4 font-semibold text-gray-500'>settings</h5>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><TiHome /> <span className='ml-2'>Payouts</span></p>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Integrations</span></p>
                <p className='font-semibold text-sm mt-4 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Referrals</span></p>
            </div>
            <div>
            <p className='font-semibold text-lg mt-9 text-gray-500 flex justify-start items-center'><MdManageAccounts /> <span className='ml-2'>Logout</span></p>
            </div>
        </div>
    );
};

export default Sidebar;