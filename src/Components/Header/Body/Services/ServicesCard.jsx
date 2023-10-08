import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {id, name, image, description, cost} = service || {};
    return (
        <div>
            <div className="card w-[400px] lg:w-[500px] bg-amber-100 shadow-md lg:h-[50vh]">
            <figure ><img className="lg:h-[35vh] rounded-lg w-[400px] lg:w-[500px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="font-bold text-red-600">{cost}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                 <Link to={`/service/${id}`}>
                 <button className="btn btn-success">Details</button>
                 </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServicesCard;