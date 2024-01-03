import React from 'react';

const SectionTitle = ({image, title, subtitle }) => {
    return (
        <div className='mb-10 '>
            <h1 className='text-3xl text-white mb-3'></h1>
            <h4 className='text-[#d28d0d] uppercase'></h4>

            <section className="relative text-center">
                <div className="h-96 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h2 className='md:text-5xl text-3xl font-bold'>{title}</h2>
                        <p className='text-lg py-3'>{subtitle}</p>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionTitle;