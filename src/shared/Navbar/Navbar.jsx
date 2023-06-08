import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })
    }
    const navItem = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructor">Instructor</Link></li>
            <li><Link to="/classes">Classes</Link></li>
        </>
    );

    const conditionalNavItem = (
        <>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navItem}

                            {conditionalNavItem}
                        </ul>
                    </div>
                    <div className="flex md:flex-col items-center ml-2v">
                        <img src="https://clipartcraft.com/images/transparent-ca-logo-1.png" className="w-16 h-16 lg:w-24 lg:h-18" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navItem}
                        {conditionalNavItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user ?
                            <div className='flex gap-2 md:gap-4'>
                                <img title={user.displayName} className='rounded-full w-11 h-11' src={user.photoURL} alt="" />
                                <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
                            </div> :
                            <Link to='/login' className="btn btn-primary">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;