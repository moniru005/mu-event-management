import { Helmet } from "react-helmet-async";
import Navbar from "../components/Header/Navbar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
    return (
        <div>
            <Helmet><title>Contact</title></Helmet>
            <div className="lg:px-12">
                <Navbar></Navbar>
            </div>
            <div className="mt-16 mb-16">
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ContactPage;