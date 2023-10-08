import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FruitFestival = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#752727] text-white'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10">Fruit Festival Management Services</h1>

                <p className="mb-4">
                    Welcome to <strong>Festival Crafter</strong>, your premier partner in organizing extraordinary fruit festivals. We specialize in delivering top-notch fruit festival management services that cater to your every need, ensuring a delightful and juicy experience for both vendors and attendees.
                </p>

                <img src="https://i.ibb.co/qgr8mGT/fruit.gif" alt="" className='lg:mx-auto lg:w-[1400px] h-80' />

                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Fruit Festival Events Planning and Management Services:</h2>

                <div className='p-10'>
                    <div className="card mb-10" data-aos="fade-right">
                        <div className='flex'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Planning and Coordination:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Fruit-Themed Festival Design:</strong> Our team will collaborate with you to create a unique and fruit-filled festival experience.<br /><span className='font-medium  underline'>(Price Range: BDT 15,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Fruit Vendor Selection:</strong> We curate a diverse lineup of fruit vendors, ensuring a wide range of fruity delights to satisfy all tastes. <span className='font-medium  underline'>(Price Range: BDT 12,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Orchard Venue Selection:</strong> Our team will help you find the perfect orchard venue that suits the size and style of your fruit festival. <span className='font-medium  underline'>(Price Range: BDT 10,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Budget Management:</strong> We assist in creating and managing a budget that maximizes your return on investment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="fade-left">
                        <div className='flex justify-end'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Vendor Management:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Fruitful Booth Designs:</strong> Create visually stunning and functional fruit booths for each vendor, enhancing their presentation and appeal. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 30,000 per booth)</span></li>
                                        <li><strong className="font-semibold">Fruity Decorations and Theming:</strong> Tailor the festivals aesthetics to match your fruit theme, from table settings to stage decorations, creating a fruity atmosphere. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Fruitography and Videography:</strong> Capture the festivals juiciest moments with professional photography and videography services that can be used for promotion and memories. <span className='font-medium underline'>(Price Range: BDT 20,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Fruitful Catering and Serving Solutions:</strong> Ensure a smooth and fruity serving process, with customizable options such as fruit trucks, fruit buffet stations, or elegant fruit dining experiences. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="fade-right">
                        <div className='flex'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Marketing and Promotion:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Fruity Promotional Campaigns:</strong> We develop tailored marketing strategies to attract a diverse and fruity audience. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Social Media Management:</strong> Leverage the power of social media to create buzz and excitement around your fruit festival. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Fruitful Ticketing and Registration:</strong> We provide online ticketing solutions for attendees, making it convenient for them to join the fruity event. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="fade-left">
                        <div className='flex justify-end'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Operations:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Fruit Logistics Management:</strong> We handle event logistics, from orchard setup to waste management, to ensure everything runs as smoothly as a ripe peach. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Fruitful Entertainment:</strong> Enhance the festival atmosphere with live fruit music, fruity entertainment, and activities that keep attendees engaged. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Fruit Safety and Security:</strong> Your guests safety is our top priority, and we implement robust security measures to ensure a secure and worry-free fruity environment. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 20,000)</span></li>
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

export default FruitFestival;
