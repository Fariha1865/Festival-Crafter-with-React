import PropTypes from 'prop-types';
import Service from './Service';
const Services = ({ services }) => {

    const allServices = services.services;
    console.log(services)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Services we provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 gap-10'>
                {
                    allServices.map(service => <Service key={service.event_id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

Services.propTypes = {
    services: PropTypes.object
}
export default Services;