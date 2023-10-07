import { useParams, useRouteLoaderData } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {

    const [event, setEvent] = useState();
    console.log(event)

    const services = useRouteLoaderData();
    console.log(services)
    const {id} = useParams();

    useEffect(() => {
        console.log(services)
        const findEvent = services?.find(event => event.id === id)
        setEvent(findEvent);
    
    }, [id, services])

    

    return (
        <>
            <div className="lg:px-12">
                <Navbar></Navbar>
            </div>
            <div>
                <ServiceDetailsCard event={event}></ServiceDetailsCard>
            </div>
        </>
    );
};

export default ServiceDetails;