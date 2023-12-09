import React from 'react';
import useData from '../../Hooks/useData';
import InstructorCards from '../Home/PopularInstructor/InstructorCards';

const Instructor = () => {
    const [data] = useData()
    return (
        <>
            <div className='text-center text-white my-10 py-10 bg-green-500 '>
                <h2 className='md:text-5xl text-3xl font-bold'>Meet Our Expert Instructors</h2>
                <p className='text-lg py-3'> Experience the Art of Photography with Our Passionate Mentors</p>
            </div>
            <div className='w-5/6 mx-auto'>

                <InstructorCards></InstructorCards>
            </div>
        </>
    );
};

export default Instructor;