import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCollege from '../../Hooks/useCollege';

const Admission = () => {
    const [colleges] = useCollege();

    return (
        <div className='md:w-10/12 md:mx-auto mx-5 pt-36 pb-20'>
            <div className='space-y-5'>
                <Link to='/' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                    <FaArrowLeft className='text-xl' />
                    Back to Home
                </Link>
                <h1 className="text-5xl cursive-font">All College Informations</h1>
                <p>Choose any college to apply online -</p>
            </div>

            <div className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    colleges.map(college => <div key={college._id} className='rounded-full py-3 flex justify-center bg-orange-50 shadow-lg hover:shadow-orange-200 font-bold' style={{transition: '.4s'}}>
                        <Link to={`/admission/${college._id}`}>{college.name}</Link>
                    </div> )
                }
            </div>
            
        </div>
    );
};

export default Admission;