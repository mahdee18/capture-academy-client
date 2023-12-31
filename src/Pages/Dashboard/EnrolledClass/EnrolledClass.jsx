import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const EnrolledClass = () => {
    const data = useLoaderData()
    console.log('Enrolled data', data)
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold my-12">
                My Enrolled Class
            </h2>
            <Helmet>
                <title>Capture Academy | Enrolled Class</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Instructor Name</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {data.map((user, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold h-12 w-24"><img src={user.image} alt="" /></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{user.InstructorName}</span>
                                </td>
                                <td>{user.className}</td>

                                <td>{user.price}</td>
                                <td>{user.email}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;