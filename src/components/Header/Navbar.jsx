import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about">About</NavLink> </li>
        <li> <NavLink to="/contact">Contact</NavLink> </li>
        <li> <NavLink to="/login">Login</NavLink> </li>
        <li> <NavLink to="/register">Register</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-12 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow  rounded-box w-52 gap-2 z-50 bg-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex">
                    <img className="w-24 relative" src="https://i.ibb.co/qnnz188/logo.png" alt="" />
                    <p className="pt-7 text-2xl uppercase font-semibold font-workSans text-slate-900 absolute lg:top-2.5 lg:left-[135px] top-2.5 left-[150px]">Muevent</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;