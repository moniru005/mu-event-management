import { useEffect, useState } from "react";

import ServiceCard from "./ServiceCard";

const Services = () => {
    const [events, setEvents] = useState([]);
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    return (
        <>
            <div className="mb-12 text-center">
                <h4 className="font-caveat text-3xl italic font-semibold text-[#fb544e]" >Upcoming Event</h4>
                <h2 className="font-workSans text-5xl font-bold py-2">Featured Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {showAll ?
                    events?.map(event => <ServiceCard key={event.id} event={event}> </ServiceCard>) :

                    events?.slice(0, 4).map(event => <ServiceCard key={event.id} event={event}> </ServiceCard>)
                }
            </div>
            <div className="mt-10 lg:mb-16">
                <button onClick={() => setShowAll(!showAll)} className="btn bg-[#fb544e] text-white mx-auto flex">
                    {!showAll ? 'Show All' : 'Less'}
                </button>
            </div>
        </>
    );
};

export default Services;