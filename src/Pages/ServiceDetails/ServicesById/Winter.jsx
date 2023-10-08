import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WinterFestival = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#752727] text-white'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10"> Winter Festival Management Services</h1>

                <p className="mb-4">
                    Welcome to <strong>Festival Crafter</strong>, your premier partner in organizing a memorable  winter festival. We specialize in delivering top-notch winter festival management services that cater to your every need, ensuring a warm and delightful experience for both vendors and attendees.
                </p>

                <img src="https://i.ibb.co/hZz4BrQ/winter.jpg" alt="" className='lg:mx-auto lg:w-[1400px] h-80' />

                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Winter Festival Planning and Management Services:</h2>

                <div className='p-10'>
                    <div className="card mb-10" data-aos="fade-right">
                        <div className='flex'>
                            <div className="card w-[700px] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Event Planning and Coordination:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Winter Theme Design:</strong> Collaborate with our team to create a unique and cozy winter festival experience, featuring  winter traditions.<br /><span className='font-medium  underline'>(Price Range: BDT 15,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Pitha Vendor Selection:</strong> We curate a diverse lineup of pitha vendors, ensuring a wide range of delicious rice cakes to satisfy all tastes. <span className='font-medium  underline'>(Price Range: BDT 12,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Venue Selection:</strong> Our team will help you find the perfect venue that suits the cozy atmosphere of a  winter festival. <span className='font-medium  underline'>(Price Range: BDT 10,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Warm Clothes Drive:</strong> Organize a warm clothes drive as part of the festival to help those in need during the winter season.</li>
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
                                        <li><strong className="font-semibold">Pitha Stall Designs:</strong> Create visually appealing and functional pitha stalls for each vendor, enhancing their presentation and appeal. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 30,000 per stall)</span></li>
                                        <li><strong className="font-semibold">Winter Decorations:</strong> Customize the festival aesthetics to match the warmth of  winter, from table settings to stage decorations. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Photography and Videography:</strong> Capture the festivals cozy moments with professional photography and videography services that can be used for promotion and memories. <span className='font-medium underline'>(Price Range: BDT 20,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold"> Winter Food Stalls:</strong> Include stalls offering traditional  winter foods to enrich the cultural experience. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
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
                                        <li><strong className="font-semibold">Promotional Campaigns:</strong> Develop tailored marketing strategies to attract a diverse audience to the cozy winter festival. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Social Media Management:</strong> Utilize social media to create excitement and awareness around the  winter festival. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Ticketing and Registration:</strong> Provide convenient online ticketing solutions for attendees to join the winter event. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
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
                                        <li><strong className="font-semibold">Logistics Management:</strong> Handle event logistics, from setup to waste management, to ensure a smooth and cozy experience. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Entertainment:</strong> Enhance the festival atmosphere with live music, cultural performances, and activities that keep attendees engaged and warm. <span className='font-medium underline'>(Price Range: BDT 18,000 - BDT 28,000)</span></li>
                                        <li><strong className="font-semibold">Safety and Security:</strong> Implement robust security measures to ensure a secure and worry-free winter environment. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 20,000)</span></li>
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

export default WinterFestival;
