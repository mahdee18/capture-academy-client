import { Helmet } from "react-helmet";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import About from "../AboutUs/About";
import Testimonial from "../Testimonial/Testimonial";
import SwiperSlider from "../Slider/SwiperSlider";

const Home = () => {
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <About></About>
            <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;