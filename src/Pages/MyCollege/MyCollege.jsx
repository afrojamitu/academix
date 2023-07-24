import React, { useContext, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [myApplication, setMyApplication] = useState([])

    const url = `https://academix-server.vercel.app/addApplication?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyApplication(data);
            })
    }, [user, url])
    
    return (
        <div className='md:w-7/12 md:mx-auto mx-5 pt-36 pb-20'>
            <div className='space-y-5'>
                <Link to='/' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                    <FaArrowLeft className='text-xl' />
                    Back to Home
                </Link>
                <h1 className="text-5xl cursive-font">Your Application</h1>

                <div className=''>
                    {
                        myApplication.map(myApp => <div key={myApp._id} className='space-y-3'>
                            <h1 className='text-4xl'>{myApp.college}</h1>
                            <img className='w-40' src={myApp.photo}/>
                            <p className="text-lg">Name: {myApp.name}</p>
                            <p className="text-lg">Email: {myApp.email}</p>
                            <p className="text-lg">Date of Birth: {myApp.DOB}</p>
                            <p className="text-lg">Subject: {myApp.subject}</p>
                            <p className="text-lg">SSC GPA: {myApp.gpa}</p>
                            <p className="text-lg">Address: {myApp.address}</p>
                            <p className="text-lg">Phone: {myApp.phone}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCollege;