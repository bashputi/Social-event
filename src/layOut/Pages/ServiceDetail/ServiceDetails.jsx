import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState();
    const { id } = useParams ();
    const services = useLoaderData('/wedding.json');

    useEffect(() => {
           const findServiceDetails = services?.find(serviceDetails => serviceDetails.id == id);
           setServiceDetails(findServiceDetails);
    }, [id,services])


    return (
        <div>
            <div>
                <h1 className="text-xl lg:text-4xl text-center my-6 text-amber-600">Imagine Your Desired Plan!</h1>
            </div>
           <ServiceDetailsCard serviceDetails={serviceDetails}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;