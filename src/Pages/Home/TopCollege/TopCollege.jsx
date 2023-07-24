import React from 'react';
import { Link } from 'react-router-dom';
import useCollege from '../../../Hooks/useCollege';

const TopCollege = () => {
    const [colleges] = useCollege()
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 mt-12'>
            <h1 className="text-5xl cursive-font pb-4">Top Searched Colleges</h1>
            <p>Welcome to our handpicked selection of the most sought-after colleges! Find your perfect fit among prestigious institutions known for academic excellence and a vibrant learning environment. Explore various programs, from STEM to arts, and make an informed decision with vital details like admission criteria and tuition fees at your fingertips. Worried about your chances? Our historical admission data and acceptance rates offer valuable insights. With a simple click, secure your seat and embark on a transformative educational journey. Stay inspired by success stories from alumni who have excelled in their fields. Your future begins here!</p>

            <div className='grid md:grid-cols-3 items-center gap-5 py-10'>
                {
                    colleges.slice(0, 3).map(college => {
                        return <div key={college._id} className='p-3 border rounded font-semibold space-y-3 h-full hover:shadow-lg hover:shadow-orange-300' style={{transition: '.4s'}}>
                            <img className='h-48 w-full' src={college.image} alt="" />
                            <h1 className='text-2xl'>{college.name}</h1>
                            <p>Apply by: {college.admissionDates}</p>
                            <p>Events: {college.event.length}/year</p>
                            <p>Research History: {college.researchNumber}/year</p>
                            <p>Sports: {college.sports.length} sports we practice in our campus</p>
                            <p>{college.ratings}</p>
                            <div className='py-2'>
                                <Link className="py-2 px-4 rounded bg-orange-400 shadow-lg hover:shadow-lg hover:shadow-orange-300 text-white font-bold" style={{transition: '.4s'}}>Details</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default TopCollege;