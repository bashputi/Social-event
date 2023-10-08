


const ServiceDetailsCard = ({ serviceDetails }) => {
    const { name, image, description, cost} = serviceDetails || {};

    return (
        <div className="flex justify-center lg:h-[80vh] items-center">
           <div>
           <div className="card w-[85vw] bg-lime-100 lg:py-5 lg:px-5 lg:card-side shadow-xl">
            <figure><img src={image} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{cost}</p>
                <p>{description}</p>
                <p>Planning a wedding can get exhausting and overwhelming if you don’t know the way ahead. Be it Jaipur or anywhere else, there are some steps to follow to find the perfect wedding planner.
            <br /> <br />
            You need research! Google is your savior here! Search for the best wedding planners or something related, and there begins your research. You can get the info, price, reviews, everything you want to know about! Make sure to look for specific things you would want at the wedding!</p>
            </div>
            </div>
           </div>
           
        </div>
    );
};

export default ServiceDetailsCard;