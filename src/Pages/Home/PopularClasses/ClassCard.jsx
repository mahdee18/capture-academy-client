import React from 'react';
import useData from '../../../Hooks/useData';

const ClassCard = () => {
    const [data] = useData()
    const approvedData = data.filter(item=>item.class_status === 'approved')

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {approvedData.map((item) => (
                    <div
                        key={item._id}
                        className='overflow-hidden rounded bg-transparent text-slate-500 shadow-md shadow-slate-200'
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
                        <div className="p-6">
                            <header className="mb-4">
                                <h3 className="text-xl font-medium text-slate-700">
                                    {item.class_name}
                                </h3>
                                <p className="font-semibold text-black text-md my-3">
                                    {item.instructor_name}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Price: ${item.price}</span>
                                    <span className="text-slate-400">
                                        Available seats: {item.available_seats}
                                    </span>
                                </div>
                                    <button className='btn bg-green-600 text-white hover:text-black btn-block mt-10'>Select CLass</button>
                            </header>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ClassCard;