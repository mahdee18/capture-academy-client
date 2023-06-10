import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        createUser(data.email, data.password)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUsers = { name: data.name, email: data.email, role: "student" }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUsers)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true })
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }


    // toggle show password
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-12">
                <Helmet>
                    <title>Capture Academy | Register</title>
                </Helmet>
                {/* Component: Card with form */}
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-[415px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 pb-10">
                    {/* Body*/}
                    <div className="p-6">
                        <header className="mb-4 text-center">
                            <h3 className="text-xl font-medium text-slate-700">Please Register</h3>
                        </header>
                        <div className="flex flex-col">
                            {/* Input field */}
                            <div className="relative my-6">
                                <input
                                    id="displayName"

                                    type="text"
                                    name="displayName"
                                    {...register("displayName", { required: true })}
                                    placeholder="Your name"
                                    className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your name
                                </label>
                                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                    <span>Type your name</span>
                                </small>
                                {errors.displayName && <span className='text-red-600 ml-56'>Name is required</span>}

                            </div>
                            <div className="relative my-6">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    placeholder="your name"
                                    className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your email
                                </label>
                                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                    <span>Type your email address</span>
                                </small>
                                {errors.email && <span className='text-red-600 ml-56'>Email is required</span>}

                            </div>
                            {/* Input field */}
                            <div className="relative my-6">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}

                                    placeholder="your password"
                                    className="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b13"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your password
                                </label>
                                <svg
                                    onClick={toggleShowPassword}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                                    fill={showPassword ? "none" : "currentColor"}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                    <span>Type your password</span>
                                </small>
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-700 ml-48'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-700 ml-48'>Password must be 6 character!</p>}
                                {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-700 ml-48'>Password must be less than 20 character!</p>}
                                {errors.password?.type === 'pattern' && <p role="alert" className='text-red-700 ml-48'>Password must one uppercase one lowercase and one special character!</p>}

                            </div>
                            <div className="relative my-6">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("confirmpassword",
                                        {
                                            required: true,
                                            validate: (value) =>
                                                value === document.getElementById("password").value,
                                        }
                                    )}

                                    placeholder="New password"
                                    className="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b13"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    New password
                                </label>
                                <svg
                                    onClick={toggleShowPassword}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                                    fill={showPassword ? "none" : "currentColor"}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                    <span>Re-type new password</span>
                                </small>

                                {errors.confirmpassword && (
                                    <p className="text-red-600 ml-44">Passwords do not match.</p>
                                )}

                            </div>
                            <div className="relative my-6">
                                <input
                                    id="photoUrl"
                                    type="text"
                                    name="photoUrl"
                                    {...register("photoUrl", { required: true })}
                                    placeholder="Your photo url"
                                    className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your photo url
                                </label>
                                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                    <span>Type your photo url</span>
                                </small>
                                {errors.photoUrl && <span className='text-red-600 ml-44'>Photo URL is required</span>}
                            </div>
                        </div>
                    </div>
                    {/* Action base sized basic button */}
                    <div className="flex justify-end p-6 -mt-5">
                        <button
                            type="submit"
                            className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-500 disabled:cursor-not-allowed disabled:border hover:bg-purple-700"
                        >
                            <span>Register</span>
                        </button>
                    </div>
                    <div className="-mt-1 text-center text-md transition text-slate-400 peer-invalid:text-pink-500">
                        Already have an account?
                        <Link className="ml-1 text-green-500 font-semibold" to="/login">
                            Login
                        </Link>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
                {/* End Card with form */}
            </section>
        </div>
    );
};

export default Register;