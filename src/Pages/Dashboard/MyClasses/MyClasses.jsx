import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const [addedClass, setAddedClass] = useState([]);
  useEffect(() => {
    axiosSecure(`/add-class?email=${user?.email}`)
      .then(res => {
        const addedClassesData = res.data;
        setAddedClass(addedClassesData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [axiosSecure, user]);
  console.log(addedClass);


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
              <th>Class Name</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {addedClass.map((user, index) => (
              <tr key={index} className='text-center'>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{user.class_status}</span>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{user.enrolled_student
                  }</span>
                </td>
                <td><button className='btn btn-ghost btn-xs'> Feedback</button></td>
                <td><button className='btn btn-xs'>Update</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
