
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const AboutUs = () => {
    return (
        <div className="bg-red-900 text-white p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-100 underline mb-4">
                    About Us
                </h1>
                <p className="text-gray-300 text-lg mb-6">
                    Welcome to <span className="text-blue-200">Festival Crafter</span>, your trusted partner in crafting unforgettable festival experiences!
                </p>
                <p className="text-gray-300 text-lg">
                    At <span className="text-blue-500">Festival Crafter</span>, we are passionate about bringing your visions to life and transforming ordinary events into extraordinary celebrations. With a team of dedicated professionals, years of experience, and a keen eye for detail, we specialize in festival management and planning services that leave a lasting impression.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 underline mt-8 mb-4">
                    Our Mission
                </h2>
                <p className="text-gray-300 text-lg">
                    Our mission is simple: to create exceptional festivals that not only meet but exceed your expectations. We believe that every festival is unique, and it deserves a personalized touch. Whether you are organizing a cultural celebration, music festival, food fair, or any other special event, we are here to ensure it runs seamlessly from concept to execution.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 underline mt-8 mb-4">
                    What Sets Us Apart
                </h2>
                <ul className="list-disc list-inside text-gray-300 text-lg pl-4">
                    <li>
                        <span className="text-blue-500">Experienced Team:</span> Our team comprises seasoned event planners, creative designers, logistics experts, and marketing specialists who collaborate to make your festival a resounding success.
                    </li>
                    <li>
                        <span className="text-blue-500">Customized Solutions:</span> We understand that every festival has distinct requirements. Our tailor-made solutions cater to your specific needs, ensuring that your event stands out from the rest.
                    </li>
                    <li>
                        <span className="text-blue-500">Attention to Detail:</span> We obsess over the finer details, ensuring that nothing is overlooked. From venue selection and entertainment bookings to ticketing, security, and branding, we handle it all with precision.
                    </li>
                    <li>
                        <span className="text-blue-500">Creative Innovation:</span> We constantly stay updated with the latest industry trends and incorporate innovative ideas to make your festival a cutting-edge experience.
                    </li>
                    <li>
                        <span className="text-blue-500">Budget-Friendly Options:</span> We offer flexible pricing options to accommodate a wide range of budgets while maintaining the highest standards of quality and service.
                    </li>
                </ul>

                <h1 className="text-4xl font-bold mt-10 font-mono text-center italic">Meet The Team</h1>
                <Marquee pauseOnHover={false} speed={50} className="flex gap-20">

                    <div className="flex gap-20 mt-16 mb-20">
                        <div className="flex flex-col items-center">
                            <img src="https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff" alt="" className="h-20 w-20 rounded-full" />
                            <h1 className="font-bold text-xl mt-5">Sara Kabir</h1>
                            <p className="w-52 text-center text-sm">Event Coordinator</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1464863979621-258859e62245" alt="" className="h-20 w-20 rounded-full" />
                            <h1 className="font-bold text-xl mt-5">Tasneem Anjum</h1>
                            <p className="w-52 text-center text-sm">Festival Planner</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167" alt="" className="h-20 w-20 rounded-full" />
                            <h1 className="font-bold text-xl mt-5">Rayhan Chowdhury</h1>
                            <p className="w-52 text-center text-sm">Photographer</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="" className="h-20 w-20 rounded-full" />
                            <h1 className="font-bold text-xl mt-5">John Smith</h1>
                            <p className="w-52 text-center">Communication Manager</p>
                        </div>



                    </div>

                </Marquee>

                <div className="flex justify-center">
                    <Link to="/contact"><button className="btn bg-red-900 hover:bg-red-700 text-white">Contact Us</button></Link>
                </div>
            </div>
        </div>

    );
}

export default AboutUs;
