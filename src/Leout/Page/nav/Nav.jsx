import { Link, NavLink } from "react-router-dom";
import userDefalt from '../../../assets/Img/user.png'
import { useContext } from "react";
import { Authconstex } from "../../Proveder/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Nav = () => {
    const {user,logOut} = useContext(Authconstex);
    const handelSingOut =()=>{
        logOut();
        // toast("Wow so easy!")
        toast("successfully Sign Out!");
    }
    const naveLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/About'>Carear</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {naveLink}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {naveLink}

                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefalt} />
                    </div>
                </label>
                {
                    user ? <button onClick={handelSingOut} className="btn btn-sm bg-red-500 text-white hover:text-black">Log Out</button> 
                    :<Link to='/LogIn'><button className="btn btn-sm">Log IN</button></Link>
                }
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Nav;