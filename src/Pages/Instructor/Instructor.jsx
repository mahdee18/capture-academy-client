import React from 'react';
import useData from '../../Hooks/useData';
import InstructorCards from '../Home/PopularInstructor/InstructorCards';
import SectionTitle from '../../components/SectionTitle';

const Instructor = () => {
    const [data] = useData()
    return (
        <>


            <div className='w-5/6 mx-auto py-20'>

                <InstructorCards></InstructorCards>
            </div>
        </>
    );
};

export default Instructor;