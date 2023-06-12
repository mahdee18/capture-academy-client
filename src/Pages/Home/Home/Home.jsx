import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;