import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const PymentHistory = () => {
    
    const data = useLoaderData()
    console.log('History  data', data)
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold my-12">
                Payment History
            </h2>
            <Helmet>
                <title>Capture Academy | Payment History</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Data</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {data.map((user, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>{user.className}</td>

                                <td>${user.price}</td>
                                <td>{user.email}</td>
                                <td>{user.data}</td>
                                <td>{user.transectionId}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PymentHistory;