import React from 'react';
import { FaAd, FaUserShield } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        console.log(res.data);
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                if (data.acknowledged == true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:3000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                if (data.acknowledged == true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Instructor!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <h2>Manage user!!</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {users.map((user, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <td>{user.role}</td>

                                <td>{user.role == 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn border-0 btn-lg">
                                        <FaAd></FaAd>
                                </button>}</td>

                                <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-
                                    bg-green-600 text-white border-0 btn-lg">
                                    <FaUserShield></FaUserShield>
                                </button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
