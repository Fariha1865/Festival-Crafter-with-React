import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import leftCardOne from "../../assets/1.jpg"
import leftCardTwo from "../../assets/2.jpg"
import leftCardThree from "../../assets/3.jpg"
import leftCardFour from "../../assets/4.jpg"
import leftCardFive from "../../assets/5.jpg"
import leftCardSix from "../../assets/6.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const sliderItems = [
    {
        src: leftCardOne,
        text: "Flavorful Food Festivals, Seamless Management",
    },
    {
        src: leftCardTwo,
        text: "Experience Our Expert Fair Management Services",
    },
    {
        src: leftCardThree,
        text: "Art Exhibition Management Experts",
    },
    {
        src: leftCardFour,
        text: "Elevating Durga Puja Celebrations with Our Expertise",
    },
    {
        src: leftCardFive,
        text: "Eid Festivity Masters: Elevating Your Eid Celebrations",
    },
    {
        src: leftCardSix,
        text: "Mastering Victory Day Celebrations",
    },
    // Add more items as needed
];

const Slider = () => {
    return (
        <div >


            <AutoplaySlider className='h-[500px]'

                play
                cancelOnInteraction={false}
                interval={1000}

            >

                {sliderItems.map((item, index) => (
                    <div key={index} data-src={item.src} className='flex justify-center items-center'>
                        <div className='m-5 absolute opacity-70 bg-white rounded-md p-2 z-0'>
                            <p className='z-10 text-3xl text-red-900 font-extrabold  p-2'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </AutoplaySlider>




        </div>
    );
};

export default Slider;