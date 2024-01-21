import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
    const location = useLocation();
    const stateValue = location.state;
    const id = stateValue._id;

    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const fb = form.feedback.value;

        // Send the feedback to the API
        fetch(`https://capture-academy-server-eta.vercel.app/insertFeedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([fb]),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    // Use Swal to show a success notification
                    Swal.fire({
                        icon: 'success',
                        title: 'Feedback Sent!',
                        text: 'Your feedback has been sent to the instructor.',
                    });
                }
            })
            .catch((error) => {
                // Handle errors with a Swal error notification
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `An error occurred: ${error.message}`,
                });
            });
    };

    return (
        <div>
            <div className="mx-10 my-10 py-10 ">
                <h2 className="md:text-5xl text-3xl font-bold">Give meaningful feedback!</h2>
            </div>
            <div className="w-3/4 mx-auto bg-green-200 p-10 h-96">
                <form onSubmit={handleFeedback} action="">
                    <textarea
                        name="feedback"
                        className="textarea w-full h-48"
                        required
                        placeholder="Write feedback on why you've denied the class"
                    ></textarea>
                    <div className="text-end my-4">
                        <button type="submit" className="btn bg-green-500 border-0 text-white hover:text-black">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
