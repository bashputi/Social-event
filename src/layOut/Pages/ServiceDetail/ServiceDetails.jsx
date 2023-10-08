import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState();
    const { id } = useParams ();
    const services = useLoaderData();

    useEffect(() => {
           const findServiceDetails = services?.find(serviceDetails => serviceDetails.id == id);
           setServiceDetails(findServiceDetails);
    }, [id,services])


    return (
        <div>
           <ServiceDetailsCard serviceDetails={serviceDetails}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;