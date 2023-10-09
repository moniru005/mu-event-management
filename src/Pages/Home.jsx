import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/Navbar";
import Feature1 from "../components/Sections/Feature1";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact/Contact";

const Home = () => {
    AOS.init();

    return (
        <>
            <Helmet><title>Home Page</title></Helmet>
            <div className="">
                <div className="lg:px-12">
                    <Navbar></Navbar>
                </div>
                <div>
                    <Banner></Banner>
                </div>

                <div className="z-50 mt-6 px-12" data-aos="fade-up" data-aos-duration="1500">
                    <Services></Services>
                </div>
                <div className="mt-6" data-aos="fade-up" data-aos-duration="1500">
                    <Feature1></Feature1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <About></About>
                </div>
                <div className="my-12" data-aos="fade-up" data-aos-duration="1000">
                    <Contact></Contact>
                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
};

export default Home;