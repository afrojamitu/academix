import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const college = useLoaderData()
    const { user } = useContext(AuthContext)

    const { _id, name, admissionDates } = college;

    const handleApplications = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const DOB = form.DOB.value;
        const subject = form.subject.value;
        const gpa = form.gpa.value;
        const college = form.college.value;
        const address = form.address.value;
        const photo = form.photo.value;

        const newApplication = {name, email, DOB, subject, gpa, college, address, photo};
        console.log(newApplication);

        fetch('https://academix-server.vercel.app/addApplication', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApplication)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Application Sent Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  form.reset()
            }
        })

    }
    return (
        <div className='relative'>
            <img className='w-72 absolute hidden md:block top-[252px] right-10' src="https://i.ibb.co/qFSD3V0/hat.png" alt="" />
            <img className='w-[450px] absolute hidden md:block top-[660px] -left-40' src="https://i.ibb.co/qFSD3V0/hat.png" alt="" />
            <div className='py-28 md:pt-36 md:w-10/12 md:mx-auto mx-5'>
                <div className='space-y-5'>
                    <Link to='/admission' className="text-2xl cursor-pointer cursive-font hover:underline flex items-center gap-2">
                        <FaArrowLeft className='text-xl' />
                        Go Back
                    </Link>
                    <h1 className="text-4xl text-orange-400">Fillup the registration form -</h1>
                </div>

                <div className='pt-8'>
                    <div className='text-center mb-5 md:mb-8'>
                        <h1 className="text-4xl">{name}</h1>
                        <h1 className="text-xl font-sans pb-3">Apply by: {admissionDates}</h1>
                    </div>
                    <form onSubmit={handleApplications}>
                        <div className='grid md:grid-cols-2 gap-3 md:gap-6 w-10/12 mx-auto'>
                            <div className='grid gap-2 text-lg'>
                                <label>Candidate Name</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="name" defaultValue={user && user.displayName} placeholder='Candidate Name' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Candidate Email</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="email" defaultValue={user && user.email} readOnly name="email" placeholder='Candidate Email' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Applying to</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="email" name="college" defaultValue={college.name} readOnly placeholder='Applying to' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Date of Birth</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="date" name="DOB" placeholder='DOB' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Subject</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="subject" placeholder='Subject' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>SSC GPA</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="gpa" placeholder='e.g. 4.75' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Address</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="address" placeholder='Address' required />
                            </div>

                            <div className='grid gap-2 text-lg'>
                                <label>Photo</label>
                                <input className='text-sm border shadow-md border-slate-400 rounded-md px-3 py-3 focus:outline-none focus:border-orange-200 focus:shadow-orange-200 focus:ring-1 focus:ring-orange-200' type="text" name="photo" placeholder='Direct Link from imgbb.com' required />
                            </div>
                        </div>
                        <p className="text-sm text-center py-5 text-slate-500"><span className='text-orange-600'>* </span>Please upload your photo to <Link className='text-orange-600 hover:underline' to='https://imgbb.com/'>imgbb.com</Link> give us the direct link of your image.</p>
                        <div className='flex justify-center'>
                            <input className='flex items-center justify-center rounded-full py-2 px-6 bg-orange-400 shadow-xl hover:shadow-lg hover:shadow-orange-300 text-white font-bold' style={{ transition: '.4s' }} type="submit" value="Submit Application" />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AdmissionForm;