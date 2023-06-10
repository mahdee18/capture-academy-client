import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                const saveUser = { name: user.displayName, email: user.email }
                console.log(saveUser)
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div>
            <div className="w-full px-6 flex items-center text-center mx-auto py-5">
                <hr className="flex-1 border-t border-slate-400" />
                <span className="my-0 mx-[10px] font-bold text-slate-400">or</span>
                <hr className="flex-1 border-t border-slate-400" />
            </div>
            <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border border-slate-400 rounded-md cursor-pointer">
                <FcGoogle className='w-10 h-10'></FcGoogle>
                <span>Continue with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;