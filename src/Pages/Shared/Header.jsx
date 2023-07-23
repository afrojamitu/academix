import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {

    const navlinks = <>
        <Link to='/'>Home</Link>
        <Link to='/colleges'>Colleges</Link>
        <Link to='/mycollege'>My College</Link>
    </>

    return (
        <div className='bg-white'>
            <div className="navbar fixed z-20 bg-orange-50 md:px-24 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
                            <Link to='/userprofile' className="">My Profile</Link>

                            {navlinks}

                            <Link className="bg-orange-400 py-2 px-5 rounded-full  text-white">Login</Link>
                        </ul>
                    </div>
                    <span className='flex items-center'>
                        <img className='md:w-24 w-14' src="https://i.ibb.co/V38wWgR/logo.png" alt="" />
                        <Link className="md:text-5xl text-3xl font-semibold cursive-font">Academix</Link>
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-base font-semibold">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='flex items-center gap-3'>
                        <span className='relative'>
                            <input type="text" placeholder="Search. . ." className="input w-full max-w-xs rounded-full border border-slate-200" />
                            <FaSearch className='absolute top-[6px] right-2 bg-orange-400 text-white w-9 h-9 p-2 rounded-full cursor-pointer' />
                        </span>
                        <img className='w-10 h-10 hidden md:block' src="https://simpleicon.com/wp-content/uploads/user1.png" alt="" />
                        <Link className="bg-orange-400 shadow-lg hover:shadow-lg hover:shadow-orange-300 font-bold py-2 px-5 rounded-full  text-white hidden md:block" style={{transition: '.4s'}}>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;