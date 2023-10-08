import { useParams } from "react-router-dom";
import FruitFestival from "./ServicesById/Fruit";
import FoodFestival from "./ServicesById/Food";
import WinterFestival from "./ServicesById/Winter";
import Art_MusicFestival from "./ServicesById/Art_Music";
import LiteratureBookFestival from "./ServicesById/Literature";
import TechFestival from "./ServicesById/Tech";


const ServiceDetails = () => {


    const {id} = useParams();

    console.log(id)
    return (
        <div>
          {
             id==="1" ? <FoodFestival></FoodFestival> : 
             id==="2" ? <FruitFestival></FruitFestival> :
             id==="3" ? <WinterFestival></WinterFestival> :
             id==="4" ? <Art_MusicFestival></Art_MusicFestival> :
             id==="5" ? <LiteratureBookFestival></LiteratureBookFestival>:
             id==="6" ? <TechFestival></TechFestival>:""
          }
        </div>
    );
};

export default ServiceDetails;