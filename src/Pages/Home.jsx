import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/Navbar";
import Feature1 from "../components/Sections/Feature1";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
    AOS.init();

    return (
        <>
            
            <div className="">
                <div className="lg:px-12">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Banner></Banner>
                </div>
                
                <div className="z-50 mt-6 px-12" data-aos="fade-up" data-aos-duration="1000">
                    <Services></Services>
                </div>
                <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
                    <Feature1></Feature1>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Home;