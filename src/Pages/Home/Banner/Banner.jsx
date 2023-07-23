import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBrain } from 'react-icons/fa';
// import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-orange-50'>
            <div className='grid md:flex items-center justify-between md:w-10/12 md:mx-auto mx-5 pt-28'>
                <div className='space-y-3 pt-14 md:pt-0'>
                    <h1 className='text-3xl md:text-5xl'>Your Gateway to Higher <br />Education</h1>
                    <p className='text-lg'>Explore, Compare, and Reserve Your Seat Online - Your Journey <br />to Success Starts Here!</p>
                    <div>
                        <Link to='/' className='flex items-center justify-center gap-2  bg-orange-400 shadow-lg hover:shadow-lg hover:shadow-orange-300 text-white font-bold py-2 px-5 w-40 rounded-full' style={{transition: '.4s'}}>Learn More <FaArrowRight /></Link>
                    </div>
                </div>
                <div className='flex justify-center items-center relative md:pt-0 pt-10'>
                    <img className='w-full md:w-[450px]' src="https://i.ibb.co/cLPXfG8/banner-girl.png" alt="" />

                    <span className='flex items-center justify-center gap-1 md:py-2 py-1 md:px-3 px-2 bg-white rounded shadow-md shadow-orange-400 absolute md:top-16 top-24 md:-left-10 -left-2'>
                        <p>Successfully Applied</p>
                        <p className='bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xl text-white'>✓</p>
                    </span>

                    
                    <span className='absolute bottom-10 md:bottom-10 md:-left-28 -left-2 md:py-2 py-1 md:px-3 px-2 bg-white rounded shadow-md shadow-orange-400'>
                        <p className='flex items-start gap-3'>
                            <img className='w-8 h-8' src="https://i.ibb.co/hVrSLgs/Vector-1.png" alt="" />
                            Fantastic college resource,<br/>easy seat booking! A must<br/> visit for aspiring students!</p>
                    </span>

                    <span className='absolute top-18 md:top-48 md:-right-8 -right-2 md:py-2 py-1 md:px-3 px-2 bg-white rounded shadow-md shadow-orange-400'>
                        <p className='flex items-center gap-1'><FaBrain className='text-orange-400' />Creative Institutes</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;