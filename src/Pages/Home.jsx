import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/Navbar";
import Feature1 from "../components/Sections/Feature1";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "../components/Services/Services";
import { Helmet } from "react-helmet-async";

const Home = () => {
    AOS.init();
    return (
        <div className=" mb-12">
            <Helmet><title>Home</title></Helmet>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
                <Feature1></Feature1>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;