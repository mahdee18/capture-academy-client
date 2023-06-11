import Swal from 'sweetalert2';
import useData from '../../Hooks/useData';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const AllClasses = () => {
    const [data] = useData();
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const handleSelectClass = cls => {
        const { class_name, class_image, instructor_name, price } = cls;
        if (user?.email) {
            const newClass = { userEmail: user?.email, class_name, class_image, instructor_name, price }
            axiosSecure.post('/select-class', newClass)
                .then(data => {
                    console.log(data.data.insertedId)
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className='text-center text-white my-10 py-10 bg-green-500'>
                <h2 className='text-5xl font-bold'>Capture the World Through Your Lens</h2>
                <p className='text-lg py-3'> Expand Your Skills and Vision with Our Inspiring Photography Classes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((classItem) => (
                    <div key={classItem.id} className="card bg-base-100 shadow-xl relative">
                        <figure className="">
                            <img src={classItem.class_image} alt="Shoes" className="rounded-xl h-[200px] w-[500px]" />
                        </figure>
                        <p className='absolute top-2 right-2 bg-slate-200 px-2 py-2 rounded'>${classItem.price}</p>
                        <div className="card-body items-center text-center text-lg">
                            <h2 className="card-title">{classItem.class_name}</h2>
                            <span>Instructor: {classItem.instructor_name}</span>

                            <span className=''>Available Seats: {classItem.available_seats}</span>
                            <div className="card-actions">
                                <button onClick={() => handleSelectClass(classItem)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-b-green-600">Select Class</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllClasses;
