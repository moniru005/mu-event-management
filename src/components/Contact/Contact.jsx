import { Link } from "react-router-dom";
import image3 from '../../assets/images/contact-us-image.jpg';

const Contact = () => {
    return (
        <div className="px-12 font-workSans">
            <div className="lg:flex flex-col lg:flex-row-reverse  gap-14 justify-around items-center">
                <img className="lg:w-96 flex-1 mx-auto rounded" src={image3} alt="" />
                <div className="flex-1  font-workSans p-4">
                    <h2 className="text-2xl font-semibold pl-2 text-[#fb544e] ">Feel free to</h2>
                    <h2 className="text-5xl font-bold mb-3  ">Contact Us</h2>
                    <p className="mt-6 text-justify">MU~Event Organizer of Education Events is a full-service event planning and production company that specializes in creating unforgettable educational events. We provide comprehensive services for all types of events, from small meetings to large conferences and trade shows. Our team has the experience and knowledge needed to make your event successful, no matter what size or budget. 
                    </p>
                    <p className="mt-3">Contact Us: Phone Number: +1 (888) 888-8888 Email Address: info@mueventorganizer.com</p>
                    <Link to="/services">
                        <button className="btn border-slate-800 border-2 bg-white text-slate-900 mt-6"> See All Event </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;