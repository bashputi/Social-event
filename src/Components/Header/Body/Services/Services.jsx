import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
    return (
        <div className="flex justify-center">
            <div>
            <h1 className="text-5xl font-bold text-amber-500 text-center my-10">Our Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[90vw]">
                {
                    services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;