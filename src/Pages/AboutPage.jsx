import { Helmet } from "react-helmet-async";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

const AboutPage = () => {
    return (
        <div>
            <Helmet> <title>About</title></Helmet>
            <div className="lg:px-12 mb-16">
                <Navbar></Navbar>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutPage;