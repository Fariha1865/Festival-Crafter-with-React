import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Slider from "./Slider";
import UpcomingEvents from "./UpcomingEvents.JSX";
import Reviews from "./Reviews";




const Home = () => {

    const services = useLoaderData();
    return (
        <div className="bg-[#752727] text-white">
            <div className="">
                <Slider></Slider>
            </div>

            {/* Services section */}

            <div className="mt-20">
                <Services services={services}></Services>

            </div>

            <div>
                 <UpcomingEvents></UpcomingEvents>
            </div>

            <div>
                 <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;