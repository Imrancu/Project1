import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineDelete } from 'react-icons/ai'
import { ImImage } from 'react-icons/im'
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

const CreateInvoice = () => {
    const itemTemplate = { itemName: '', itemQuantity: "", price: "", total: "" }
    const [items, setItems] = useState([itemTemplate])
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "#f0f0f0" }}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };

    const addNewItem = () => {
        setItems(...items, itemTemplate)
    }
    return (
        <div className='mx-10'>
            <h2 className='text-xl font-semibold flex items-center text-gray-700'><AiOutlineArrowLeft className='mr-5 my-14' /> Create New Invoice</h2>
            <div className='shadow border-2 px-6 pb-16'>
                <div className='flex justify-between py-6'>
                    <div>
                        <div className='flex flex-col items-center justify-center p-16 bg-gray-100 relative'>
                            <div className='p-7 rounded-full bg-white text-2xl cursor-pointer'><ImImage /></div>
                            <input className='absolute opacity-0 text-transparent' type="file" placeholder='Upload Photo' />
                            <span className='cursor-pointer'>Add Your Logo</span>
                        </div>
                    </div>
                    <div>
                        <div class="form-control w-96 text-right">
                            <label class="label">
                                <span class="label-text-alt text-xl">Invoice Number</span>
                            </label>
                            <input type="text" placeholder="1234" class="input input-lg input-bordered" />
                            <label class="label">
                                <span class="label-text-alt text-xl">Invoice Title</span>
                            </label>
                            <input type="text" placeholder="Enter the title for this invoice" class="input input-lg input-bordered" />
                            <label class="label">
                                <span class="label-text-alt text-xl">Invoice Description</span>
                            </label>
                            <textarea class="textarea text-xl textarea-bordered pb-7" placeholder="E.G project information or service rendered"></textarea>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <h3 className='text-xl mb-4'>BILL TO:</h3>
                <div>
                    <div class="flex justify-between">
                        <div>
                            <label htmlFor="" className='text-xl'>Customer Name</label> <br />
                            <input type="text" placeholder='John Doe' className='border-2 w-96 py-5 px-5 rounded-lg mt-2 mb-2' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl'>Customer Email</label> <br />
                            <input type="Email" placeholder="john@gmail.com" className='border-2 w-96 py-5 px-5 rounded-lg mt-2 mb-2' />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <label htmlFor="" className='text-xl'>Invoice Date</label> <br />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className='border-2 w-96 py-5 px-5 rounded-lg mt-2'
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl'>Due Date</label> <br />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className='border-2 w-96 py-5 px-5 rounded-lg mt-2'
                            />
                        </div>
                    </div>
                    <div className='my-10'>
                        <div className='grid grid-cols-5 font-semibold rounded-lg text-gray-600 bg-gray-100 p-4'>
                            <h3 className='col-span-2'>ITEMS</h3>
                            <h3>QUANTITY</h3>
                            <h3>PRICE</h3>
                            <h3>TOTAL</h3>
                        </div>
                        <div>
                            {/* <div className='grid grid-cols-6 gap-4 font-semibold text-gray-600 p-2'>
                                <input
                                    className='p-4 text-lg border-2 rounded-lg col-span-2'
                                    type='text'
                                    placeholder='Enter an Item' />
                                <input
                                    className='p-4 text-lg border-2 rounded-lg ml-8 text-center'
                                    type='text'
                                    placeholder='1' />
                                <input
                                    className='p-4 text-lg border-2 rounded-lg mr-[-24px]'
                                    type='text'
                                    placeholder='NGN: 00' />
                                <input
                                    className='p-4 text-lg border-2 rounded-lg ml-8 mr-[-24px]'
                                    type='text'
                                    placeholder='NGN: 00' />
                                <span className='flex justify-center items-center text-red-600 cursor-pointer text-4xl'>
                                    <AiOutlineDelete />
                                </span>
                            </div>
                            <hr /> */}
                        </div>

                        {
                            items.map((item, index) => (
                                <div key={index}>
                                    <div className='grid grid-cols-6 gap-4 font-semibold text-gray-600 p-2'>
                                        <input
                                            className='p-4 text-lg border-2 rounded-lg col-span-2'
                                            name='item'
                                            type='text'
                                            placeholder='Enter an Item' />
                                        <input
                                            className='p-4 text-lg border-2 rounded-lg ml-8 text-center'
                                            name='itemQuantity'
                                            type='text'
                                            placeholder='1' />
                                        <input
                                            className='p-4 text-lg border-2 rounded-lg mr-[-24px]'
                                            name='price'
                                            type='text'
                                            placeholder='NGN: 00' />
                                        <input
                                            className='p-4 text-lg border-2 rounded-lg ml-8 mr-[-24px]'
                                            name='total'
                                            type='text'
                                            placeholder='NGN: 00' />
                                        <span className='flex justify-center items-center text-red-600 cursor-pointer text-4xl'>
                                            <AiOutlineDelete />
                                        </span>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }

                        <div className='flex justify-end'>
                            <button onClick={addNewItem} className='text-xl text-primary font-semibold mt-10'>+ Add New Item</button>
                        </div>
                    </div>
                    <div className='text-right text-gray-700 text-xl font-semibold border-t-2 border-b-2'>
                        <p className='py-4'>SUBTOTAL: <span className='ml-72 text-gray-500'>NGO:00</span></p>
                        <p className='py-4'>TOTAL: <span className='ml-72 text-gray-500'>NGO:00</span></p>
                    </div>
                    <div className='flex text-md font-medium my-5'>
                        <input className='mr-3' type="checkbox" name="" id="check" />
                        <label htmlFor='check'>Enable online payment for this invoice</label>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-xl mb-3'>Notes/Terms</p>
                            <textarea placeholder='...' className='border-2 rounded-lg p-5' name="" id="" cols="40" rows="4"></textarea>
                        </div>
                        <div>
                            <p className='text-xl mb-3 text-right'>Notes/Terms</p>
                            <textarea placeholder='Address, Phone Number Or Website' className='border-2 rounded-lg p-5' name="" id="" cols="40" rows="4"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end space-x-5 mt-8 mb-20'>
                <button className='btn btn-primary btn-outline text-white'><Link to='/'>Preview</Link></button>
                <button className='btn btn-primary text-white'><Link to='/'>Continue</Link></button>
            </div>
        </div>
    );
};

export default CreateInvoice;