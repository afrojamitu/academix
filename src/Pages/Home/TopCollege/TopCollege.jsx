import React from 'react';
import { Link } from 'react-router-dom';

const TopCollege = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-5'>
            <h1 className="text-5xl cursive-font pb-4">Top Searched Colleges</h1>
            <p>Welcome to our handpicked selection of the most sought-after colleges! Find your perfect fit among prestigious institutions known for academic excellence and a vibrant learning environment. Explore various programs, from STEM to arts, and make an informed decision with vital details like admission criteria and tuition fees at your fingertips. Worried about your chances? Our historical admission data and acceptance rates offer valuable insights. With a simple click, secure your seat and embark on a transformative educational journey. Stay inspired by success stories from alumni who have excelled in their fields. Your future begins here!</p>

            <div className='grid md:grid-cols-3 items-center gap-5 py-10'>
                <div className='p-3 border rounded font-semibold space-y-3 h-full'>
                    <img className='h-48 w-full' src="https://i.ibb.co/2gFXqjn/rajuk-uttra-model-college-vjire3.jpg" alt="" />
                    <h1 className='text-2xl'>Rajuk Uttara Model College</h1>
                    <p>Apply by: 25.07.2023</p>
                    <p>Next Event: 05.08.2023</p>
                    <p>Rating: 5</p>
                    <div className='py-2'>
                    <Link className="bg-orange-500 py-2 px-4 text-white rounded hover:underline">Details</Link>
                    </div>
                </div>

                <div className='p-3 border rounded font-semibold space-y-3 h-full'>
                    <img className='h-48 w-full' src="https://i.ibb.co/pjs14yh/1436103280.jpg" alt="" />
                    <h1 className='text-2xl'>Dhaka College</h1>
                    <p>Apply by: 25.07.2023</p>
                    <p>Next Event: 05.08.2023</p>
                    <p>Rating: 5</p>
                    <div className='py-2'>
                    <Link className="bg-orange-500 py-2 px-4 text-white rounded hover:underline">Details</Link>
                    </div>
                </div>

                <div className='p-3 border rounded font-semibold space-y-3 h-full'>
                    <img className='h-48 w-full' src="https://i.ibb.co/d7tFcLb/adm-bld-600x350.jpg" alt="" />
                    <h1 className='text-2xl'>Adamjee Cantonment College</h1>
                    <p>Apply by: 25.07.2023</p>
                    <p>Next Event: 05.08.2023</p>
                    <p>Rating: 5</p>
                    <div className='py-2'>
                    <Link className="bg-orange-500 py-2 px-4 text-white rounded hover:underline">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCollege;