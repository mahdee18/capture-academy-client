import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const role = 'admin'
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            (role === "admin") ? <>
                                <li><NavLink to="/dashboard/manage-class"><FaUsers></FaUsers> Manage Class</NavLink></li>
                                <li><NavLink to="/dashboard/manage-user"><FaUsers></FaUsers> Manage User</NavLink></li>
                                <li><NavLink to="/"><FaHome></FaHome>  Home</NavLink></li>
                            </> :
                                (role === "instructor") ?
                                    <>
                                        <li><NavLink to="/dashboard/"> Add Class</NavLink></li>
                                        <li><NavLink to="/dashboard/"> MY Class</NavLink></li>
                                        <li><NavLink to="/"> Home</NavLink></li>

                                    </> :
                                    <>
                                        <li><NavLink>My Enrolled Class</NavLink></li>
                                        <li><NavLink>My Select Class</NavLink></li>
                                        <li><NavLink to="/"> Home</NavLink></li>
                                    </>

                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;