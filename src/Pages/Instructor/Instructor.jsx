import React from 'react';
import useData from '../../Hooks/useData';

const Instructor = () => {
    const [data] = useData()
    return (
        <>
            <div className='text-center text-white my-10 py-10 bg-green-500'>
                <h2 className='text-5xl font-bold'>Meet Our Expert Instructors</h2>
                <p className='text-lg py-3'> Experience the Art of Photography with Our Passionate Mentors</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((classItem) => (
                    <div key={classItem.id} className="card bg-base-100 shadow-xl relative">
                        <figure className="">
                            <img src={classItem.instructor_image} alt="Shoes" className="rounded-xl h-[200px] w-[500px]" />
                        </figure>
                        <p className='absolute top-2 right-2 bg-slate-200 px-2 py-2 rounded'>${classItem.price}</p>
                        <div className="card-body items-center text-center text-lg">
                            <h2 className="card-title">{classItem.class_name}</h2>
                            <p>Instructor: {classItem.instructor_name}</p>

                            <p className=''>Available Seats: {classItem.available_seats}</p>
                            <div className="card-actions">
                                <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-b-orange-600">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Instructor;