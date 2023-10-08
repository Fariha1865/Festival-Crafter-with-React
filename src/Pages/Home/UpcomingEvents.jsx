import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const UpcomingEvents = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='p-20'>
            <h1 className="text-4xl font-bold text-center mb-16">Upcoming Events arranged by us</h1>

                <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-offset="100"
                >
                    <div className='flex justify-end'>
                        <div className="card md:w-[700px] bg-base-100 shadow-xl shadow-gray-400 md:flex md:flex-row">
                            <img src="https://i.ibb.co/jwWKLCm/food.jpg" alt="Shoes" className='md:w-1/3 rounded-t-mg' />
                            <div className="card-body">
                                <h2 className="text-black font-bold">Delicious Office-Food Festival</h2>
                                <p className="text-black text-sm">In this festival event hosted in an <span className='italic font-semibold'>office premises</span>, we will be arranging customized decorations, mouthwatering food stalls, food serving, event photography, and much more for a private Delicious Delights Food Festival.</p>
                                <p className="text-black text-sm"><span className='font-bold'>Location:</span> Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="card"
                    data-aos="fade-right"
                    data-aos-offset="100"
                >
                    <div className='flex'>
                        <div className="card md:w-[700px] bg-base-100 shadow-xl shadow-gray-400 md:flex md:flex-row mt-10">
                            <img src="https://i.ibb.co/QvxLwhw/school-winter.jpg" alt="Shoes" className='md:w-1/3 rounded-t-mg' />
                            <div className="card-body">
                                <h2 className="text-black font-bold">School Winter Festival</h2>
                                <p className="text-black text-sm">In this festival event hosted within an <span className='italic font-semibold'>school premises</span>, we will have traditional winter foods, a variety of pithas, winter clothing and accessory stalls, decorations, and event photography and much more !!</p>
                                <p className="text-black text-sm"><span className='font-bold'>Location:</span> Chittagong, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-offset="100"
                >
                    <div className='flex justify-end'>
                        <div className="card md:w-[700px] bg-base-100 shadow-xl shadow-gray-400 md:flex md:flex-row mt-10">
                            <img src="https://i.ibb.co/F51hqSd/Pitha-1.jpg" alt="Shoes" className='md:w-1/3 rounded-t-mg' />
                            <div className="card-body">
                                <h2 className="text-black font-bold">Resort Pitha Festival</h2>
                                <p className="text-black text-sm">In this festival event hosted within an <span className='italic font-semibold'>Scenic Resort</span>, we will be arranging a  Traditional Pitha Festival for the resort guests. Visitors will enjoy delightful variety of traditional pithas, capture cherished moments with event photography, immerse thyself in the festive decorations, and participate in engaging pitha-making workshop stalls.</p>
                                <p className="text-black text-sm"><span className='font-bold'>Location:</span> Sylhet, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   

    );
};

export default UpcomingEvents;
