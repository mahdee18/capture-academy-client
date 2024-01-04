import { Helmet } from "react-helmet";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import About from "../AboutUs/About";
import Testimonial from "../Testimonial/Testimonial";
import SwiperSlider from "../Slider/SwiperSlider";
import Facilities from "../Facilities/Facilities";
import CallToAction from "../CallToAction/CallToAction";
import ParralaxBanner from "../ParralaxBanner/ParralaxBanner";
import NewsLetter from "../Newsletter/NewsLetter";

const Home = () => {
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

            <PopularClasses></PopularClasses>
            </div>
            <ParralaxBanner></ParralaxBanner>
            <div className="max-w-6xl mx-auto">
            <PopularInstructor></PopularInstructor>
            <Facilities></Facilities>
            <About></About>
            <Testimonial></Testimonial>
            </div>
            <CallToAction></CallToAction>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;