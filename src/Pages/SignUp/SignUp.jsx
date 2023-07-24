import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='pt-36 pb-20'>
            <h1 className="cursive-font text-5xl text-center">WELCOME!</h1>
            <p className="text-lg pb-10 text-center">Please Sign Up to explore ACADEMIX!</p>
            <div className='grid md:flex justify-between shadow-2xl md:w-7/12 md:mx-auto'>

                <form className='space-y-2 grid w-[60%] p-10'>
                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="text" placeholder='Full Name' />

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="email" placeholder='Email' />

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="password" placeholder='Password' />

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="confirmPassword" placeholder='Re-type Password' />

                    <div className='flex justify-center pt-4'>
                        <input type="submit" value="Login" className='w-full rounded-full py-1 bg-orange-400 shadow-xl hover:shadow-lg hover:shadow-orange-300 text-white font-bold' style={{ transition: '.4s' }} />
                    </div>

                    <p className='text-center text-sm pt-2'>Have an account? <Link to='/login' className='text-orange-400 hover:underline'>Sign Up</Link></p>

                    <div className="divider">OR</div>

                    <div className='flex items-center justify-center gap-5'>
                        <button><img className='w-7' src="https://i.ibb.co/xCVx8Cx/google-logo.png"/></button>

                        <button><img className='w-8' src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button>
                    </div>
                </form>
                <div className='w-[50%] hidden md:block'>
                    <img className='h-full ' src="https://i.ibb.co/PccFYQ0/omar-lopez-Q92-R1693o-SI-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;