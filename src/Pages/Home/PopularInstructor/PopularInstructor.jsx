import React from 'react';
import InstructorCards from './InstructorCards';

const PopularInstructor = () => {
    return (
        <div>
            <div className='text-center my-10 py-10'>
                <h2 className='text-4xl font-bold'>Our Expert Instructors</h2>
                <p className='text-lg py-3'> Experience the Art of Photography with Our Passionate Mentors</p>
            </div>
            <InstructorCards></InstructorCards>
        </div>
    );
};

export default PopularInstructor;