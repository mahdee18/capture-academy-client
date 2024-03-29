import React from 'react';
import { Link } from 'react-router-dom';

const ParralaxBanner = () => {
    return (
        <section className="relative my-8 text-center">
            <div className="h-96 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://th.bing.com/th/id/R.e35baf115b9d9251841372b8768c3594?rik=HJCjZuIzYh58QA&pid=ImgRaw&r=0')` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-xl font-semibold">STARTING ONLINE LEARNING</h2>
                    <h1 className="text-2xl lg:text-4xl font-bold my-5">ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES</h1>
                    <Link to='/allclasses' className='btn bg-green-600 text-white hover:bg-green-800'>Get Start Now!!</Link>
                </div>
            </div>
        </section>
    );
};

export default ParralaxBanner;