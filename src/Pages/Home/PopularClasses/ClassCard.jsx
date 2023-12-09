import React from 'react';
import useData from '../../../Hooks/useData';

const ClassCard = () => {
    const [data] = useData()
    const approvedData = data.filter(item => item.class_status === 'approved')

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {approvedData.map((item) => (
                    <div
                        key={item._id}
                        className='overflow-hidden rounded bg-transparent text-slate-500 shadow-md shadow-slate-200 relative group'
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
                        <div className="p-6 ">
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


                    </div>
                ))}
            </div>

        </>
    );
};

export default ClassCard;