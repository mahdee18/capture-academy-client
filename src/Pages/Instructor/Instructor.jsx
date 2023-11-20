import React from 'react';
import useData from '../../Hooks/useData';

const Instructor = () => {
    const [data] = useData()
    return (
        <>
            <div className='text-center text-white my-10 py-10 bg-green-500'>
                <h2 className='md:text-5xl text-3xl font-bold'>Meet Our Expert Instructors</h2>
                <p className='text-lg py-3'> Experience the Art of Photography with Our Passionate Mentors</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-6xl mx-auto px-4 md:px-0">
            {data.map((instructor) => (
                <div
                    className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"
                    key={instructor._id}
                >
                    <figure>
                        <img
                            src={instructor.instructor_image}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    <div className="p-6">
                        <header>
                            <h3 className="text-xl font-medium text-slate-700">
                                {instructor.instructor_name}
                            </h3>
                            <p className="text-sm text-slate-400">
                                {instructor.instructor_email}
                            </p>
                        </header>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default Instructor;