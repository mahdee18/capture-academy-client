import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import About from "../AboutUs/About";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <About></About>
        </div>
    );
};

export default Home;