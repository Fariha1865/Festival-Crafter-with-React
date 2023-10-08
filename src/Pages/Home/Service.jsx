import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const {event_id,event_name,event_image,organizing_price,description} = service;
    console.log(service);
    const navigate = useNavigate();

    const handleNavigateToDetailsPage =()=>{
                  navigate(`/serviceDetails/${event_id}`)
    }
    return (
          <div
                className="card"
                data-aos="zoom-in"
              
            >
            <div className="border-2 border-solid border-red-900 card bg-gray-100 shadow-lg shadow-slate-400 text-black transform hover:scale-105 transition duration-300 ease-in-out">
                <img src={event_image} alt="Events" className='h-44 rounded-t-md'/>
                <div className="card-body">
                    <h2 className="card-title text-red-900 font-bold italic">{event_name}</h2>
                    <h2 className="text-sm font-extrabold">Price Range:  <span className='font-normal'> {organizing_price}</span></h2>
                    <p className='text-sm h-40 font-medium'>{description}</p>
                    <div className="card-actions justify-end mt-16 lg:mt-0">
                        <button onClick={handleNavigateToDetailsPage} className="btn bg-red-900 hover:bg-red-700 text-white">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}
export default Service;