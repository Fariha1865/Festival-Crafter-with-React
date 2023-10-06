import { Link, NavLink } from "react-router-dom";
import profileIcon from "../../assets/user.png"
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    // const {user,logOut} = useContext(AuthContext);
    // const handleLogout =()=>{
    //       logOut()
    //       .then()
    //       .catch(error=>console.log(error.message))
    // }
    const navLinks = <>

    
        <div className="flex gap-10 text-white font-bold ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">Gallery</NavLink>
            <NavLink to="/Career">Contact</NavLink>
            <NavLink to="/Career">Our Prices</NavLink>
        </div>
    </>
    return (
        <div className="bg-[#411313]">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                   <h1 className="text-white font-mono text-xl font-bold bg-red-900 p-2 rounded-md">Cultural Crafter</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
                        <div className="w-10 rounded-full">
                            <img src={profileIcon} />
                        </div>
                    </label>

                    <Link to="/login" className="btn bg-red-900 hover:bg-red-700 text-white">Login</Link>
                    {/* {
                        user? <button onClick={handleLogout} className="btn button-Primary">Sign Out</button> : <Link to="/login" className="btn btn-neutral">Login</Link>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;