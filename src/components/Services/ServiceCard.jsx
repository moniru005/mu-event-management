import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ event }) => {
    const {id, title, image, start_date, short_details, venue, price } = event;
    // console.log(event)

    return (
        <div className=" mx-auto  relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                <img
                    src={image}
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased h-14">
                    {title}
                </h4>
                <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased h-12">
                    {short_details}
                </p>
            </div>

            <div className='flex justify-between px-6 text-sm font-semibold'>
                <p className="pb-6 flex items-center gap-2"> <FaMapMarkerAlt></FaMapMarkerAlt> {venue} </p>
                <p className='text-[#fb544e]'>{start_date}</p>
            </div>

            <div className='border-gray-200 border-t h-16 flex justify-between items-center py-10 px-6'>
                <div className=''>
                    <Link to={`/services/${id}`}>
                        <button className='btn bg-slate-800 hover:bg-slate-700 text-white'>Details</button>
                    </Link>
                </div>

                <div className='text-xl font-bold'>
                    <span className='text-[#fb544e] font-extrabold'>$</span> <span className=''>{price}</span>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;