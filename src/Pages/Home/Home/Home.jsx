import { Helmet } from "react-helmet";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import About from "../AboutUs/About";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <About></About>
            </div>
        </div>
    );
};

export default Home;