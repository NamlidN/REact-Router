import { useParams } from "react-router-dom";
import CarDetails from '../CarDetails';



function BlogDetails() {
    let params = useParams();
    console.log(params);
    let cc = CarDetails[params.id - 1];
    return (
        <div>
            <h1>{cc.CarMake}</h1>
            <h1>{cc.carModel}</h1>
            <h1>{cc.CarYear}</h1>
        </div>
    );
}

export default BlogDetails;