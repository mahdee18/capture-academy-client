import React from 'react';
import useData from '../../../Hooks/useData';

const InstructorCards = () => {
    const [data] = useData();
    console.log(data);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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
                            </header>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorCards;
