import React from 'react';
import useData from '../../../Hooks/useData';
import { FiMail } from "react-icons/fi";
import { Fade } from 'react-awesome-reveal';

const InstructorCards = () => {
    const [data] = useData();

    return (
        <Fade direction="up" triggerOnce>
            <div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {data.map((instructor) => (
                        <div
                            className="w-full relative mt-16 bg-gray-200 rounded-xl pt-16 text-center p-6 my-10"
                            key={instructor._id}
                        >
                            <div className="w-48 h-48 rounded-full p-2 overflow-hidden absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <img
                                    src={instructor.instructor_image}
                                    alt="Instructor"
                                    className="w-full aspect-square object-cover rounded-full object-center"
                                />
                            </div>
                            <div className="mt-10">
                                <header>
                                    <h3 className="text-lg md:text-2xl font-bold text-neutral mb-4">
                                        {instructor.instructor_name}
                                    </h3>

                                </header>
                                <span className="text-sm underline flex items-center justify-center gap-3"><FiMail />{instructor.instructor_email}</span>
                                {/* Additional instructor information can be added here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fade>


    );
};

export default InstructorCards;
