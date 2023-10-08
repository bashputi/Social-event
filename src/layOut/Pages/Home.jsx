import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Header/Body/Services/Services";
import Footer from "../../Components/Header/Body/Footer";
import ExtraOne from "../../Components/Header/Body/extraPart/ExtraOne";
import Extra from "../../Components/Header/Body/extraPart/Extra";


const Home = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Extra></Extra>
            <ExtraOne></ExtraOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;