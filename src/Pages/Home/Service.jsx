import PropTypes from 'prop-types';
const Service = ({ service }) => {

    const {event_id,event_name,event_image,organizing_price,description} = service;
    console.log(service)
    return (
        <div>
            <div className="card bg-base-100 shadow-lg shadow-slate-400 text-black transform hover:scale-105 transition duration-300 ease-in-out">
                <img src={event_image} alt="Events" className='h-40'/>
                <div className="card-body">
                    <h2 className="card-title text-red-900 font-bold italic">{event_name}</h2>
                    <h2 className="text-sm font-extrabold">Price Range:  <span className='font-normal'> {organizing_price}</span></h2>
                    <p className='text-sm h-40'>{description}</p>
                    <div className="card-actions justify-end mt-16 lg:mt-0">
                        <button className="btn bg-red-900 hover:bg-red-700 text-white">See Details</button>
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