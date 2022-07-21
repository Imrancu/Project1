import React from 'react';
import Dashboard from './Dashboard';
import Modal from './Modal';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Dashboard/>
            <Modal/>
        </div>
    );
};

export default Home;