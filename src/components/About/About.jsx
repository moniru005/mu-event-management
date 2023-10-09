import { Link } from 'react-router-dom';
import image1 from '../../assets/images/about1.png';
import image2 from '../../assets/images/organizerEvent.png'
import { FaPeopleRoof, FaCalendar, FaTicket } from 'react-icons/fa6';


const About = () => {
    return (
        <div className="px-12 font-workSans mt-6 lg:mt-0">
            {/* Welcome */}
            <div className="lg:flex flex-col lg:flex-row-reverse gap-14 justify-around items-center">
                <img className="lg:w-96 flex-1 mx-auto " src={image1} alt="" />
                <div className="flex-1  font-workSans p-4">
                    <h2 className="text-2xl font-semibold  text-[#fb544e]">Welcome</h2>
                    <h2 className="text-5xl font-bold my-3">We Inspire People to  Go Out More</h2>
                    <p className="mt-6 text-justify">Influential media, entertainment & technology show inspiration speaker clouding game changing not just a large scale conference educational hub on digital technologies for business, where people communicate, inspired find.
                    </p>
                    <Link to="/services">
                        <button className="btn border-slate-800 border-2 bg-white text-slate-900 mt-6"> See All Event </button>
                    </Link>
                </div>
            </div>

            {/* 3 Cards */}
            <div className='lg:px-24 mt-16 flex lg:flex-row flex-col lg:gap-4 gap-4'>
                <div className='cards lg:w-96 shadow-slate-400 shadow-lg rounded-lg p-6'>
                    <div className='flex gap-4 justify-center items-center'>
                        <FaPeopleRoof className='text-8xl text-teal-700'></FaPeopleRoof>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-bold'>30k+</h2>
                            <p className='text-xl font-medium'>Event Organizers</p>
                        </div>
                    </div>
                </div>
                <div className='cards lg:w-96 shadow-slate-400 shadow-lg rounded-lg p-6'>
                    <div className='flex gap-4 justify-center items-center'>
                        <FaCalendar className='text-8xl text-red-300'></FaCalendar>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-bold'>24k+</h2>
                            <p className='text-xl font-medium'>Event Hosted</p>
                        </div>
                    </div>
                </div>
                <div className='cards lg:w-96 shadow-slate-400 shadow-lg rounded-lg p-6'>
                    <div className='flex gap-4 justify-center items-center'>
                        <FaTicket className='text-8xl text-orange-300'></FaTicket>
                        <div className='space-y-2'>
                            <h2 className='text-4xl font-bold'>10.4m+</h2>
                            <p className='text-xl font-medium'>Ticket Sold</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* organizers */}

            <div className="lg:flex lg:flex-row flex-col gap-14 justify-around items-center mt-24 mb-16">
                <img className="lg:w-96 flex-1 mx-auto rounded-xl " src={image2} alt="" />
                <div className="flex-1  font-workSans p-4">
                    <h2 className="text-2xl font-semibold  text-[#fb544e]">Organizers</h2>
                    <h2 className="text-5xl font-bold my-3">Event Organizers</h2>
                    <p className="mt-6 text-justify">Education expo is a perfect opportunity for students who want to explore various options for their future. Event organizers make sure that every participant will get the most out of the event. They provide forum for exhibitors to share their latest innovations and products with visitors. In addition, various workshops and seminar sessions are conducted to provide in-depth information about the courses on offer. This event is definitely a not-to-be-missed opportunity for all students and their parents.
                    </p>
                    
                </div>
            </div>
            

        </div>
    );
};

export default About;