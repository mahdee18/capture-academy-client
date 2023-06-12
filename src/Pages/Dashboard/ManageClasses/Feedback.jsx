import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
    const location = useLocation();
    const stateValue = location.state;
    const id = stateValue._id


    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const fb = form.feedback.value;
      
        // Send the feedback to the API
        fetch(`http://localhost:3000/insertFeedback/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([fb]),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              alert("Feedback has been sent to the instructor!");
            }
          });
      };
      
    return (
        <div>
            <h2 className="text-3xl text-center mb-10">Feedback For Instructor</h2>
            <div className="w-3/4 mx-auto bg-[#e5e8ec] p-10 h-96">
                <form onSubmit={handleFeedback} action="">
                    <textarea
                        name="feedback"
                        className="textarea w-full h-48"
                        placeholder="Write Feedback"
                    ></textarea>
                    <div className="text-end">
                        <button type="submit" className="btn bg-green-500 border-0 ">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Feedback;