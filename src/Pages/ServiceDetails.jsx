
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {

    const events = useLoaderData();
    const {id} = useParams();

    const idInt = parseInt(id)
    const event = events?.find(event => event.id === idInt);
    // console.log(event);

     

    return (
        <>
            <div className="lg:px-12">
                <Navbar></Navbar>
            </div>
            <div className="bg-gray-100">
                <ServiceDetailsCard event={event}></ServiceDetailsCard>
            </div>
        </>
    );
};

export default ServiceDetails;