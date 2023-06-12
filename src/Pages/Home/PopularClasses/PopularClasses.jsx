import React from 'react';
import ClassCard from './ClassCard';

const PopularClasses = () => {
    return (
        <>

            <div className='text-center my-10 py-10'>
                <h2 className='text-4xl font-bold'>Our Popular Class</h2>
                <p className='text-lg py-3'> Experience the Art of Photography with Our Passionate Mentors</p>
            </div>
            <ClassCard></ClassCard>
        </>
    );
};

export default PopularClasses;