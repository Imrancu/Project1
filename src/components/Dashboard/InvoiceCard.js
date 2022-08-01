import React from 'react';

const InvoiceCard = ({icon, title}) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-lg text-gray-700">
            <figure className='text-primary text-2xl pl-2'><div className='bg-gray-100 p-3 rounded-full'>{icon}</div></figure>
            <div class="card-body">
                <p>{title}</p>
                <h2 class="card-title">NGN 0</h2>
            </div>
        </div>
    );
};

export default InvoiceCard;