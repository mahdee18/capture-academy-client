import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;