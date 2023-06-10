import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBookmarkPlusFill } from "react-icons/bs";
import useAuth from '../Hooks/useAuth';


const Dashboard = () => {
    const { user } = useAuth()
    console.log(user)
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
                <div className="drawer-side sticky">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            (role === "admin") ? <>
                                <div className='mx-auto text-center w-3/4 my-10'>
                                    <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                    <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                    <p>{user.email}</p>
                                </div>
                                <li><NavLink to="/dashboard/manage-class"><FaUsers></FaUsers> Manage Class</NavLink></li>
                                <li><NavLink to="/dashboard/manage-user"><BiAddToQueue></BiAddToQueue> Manage User</NavLink></li>
                                <li><NavLink to="/"><IoIosHome></IoIosHome>  Home</NavLink></li>
                            </> :
                                (role === "instructor") ?
                                    <>
                                        <div className='mx-auto text-center w-3/4 my-10'>
                                            <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                            <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                        <li><NavLink to="/dashboard/add-class"> <BiAddToQueue></BiAddToQueue> Add Class</NavLink></li>
                                        <li><NavLink to="/dashboard/my-class"> <SiGoogleclassroom></SiGoogleclassroom> My Class</NavLink></li>
                                        <li><NavLink to="/"> <IoIosHome></IoIosHome> Home</NavLink></li>

                                    </> :
                                    <>
                                        <div className='mx-auto text-center w-3/4 my-10'>
                                            <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                            <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                        <li><NavLink to='enrolled-class'><BsBookmarkPlusFill></BsBookmarkPlusFill> My Enrolled Class</NavLink></li>
                                        <li><NavLink to='selected-class'><BiSelectMultiple></BiSelectMultiple> My Selected Class</NavLink></li>

                                        <li><NavLink to="/"> <IoIosHome></IoIosHome> Home</NavLink></li>
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