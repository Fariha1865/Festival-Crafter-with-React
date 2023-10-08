import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechFestival = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#752727] text-white'>
            <div className="container lg:mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10">Technology Fair Festival</h1>

                <p className="mb-4">
                    Welcome to <strong>TechFest</strong>, your ultimate destination for celebrating technology and innovation. We bring you a diverse range of tech-related events and activities to explore the latest advancements in the tech world.
                </p>

                {/* Replace the image URL with your festival image */}
                <img src="https://i.ibb.co/Yh0knpp/tech.gif" alt="Festival Image" className='lg:mx-auto  lg:w-[1400px] h-80' />

                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Technology Fair Festival Services:</h2>

                <div className='p-5 lg:p-10'>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Tech Demos and Exhibits:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Innovative Gadgets Showcase:</strong> Get hands-on with the latest tech gadgets and innovations. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 15,000)</span></li>
                                        <li><strong className="font-semibold">Virtual Reality Experiences:</strong> Dive into immersive VR worlds. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 12,000)</span></li>
                                        <li><strong className="font-semibold">AI and Robotics Demonstrations:</strong> Witness AI and robots in action. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 18,000)</span></li>
                                        <li><strong className="font-semibold">Emerging Technologies Expo:</strong> Explore cutting-edge technologies and startups. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 15,000)</span></li>
                                        <li><strong className="font-semibold">3D Printing Showcase:</strong> See the latest in 3D printing technology. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 12,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Tech Workshops:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Coding Workshops:</strong> Learn to code with experts. <span className='font-medium underline'>(Price Range: BDT 6,000 - BDT 10,000)</span></li>
                                        <li><strong className="font-semibold">Web Development Bootcamp:</strong> Build your own website in a day. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 14,000)</span></li>
                                        <li><strong className="font-semibold">IoT and Smart Home DIY:</strong> Create your smart home projects. <span className='font-medium underline'>(Price Range: BDT 7,000 - BDT 12,000)</span></li>
                                        <li><strong className="font-semibold">Cybersecurity Essentials:</strong> Protect your online presence. <span className='font-medium underline'>(Price Range: BDT 7,000 - BDT 11,000)</span></li>
                                        <li><strong className="font-semibold">Machine Learning Bootcamp:</strong> Dive into ML and AI. <span className='font-medium underline'>(Price Range: BDT 9,000 - BDT 15,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Tech Talks and Panels:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">AI and the Future of Work:</strong> Insights from industry experts. <span className='font-medium underline'>(Price Range: BDT 5,000 - BDT 8,000)</span></li>
                                        <li><strong className="font-semibold">Blockchain and Cryptocurrency Trends:</strong> A discussion on the latest in crypto. <span className='font-medium underline'>(Price Range: BDT 6,000 - BDT 9,000)</span></li>
                                        <li><strong className="font-semibold">Women in Tech Panel:</strong> Hear from women leading in tech. <span className='font-medium underline'>(Price Range: BDT 4,000 - BDT 7,000)</span></li>
                                        <li><strong className="font-semibold">Startup Success Stories:</strong> Learn from successful tech entrepreneurs. <span className='font-medium underline'>(Price Range: BDT 5,000 - BDT 8,000)</span></li>
                                        <li><strong className="font-semibold">Tech for Social Good:</strong> Discuss tech's impact on society. <span className='font-medium underline'>(Price Range: BDT 4,000 - BDT 7,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Startup Pitch Competition:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Tech Startup Pitches:</strong> Startups compete for investment opportunities. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 15,000)</span></li>
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

export default TechFestival;
