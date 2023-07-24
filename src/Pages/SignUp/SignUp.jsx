import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error, setError] = useState()
    const { createUser, updateUserprofile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;

        setError('');
        if (password !== confirmPassword) {
            setError("Your Password Didn't Matched");
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                updateUserprofile(name, email)
                    .then(() => {
                        const saveduser = { name: name, email: email}
                        fetch('https://academix-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveduser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'User Created Successfully.',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    
                                    navigate('/login')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className='pt-24 md:pt-36 pb-20'>
            <h1 className="cursive-font text-5xl text-center">WELCOME!</h1>
            <p className="text-lg pb-10 text-center">Please Sign Up to explore ACADEMIX!</p>
            <div className='grid md:flex justify-between shadow-2xl mx-10 md:w-7/12 md:mx-auto'>

                <form onSubmit={handleSignUp} className='space-y-4 grid md:w-[60%] p-10'>
                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="text" name='name' placeholder='Full Name' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="email" name='email' placeholder='Email' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="password" name='password' placeholder='Password' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="password" name='confirmPassword' placeholder='Re-type Password' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="text" name='photo' placeholder='Direct link from imgbb.com' required/>

                    <div className='flex justify-center pt-4'>
                        <input type="submit" value="Sign Up" className='w-full rounded-full py-1 bg-orange-400 shadow-xl hover:shadow-lg hover:shadow-orange-300 text-white font-bold' style={{ transition: '.4s' }} />
                    </div>

                    <p className="text-sm text-center py-2 text-slate-500"><span className='text-orange-600'>* </span>Please upload your photo to <Link className='text-orange-600 hover:underline' to='https://imgbb.com/'>imgbb.com</Link> give us the direct link of your image.</p>

                    <p className='text-center text-sm'>Have an account? <Link to='/login' className='text-orange-400 hover:underline'>Login</Link></p>

                    <p className='text-red-600 text-center text-sm'>{error}</p>

                    <div className="divider">OR</div>

                    <div className='flex items-center justify-center gap-5'>
                        <button onClick={handleGoogleSignIn}><img className='w-7' src="https://i.ibb.co/xCVx8Cx/google-logo.png"/></button>

                        <button><img className='w-8' src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button>
                    </div>
                </form>
                <div className='md:w-[50%] hidden md:block'>
                    <img className='h-full ' src="https://i.ibb.co/PccFYQ0/omar-lopez-Q92-R1693o-SI-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;