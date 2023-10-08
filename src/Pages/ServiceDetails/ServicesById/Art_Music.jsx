import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from "../../../assets/art.gif"

const Art_MusicFestival = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#752727] text-white'>
            <div className="container lg:mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10">Art and Music Festival Management Services</h1>

                <p className="mb-4">
                    Welcome to <strong>Festival Crafter</strong>, your trusted partner in organizing extraordinary Art and Music festivals. We specialize in delivering top-notch festival management services that cater to your every need, ensuring a vibrant and creative experience for both artists and attendees.
                </p>

                <img src={art} alt="" className='mx-auto h-80 lg:w-[1400px]' />

                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Art and Music Festival Events Planning and Management Services:</h2>

                <div className='p-5 lg:p-10'>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Planning and Coordination:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Custom Festival Design:</strong> Collaborate with our team to create a unique and personalized Art and Music festival experience.<br /><span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Artist Selection:</strong> Curate a diverse lineup of artists and musicians to ensure a captivating experience for all attendees. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Venue Selection:</strong> Let us help you find the perfect venue that suits the artistic and musical atmosphere of your festival. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Budget Management:</strong> We assist in creating and managing a budget that maximizes your festivals success.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Art Exhibitions and Competitions:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Art Exhibition Setup:</strong> Create visually stunning art exhibition spaces to showcase artists works. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 30,000 per booth)</span></li>
                                        <li><strong className="font-semibold">Childrens Art Competitions:</strong> Organize art competitions for children, fostering creativity and talent. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Music Competitions and Entertainment:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Music Competition:</strong> Organize music competitions for emerging artists and bands. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Live Music Performances:</strong> Enhance the festival atmosphere with live music performances from renowned artists. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Games and Activities:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Interactive Games:</strong> Include interactive games and activities for festival attendees. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art_MusicFestival;
