import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(error => console.log(error))
    }


    return (
        <div className='pt-24 md:pt-36 pb-20'>
            <h1 className="cursive-font text-5xl text-center">WELCOME!</h1>
            <p className="text-lg pb-10 text-center">Please Login To Get More Information</p>
            <div className='grid md:flex justify-between shadow-2xl md:w-7/12 md:mx-auto mx-10'>

                <form onSubmit={handleLogin} className='space-y-2 grid md:w-[60%] p-10'>
                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="text" name='name' placeholder='Full Name' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="email" name='email' placeholder='Email' required/>

                    <input className='border-b-2 border-orange-200 py-1 px-4 focus:outline-none focus:border-orange-400 focus:ring-orange-200' type="password" name='password' placeholder='Password' required/>

                    <div className='flex justify-center pt-4'>
                        <input type="submit" value="Login" className='w-full rounded-full py-0 bg-orange-400 shadow-xl hover:shadow-lg hover:shadow-orange-300 text-white font-bold' style={{ transition: '.4s' }} />
                    </div>

                    <p className='text-center text-sm pt-2'>New to Academix? <Link to='/signUp' className='text-orange-400 hover:underline'>Sign Up</Link></p>

                    <div className="divider">OR</div>

                    <SocialLogin></SocialLogin>
                </form>
                <div className='md:w-[50%] hidden md:block'>
                    <img className='h-full' src="https://i.ibb.co/f1fD9sw/rut-miit-JY9b-BAcs0vs-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;