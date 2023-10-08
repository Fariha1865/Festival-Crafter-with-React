import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import leftCardOne from "../../assets/1.jpg"
import leftCardTwo from "../../assets/2.png"
import leftCardThree from "../../assets/3.jpg"
import leftCardFour from "../../assets/4.jpg"
import leftCardFive from "../../assets/5.jpg"
import leftCardSix from "../../assets/6.png"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const sliderItems = [
    {
        src: leftCardOne,
        text: "Let us handle the feast: Your Food Festival, Our Expertise!",
    },
    {
        src: leftCardTwo,
        text: "Fruitful Festivals Made Easy: Trust Our Event Management Team!",
    },
    {
        src: leftCardThree,
        text: "Warm Hearts, Cool Events: Winter Festival Coordination Excellence!",
    },
    {
        src: leftCardFour,
        text: "A Symphony of Creativity: Art & Music Festival Management Excellence!",
    },
    {
        src: leftCardFive,
        text: "Turning Pages, Turning Heads: Choose Us for Book Festival Management!",
    },
    {
        src: leftCardSix,
        text: "Geek Out with Confidence: Technology Festival Coordination Excellence!",
    },

];

const Slider = () => {
    return (
        <div >


            <AutoplaySlider className='h-[500px] mt-20 lg:mt-0'

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