import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [addedClasses, setAddedClasses] = useState([]);

  useEffect(() => {
    axiosSecure(`/myclass?email=${user?.email}`)
      .then(data => {
        const addedClassesData = Object.values(data.data);
        console.log('Added classes', addedClassesData);
        setAddedClasses(addedClassesData);
      })
      .catch(error => {
        console.log('Error fetching added classes', error);
      });
  }, [axiosSecure, user]);

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold my-12">
        My Classes
      </h2>
      <Helmet>
        <title>Capture Academy | My Classes</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Enrolled Student</th>
              <th>Feedback</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {addedClasses.map((addedClass, index) => (
              <tr key={index} className='text-center'>
                <td>{index + 1}</td>
                <td><img src={addedClass.class_image} alt="" /></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{addedClass.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>{addedClass.enrolled_student}</td>
                <td>{addedClass.class_status}</td>
                <td>{addedClass.feedback}</td>
                <td><button className='btn btn-sm'>Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
