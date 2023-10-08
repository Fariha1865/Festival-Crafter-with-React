import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Food = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div className='bg-[#752727] text-white'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10">Food Festival Management Services</h1>

                <p className=" mb-4">
                    Welcome to <strong>Festival Crafter</strong>, your trusted partner in organizing unforgettable food festivals. We specialize in delivering top-notch food festival management services that cater to your every need, ensuring a seamless and delicious experience for both vendors and attendees.
                </p>

                <img src="https://i.ibb.co/C0Jp0b7/gif.gif" alt="" className='mx-auto h-80' />


                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Food Festival Events Planning and Management Services:</h2>


                <div className='p-10'>
                    <div className="card mb-10"
                        data-aos="fade-right">
                        <div className='flex'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Planning and Coordination:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Custom Festival Design:</strong> Our team will work closely with you to create a unique and personalized food festival experience.<br /><span className='font-medium  underline'>(Price Range: BDT 15,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Vendor Selection:</strong> We curate a diverse lineup of food vendors, ensuring a wide range of culinary delights to cater to all tastes. <span className='font-medium  underline'>(Price Range: BDT 12,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Venue Selection:</strong> Our team will help you find the perfect venue that suits the size and style of your food festival. <span className='font-medium  underline'>(Price Range: BDT 10,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Budget Management:</strong> We assist in creating and managing a budget that maximizes your return on investment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10"
                        data-aos="fade-left">
                        <div className='flex justify-end'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Vendor Management:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Customized Food Booths:</strong> Create a visually stunning and functional food booth setup for each vendor, enhancing their presentation and appeal. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 30,000 per booth)</span></li>
                                        <li><strong className="font-semibold">Decorations and Theming:</strong> Tailor the festivals aesthetics to match your theme, from table settings to stage decorations, creating an immersive atmosphere. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Photography and Videography:</strong> Capture the festivals best moments with professional photography and videography services that can be used for promotion and memories. <span className='font-medium underline'>(Price Range: BDT 20,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Catering and Serving Solutions:</strong> Ensure a smooth and efficient serving process, with customizable options such as food trucks, buffet stations, or elegant dining experiences. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10"
                        data-aos="fade-right">
                        <div className='flex'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Marketing and Promotion:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Promotional Campaigns:</strong> We develop tailored marketing strategies to attract a diverse and engaged audience. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Social Media Management:</strong> Leverage the power of social media to create buzz and excitement around your food festival. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Ticketing and Registration:</strong> We provide online ticketing solutions for attendees, making it convenient for them to join the event. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10"
                        data-aos="fade-left">
                        <div className='flex justify-end'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Operations:</h2>
                                    <ul className="list-disc pl-6">
                            <li><strong className="font-semibold">Logistics Management:</strong> We handle event logistics, from stage setup to waste management, to ensure everything runs seamlessly. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                            <li><strong className="font-semibold">Entertainment:</strong> Enhance the festival atmosphere with live music, entertainment, and activities that keep attendees engaged.<span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
                            <li><strong className="font-semibold">Safety and Security:</strong> Your guests safety is our priority, and we implement robust security measures to ensure a secure environment. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 20,000)</span></li>
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

export default Food;