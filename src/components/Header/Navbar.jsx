import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    // console.log(user)

    const navigate = useNavigate();

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire(
                    'You are Logged Out.!',
                    '',
                    'success'
                )
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }




    const navLinks = <>
        <div className="flex lg:flex-row md:flex-col flex-col gap-2 font-semibold font-workSans">
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/about">About</NavLink> </li>
            <li> <NavLink to="/contact">Contact</NavLink> </li>
            <li> <NavLink to="/login">Login</NavLink> </li>
            <li> <NavLink to="/register">Register</NavLink> </li>
        </div>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-50 bg-white lg:">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex">
                    <img className="w-24 relative" src="https://i.ibb.co/qnnz188/logo.png" alt="" />
                    <p className="pt-7 text-2xl uppercase font-bold text-slate-900 absolute lg:top-2.5 lg:left-[145px] top-2.5 left-[150px] font-workSans">Muevent</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2">
                    <p>{user?.email}</p>

                    {
                        user ?
                            <button onClick={handleLogOut} className="btn bg-slate-800 text-white hover:bg-slate-700 font-workSans">Logout</button>
                            :
                            <Link to="/login">
                                <button className="btn bg-slate-800 text-white hover:bg-slate-700 font-workSans">Login</button>
                            </Link>
                    }
                </div>


            </div>
        </div>
    );
};

export default Navbar;