import Marquee from "react-fast-marquee";
const Reviews = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center italic font-mono">Customer Reviews</h1>

            <Marquee pauseOnHover={false} speed={50} className="flex gap-20">

                <div className="flex gap-20 mt-16 mb-20">

                <div className="flex flex-col items-center">
                    <img src="https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">Sara Kabir</h1>
                    <p className="w-52 text-center text-sm">Attended the literature and books festival and loved it! Great selection of books and engaging sessions.</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1464863979621-258859e62245" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">Tasneem Anjum</h1>
                    <p className="w-52 text-center text-sm">The pitha festival was a delight! Traditional pithas and workshops made it a memorable experience.</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">Rayhan Chowdhury</h1>
                    <p className="w-52 text-center text-sm">The art and music festival was incredible! The talent showcased was truly remarkable.</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">John Smith</h1>
                    <p className="w-52 text-center">Awesome food festival! The variety of dishes was incredible, and the event was well-organized.</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1613005798967-632017e477c8" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">pheebe Aren</h1>
                    <p className="w-52 text-center text-sm">Impressive technology festival! Learned a lot and had a great time exploring new tech.</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb" alt="" className="h-20 w-20 rounded-full" />
                    <h1 className="font-bold text-xl mt-5">Rafia Alam</h1>
                    <p className="w-52 text-center text-sm">The fruit festival was a treat! Fresh and delicious fruits, and a fun family day out.</p>
                </div>
                </div>

            </Marquee>
        </div>
       
    );
};

export default Reviews;