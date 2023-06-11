import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Helmet>
                <title>Capture Academy | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;