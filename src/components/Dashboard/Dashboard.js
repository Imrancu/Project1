import React from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import MainContent from './MainContent';
import Navbar from './Navbar';
import logo from '../../assets/logo-white.png'
import Modal from './Modal';
import Sidebar from './Sidebar';
import CreateInvoice from './CreateInvoice';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="side-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Navbar />                   
                    <Outlet />
                    {/* <!-- Page content here --> */}

                </div>
                <div class="drawer-side">
                    <label for="side-drawer" class="drawer-overlay"></label>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;