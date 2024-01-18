import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const onSubmit = async (data) => {
        // Prepare the class object to be added to the database
        const newClass = {
            instructor_name: user.displayName,
            instructor_email: user.email,
            instructor_image: data.instructor_image,
            class_name: data.class_name,
            class_image: data.class_image,
            available_seats: data.available_seats,
            price: parseFloat(data.price),
            feedback: '',
            class_status: "pending",
            enrolled_student: 0,
        };
        console.log(newClass);
        try {
            const res = await fetch("https://capture-academy-server-eta.vercel.app/alldata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newClass),
            });

            if (res.ok) {
                console.log("Class added successfully");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `New class added!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset(); // Reset the form fields
            } else {
                console.log("Error:", res.status);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[750px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-400">
            {/* Body*/}
            <div className="p-6">
                <Helmet>
                    <title>Capture Academy | Add Class</title>
                </Helmet>
                <header className="mb-4 text-center">
                    <h3 className="text-xl font-medium text-slate-700">Please add a Class!</h3>
                </header>
                <div className="flex flex-col">
                    <div className='flex gap-4 w-full'>
                        {/* Input field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id='class_name'
                                type="text"
                                {...register("class_name", { required: true })}
                                placeholder="Class Name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b03"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Class Name
                            </label>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span></span>
                            </small>
                        </div>

                        {/* Additional fields */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="pictureURL"
                                type="text"
                                name="pictureURL"
                                {...register("class_image", { required: true })}
                                placeholder="Picture URL of the Class"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b14"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Picture URL of the Class
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4 w-full'>

                        {/* Class name field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="className"
                                type="text"
                                {...register("instructor_name", { required: true })}
                                defaultValue={user?.displayName}
                                placeholder="Class name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b16"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Instructor name
                            </label>
                        </div>
                        {/* Class email field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="instructorEmail"
                                type="email"
                                {...register("instructor_email", { required: true })}
                                defaultValue={user?.email}
                                name="InstructorEmail"
                                placeholder="Instructor email"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b17"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Instructor email
                            </label>
                        </div>
                    </div>
                    <div className='flex w-full gap-4'>

                        {/* Seats field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                type="text"
                                name="available_seats"
                                placeholder="Available Seats"
                                {...register("available_seats", { required: true })}
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Available seats
                            </label>
                        </div>

                        {/* Price field */}
                        <div className="relative my-6 w-1/2">
                            <input
                                id="name"
                                type="text"
                                name="price"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b15"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Price
                            </label>
                        </div>
                    </div>
                    <div className="relative my-6">
                        <input
                            type="text"
                            name="Instructor-image"
                            placeholder="Instructor Image"
                            {...register("instructor_image", { required: true })}
                            className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-green-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <label
                            htmlFor="id-b15"
                            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                        >
                            Instructor Image
                        </label>
                    </div>
                </div>

                {/* Button */}
                <input
                    type="submit"
                    className="w-full h-10 mt-6 font-medium text-white transition-all bg-green-500 opacity-75 rounded hover:bg-purple-700" value='Add A Class' />
            </div>
        </form>
    );
};

export default AddClass;