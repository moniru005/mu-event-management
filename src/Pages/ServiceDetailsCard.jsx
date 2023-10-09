
const ServiceDetailsCard = ({ event }) => {
    const { id, title, image, event_information, event_about, event_content, start_date, end_date, short_details, venue, address, price, organizer_name, organizer_phone, organizer_email, organizer_website, event_speaker, event_speaker_photo } = event;
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-6 pb-6 mx-12 font-workSans">
                {/* Left side */}
                <div className="lg:col-span-3  px-6 mt-6 bg-white rounded-t-md ">
                    <div className="py-6">
                        <img className="w-full pb-4 rounded" src={image} alt="Image" />
                        <h2 className="text-2xl font-semibold">{title}</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Event Information</h2>
                            <p className="text-justify">{event_information}</p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Event About</h2>
                            <p className="text-justify">{event_about} </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">Event Content</h2>
                            <p className="text-justify pb-6">{event_content}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="px-4 mt-6 lg:mx-auto bg-white rounded-t-md">
                    <h2 className="font-bold text-lg py-6 ">Event Details</h2>
                    {/* Date & Venue */}
                    <div className="space-y-2 font-medium">
                        <div className="flex items-center justify-around gap-4 pb-4 ">
                            {/* <p className="text-lg font-bold">Price:</p> */}
                            <p className="text-[#fb544e] text-4xl font-bold">$ {price}</p>
                            <button className="btn rounded text-white bg-[#fb544e] hover:bg-[#e24742] w-fit">Buy Ticket</button>
                        </div>
                        <div className="flex items-center justify-between gap-4 ">
                            <p>Start Date:</p>
                            <p className="text-gray-500">{start_date}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <p>End Date:</p>
                            <p className="text-gray-500">{end_date}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <p>Venue:</p>
                            <p className="text-gray-500">{venue}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <p>Address:</p>
                            <p className="text-gray-500">{address.slice(0, 18)}</p>
                        </div>
                    </div>
                    <hr className="my-6 border-2" />
                    {/* Organizer */}
                    <div>
                        <h2 className="font-bold text-lg pb-3 ">Organized by</h2>
                        <div className="space-y-6 font-medium">
                            <div className="flex lg:flex-col lg:items-start justify-between items-center gap-2">
                                <p >Organizer:</p>
                                <p className="text-gray-500">{organizer_name}</p>
                            </div>
                            <div className="flex lg:flex-col lg:items-start justify-between items-center gap-2">
                                <p>Phone:</p>
                                <p className="text-gray-500">{organizer_phone}</p>
                            </div>
                            <div className="flex lg:flex-col lg:items-start justify-between items-center gap-2">
                                <p>Email:</p>
                                <p className="text-gray-500">{organizer_email}</p>
                            </div>
                            <div className="flex lg:flex-col lg:items-start justify-between items-center gap-2">
                                <p>Website: </p>
                                <p className="text-gray-500">{organizer_website}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-2" />
                    {/* Speaker */}
                    <div>
                        <h2 className="font-bold text-xl pb-3 ">Event Speaker</h2>
                        <div className="space-y-6 font-medium">
                            <div className="flex lg:flex-col gap-2">
                                <p >Speaker Name:</p>
                                <p className="text-gray-500">{event_speaker}</p>
                            </div>
                            <div className="flex flex-col gap-2 pb-6">
                                <p >Speaker Photo:</p>
                                <img src={event_speaker_photo} alt="Speaker Photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;