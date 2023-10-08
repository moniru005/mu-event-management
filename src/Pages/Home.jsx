import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/Navbar";
import Feature1 from "../components/Sections/Feature1";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Services from "../components/Services/Services";

const Home = () => {
    AOS.init();
    return (
        <>
            
            <div className="mb-12">
                <div className="lg:px-12">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Banner></Banner>
                </div>
                <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
                    <Feature1></Feature1>
                </div>
                <div className="z-50 mt-6 px-12">
                    <Services></Services>
                </div>
            </div>
        </>
    );
};

export default Home;