import Services from "./Services";
import Slider from "./Slider";


const Home = () => {
    return (
        <div className="bg-[#411313] text-white">
            <div className="">
                <Slider></Slider>
            </div>

            {/* Services section */}

            <div className="mt-20">
                <Services></Services>

            </div>
        </div>
    );
};

export default Home;