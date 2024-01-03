import React from 'react';
import useData from '../../../Hooks/useData';
import { Fade } from 'react-awesome-reveal';

const ClassCard = () => {
    const [data] = useData()
    const approvedData = data.filter(item => item.class_status === 'approved')

    return (
        <Fade direction="up" triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-0">
                {approvedData.map((item) => (
                    <div
                        key={item._id}
                        className='overflow-hidden rounded bg-transparent text-slate-500 shadow-md shadow-slate-200 relative group bg-gray-200'
                    >
                        {/* Image */}
                        <figure>
                            <img
                                src={item.class_image}
                                alt="card image"
                                className="aspect-video w-full"
                            />
                        </figure>
                        {/* Body */}
                        <div className="p-3 ">
                            <header className="mb-4">
                                <h3 className="text-xl font-medium text-slate-700">
                                    {item.class_name}
                                </h3>
                                <p className="font-semibold text-black text-md my-3">
                                    Instructor : {item.instructor_name}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-white py-3 px-3 bg-green-600 absolute top-5 right-0 rounded-l-lg">Price: ${item.price}</span>
                                </div>
                            </header>
                        </div>

                        {/* Text overlay */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 duration-500 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform">
                            <div className="text-white text-center px-4">

                                <span className="text-white py-3 px-2 bg-black text-center text-lg font-semibold">
                                    Available seats: {item.available_seats}
                                </span>
                                <button className='btn bg-green-600 text-white hover:text-black btn-block mt-10'>Select This Class</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </Fade>
    );
};

export default ClassCard;