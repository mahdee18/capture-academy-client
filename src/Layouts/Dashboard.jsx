import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { FaHistory, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsBookmarkPlusFill } from "react-icons/bs";
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


const Dashboard = () => {
    const { user } = useAuth()
    console.log(user)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
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
                    <label htmlFor="my-drawer-2" className=""></label>
                    <ul className="menu p-4 w-80 h-full text-black  ">
                        {
                            isAdmin ? <>
                                <div className='mx-auto text-center w-3/4 my-10'>
                                    <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                    <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                    <p>{user.email}</p>
                                </div>
                                <li><Link to="/dashboard/manage-class"><FaUsers></FaUsers> Manage Class</Link></li>
                                <li><Link to="/dashboard/manage-user"><BiAddToQueue></BiAddToQueue> Manage User</Link></li>
                                <li><Link to="/"><IoIosHome></IoIosHome>  Home</Link></li>
                            </> :
                                isInstructor ?
                                    <>
                                        <div className='mx-auto text-center w-3/4 my-10'>
                                            <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                            <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                        <li><Link to="/dashboard/add-class"> <BiAddToQueue></BiAddToQueue> Add Class</Link></li>
                                        <li><Link to="/dashboard/my-class"> <SiGoogleclassroom></SiGoogleclassroom> My Class</Link></li>
                                        <li><Link to="/"> <IoIosHome></IoIosHome> Home</Link></li>

                                    </> :
                                    <>
                                        <div className='mx-auto text-center w-3/4 my-10'>
                                            <img src={user.photoURL} className='mx-auto rounded-full' alt="" />
                                            <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                        <li><Link to='enrolled-class'><BsBookmarkPlusFill></BsBookmarkPlusFill> My Enrolled Class</Link></li>
                                        <li><Link to='selected-class'><BiSelectMultiple></BiSelectMultiple> My Selected Class</Link></li>
                                        <li><Link to='payment-history'><FaHistory></FaHistory> Payment History</Link></li>

                                        <li><Link to="/"> <IoIosHome></IoIosHome> Home</Link></li>
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