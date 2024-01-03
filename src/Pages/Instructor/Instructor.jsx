import React from 'react';
import useData from '../../Hooks/useData';
import InstructorCards from '../Home/PopularInstructor/InstructorCards';
import SectionTitle from '../../components/SectionTitle';

const Instructor = () => {
    const [data] = useData()
    return (
        <>
            <SectionTitle image={"https://th.bing.com/th/id/R.e35baf115b9d9251841372b8768c3594?rik=HJCjZuIzYh58QA&pid=ImgRaw&r=0"} title={"Meet Our Expert Instructors"} subtitle={"Experience the Art of Photography with Our Passionate Mentors"}></SectionTitle>

            <div className='w-5/6 mx-auto py-20'>

                <InstructorCards></InstructorCards>
            </div>
        </>
    );
};

export default Instructor;