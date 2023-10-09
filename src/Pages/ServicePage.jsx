import { Helmet } from "react-helmet-async";
import Navbar from "../components/Header/Navbar";
import Services from "../components/Services/Services";

const ServicePage = () => {
    return (
        <>
        <Helmet><title>Services</title></Helmet>
            <div>
                <div className="lg:px-12">
                    <Navbar></Navbar>
                </div>
                <div className="z-50 mt-6 px-12">
                    <Services></Services>
                </div>
            </div>
        </>
    );
};

export default ServicePage;