import React from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import { FaAd, FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SelectClass = () => {
    const [selectClass, refetch] = useSelectedClass()
    console.log(selectClass)
    const handleDelete = (user) => {
        if (window.confirm("Are you sure? You won't be able to revert this!")) {
            fetch(`https://capture-academy-server-eta.vercel.app/select-class/${user._id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        refetch();
                        alert("Your Class has been deleted.");
                    }
                });
        }
    };

    return (
        <>
            <Helmet>
                <title>Capture Academy | Select Class</title>
            </Helmet>
            <div>
                <h2 className="text-center text-2xl font-semibold my-12">
                    Select Classes : {selectClass.length}
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Class Img</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {selectClass.map((user, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold h-12 w-24"><img src={user.class_image} alt="" /></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{user.class_name}</span>
                                </td>
                                <td>{user.instructor_name}</td>

                                <td>{user.price}</td>

                                <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleDelete(user)} className="btn btn-
                                    bg-red-600 text-white border-0 btn-sm hover:bg-black">
                                    <FaTrash></FaTrash>
                                </button>}</td>
                                <td>
                                    <Link to="/dashboard/payment" state={user}><button className='btn btn-warning btn-sm'>Pay</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default SelectClass;