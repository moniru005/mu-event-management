import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [events, setEvents] = useState([]);

    useEffect(() =>{
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div>
            {
                events?.map(event => <ServiceCard key ={event.id} event ={event}></ServiceCard>)
            }
        </div>
    );
};

export default Services;