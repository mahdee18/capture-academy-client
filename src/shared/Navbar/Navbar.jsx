import { Link, NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error.message);
            });
    };
    return (
        <header className="nav sticky top-0 z-50 text-[#1f2937] bg-gray-300">
            <nav className="navbar max-w-7xl mx-auto flex justify-between items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className=" font-bold">
                            <NavLink
                                exact
                                active className="active  font-bold hover:text-warning"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="font-bold">
                            <NavLink
                                active className="font-bold hover:text-warning"
                                to="/instructor"
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li className=" font-bold">
                            <NavLink
                                activeClassName="font-bold hover:text-warning"
                                to="/allclasses"
                            >
                                Classes
                            </NavLink>
                        </li>

                        {user && (
                            <li className=" font-bold">
                                <NavLink
                                    activeClassName="active font-bold hover:text-warning"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="my-auto me-auto">
                    <Link to={'/'}>
                    
                    <div className="flex md:flex-col items-center ml-2v">
                        <img src="https://clipartcraft.com/images/transparent-ca-logo-1.png" className="w-16 h-16 lg:w-24 lg:h-18" alt="" />
                    </div>
                    </Link>
                    <DarkMode></DarkMode>
                </div>
                <div className="hidden lg:flex me-auto">
                    <ul className="flex items-center justify-start gap-6 px-1">
                        <li className="font-bold">
                            <NavLink
                                activeClassName="active font-bold hover:text-warning"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className=" font-bold">
                            <NavLink
                                activeClassName="font-bold hover:text-warning"
                                to="/instructor"
                            >
                                Instructors
                            </NavLink>
                        </li>
                        <li className=" font-bold">
                            <NavLink
                                activeClassName="font-bold hover:text-warning"
                                to="/allclasses"
                            >
                                Classes
                            </NavLink>
                        </li>

                        {user && (
                            <li className="font-bold">
                                <NavLink
                                    activeClassName="active font-bold hover:text-warning"
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center justify-end">
                        <div className="flex items-center justify-end md:justify-center gap-6">
                            {user ? (
                                <span className="flex items-center justify-center gap-3">
                                    <img
                                        title={user.displayName}
                                        className="-mr-1 md:m-0 w-10 h-10 md:w-12 md:h-12 rounded-full"
                                        //   src={user.photoURL}
                                        src={user.photoURL}
                                        alt="User profile image"
                                    />
                                    <button
                                        onClick={handleLogOut}
                                        className="btn border-0 text-white hover:text-black  hover: bg-green-600 px-4 py-1.5 md:px-6 md:py-2 font-bold rounded flex items-center gap-1 hover:btn-outline"
                                    >
                                        Logout
                                    </button>
                                </span>
                            ) : (
                                <Link to="/login">
                                    <button className="btn border-0 text-white hover:text-black hover: bg-green-600 rounded px-4 py-1.5 md:px-6 md:py-2 font-bold  flex items-center gap-1 hover:btn-outline">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;