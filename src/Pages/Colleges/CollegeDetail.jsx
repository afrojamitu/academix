import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CollegeDetail = () => {
    const college = useLoaderData()
    const { _id, name, image, detail, admissionDates, event, sports, researchNumber, ratings } = college;
    return (
        <div className='py-20 md:pt-36 md:w-10/12 md:mx-auto mx-5 grid md:grid-cols-12 justify-between gap-12'>
            <div className='space-y-4 font-medium w-full md:w-70 md:col-start-1 md:col-end-10'>
                <Link to='/colleges' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                    <FaArrowLeft className='text-xl' />
                    Go Back
                </Link>
                <h1 className="text-3xl md:text-5xl pb-3">{name}</h1>
                <img className='w-full' src={image} alt="" />
                <p className="text-lg">Apply by: {admissionDates}</p>
                <p className="text-lg">Research History: {researchNumber}</p>
                <p className="text-lg">Ratings: {ratings}</p>
                <p className="text-lg text-justify">{detail}</p>
            </div>

            <div className='space-y-4 w-full md:w-30 md:pt-28 md:col-start-10 md:col-end-13'>
                <div>
                    <h2 className='text-2xl font-semibold cursive-font'>List of Events:</h2>
                    <ul>
                        {event.map((ev, index) => (
                            <li key={index}>• {ev}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold cursive-font'>List of Sports:</h2>
                    <ul>
                        {sports.map((sport, index) => (
                            <li key={index}>• {sport}</li>
                        ))}
                    </ul>
                </div>

                <div className='w-full'>
                    <Link className='flex items-center justify-center rounded-full py-2 bg-orange-400 shadow-lg hover:shadow-lg hover:shadow-orange-300 text-white font-bold' style={{transition: '.4s'}}>Apply Now</Link>
                </div>
            </div>

        </div>
    );
};

export default CollegeDetail;