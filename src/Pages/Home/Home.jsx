import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Slider from "./Slider";


const Home = () => {

    const services = useLoaderData();
    return (
        <div className="bg-[#411313] text-white">
            <div className="">
                <Slider></Slider>
            </div>

            {/* Services section */}

            <div className="mt-20">
                <Services services={services}></Services>

            </div>
        </div>
    );
};

export default Home;