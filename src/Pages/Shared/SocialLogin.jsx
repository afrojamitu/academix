import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/' ;

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            navigate(from, {replace:true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='flex items-center justify-center gap-5'>
            <button onClick={handleGoogleSignIn}><img className='w-7' src="https://i.ibb.co/xCVx8Cx/google-logo.png" /></button>

            <button><img className='w-8' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></button>
        </div>
    );
};

export default SocialLogin;