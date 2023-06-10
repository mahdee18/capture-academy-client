import useData from '../../Hooks/useData';

const AllClasses = () => {
    const [data] = useData();

    return (
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
                            <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-b-green-600">Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllClasses;
