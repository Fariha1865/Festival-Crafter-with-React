import { useParams } from "react-router-dom";
import Food from "./Food";
import Fruit from "./Fruit";


const ServiceDetails = () => {


    const {id} = useParams();

    console.log(id)
    return (
        <div>
          {
             id==="1" ? <Food></Food> : 
             id==="2" ? <Fruit></Fruit>:""
          }
        </div>
    );
};

export default ServiceDetails;