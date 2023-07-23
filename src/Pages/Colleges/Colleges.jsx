import React from 'react';
import useCollege from '../../Hooks/useCollege';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [colleges] = useCollege()
    // console.log(colleges);
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 pt-36 pb-20'>
            <div className='space-y-5'>
                <Link to='/' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                    <FaArrowLeft className='text-xl' />
                    Back to Home
                </Link>
                <h1 className="text-5xl cursive-font">All College Informations</h1>
                <p>Discover a world of academic opportunities at Academix! Our "All College Information's" section offers a vast repository of colleges, universities, and programs to cater to your aspirations. From Ivy League institutions to emerging gems, explore diverse academic pathways. Access vital details like admission requirements, faculty expertise, and campus facilities. Find confidence in statistical insights on acceptance rates and alumni achievements. Empower your educational journey with reliable information and take the first step towards a successful future. Unveil your potential and thrive in the world of academia with us.</p>
            </div>

            <div className='grid md:grid-cols-3 items-center gap-5 py-10'>
                {
                    colleges.map(college => {
                        return <div key={college._id} className='p-3 border rounded font-semibold space-y-3 h-full hover:shadow-lg hover:shadow-orange-300' style={{transition: '.4s'}}>
                            <img className='h-48 w-full' src={college.image} alt="" />
                            <h1 className='text-2xl'>{college.name}</h1>
                            <p>Apply by: {college.admissionDates}</p>
                            <p>Events: {college.event.length}/year</p>
                            <p>Sports: {college.sports.length} sports we practice in our campus</p>
                            <p>{college.ratings}</p>
                            <div className='py-2'>
                                <Link to={`/colleges/${college._id}`} className="py-2 px-4 rounded bg-orange-400 shadow-lg hover:shadow-lg hover:shadow-orange-300 text-white font-bold" style={{transition: '.4s'}}>Details</Link>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Colleges;