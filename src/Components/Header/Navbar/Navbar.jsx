
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../layOut/Pages/Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


     const navLinks = <>
            <li className="text-xl font-semibold"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Home</NavLink></li>
            <li className="text-xl font-semibold"><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Login</NavLink></li>
            <li className="text-xl font-semibold"><NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Details</NavLink></li>
            
     </>

    return (
        <div className="navbar mb-5 bg-lime-100 ">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl"><span className="text-amber-600 text-lg lg:text-2xl font-bold">Wedding</span><span className="text-green-700 text-lg lg:text-2xl font-bold">Planner</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user ? <>
                    <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-20">
                        <span>{user.displayName}</span> <span><img className="rounded-full w-8" src={user.photoURL}/></span>
                                </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <span className="mb-4">{user.displayName}</span> <span><img className="rounded-full w-8 px-2" src={user.photoURL}/></span>
                        </ul>
                    </div>
                    </div>
                    
                    <a onClick={logOut} className="btn btn-sm text-sm lg:text-2xl font-bold">Log out</a>
                </> 
                : <Link to="/login">
                    <button className="btn btn-sm btn-ghost text-sm lg:text-2xl font-bold">Login</button>
                </Link>
            }
            
        </div>
    </div>
    );
};

export default Navbar;