
import Service from './Service';
import { useEffect, useState } from 'react';


const Services = () => {

    


    const [allServices,setAllServices] = useState([]);

    useEffect(()=>{
         fetch('services.json')
         .then(res=>res.json())
         .then(data=>setAllServices(data.services))
    },[])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center italic font-mono">Services we provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 gap-10'>
                {
                    allServices?.map(service => <Service key={service.event_id} service={service}></Service>)
                }
            </div>

        </div>
    );
};


export default Services;