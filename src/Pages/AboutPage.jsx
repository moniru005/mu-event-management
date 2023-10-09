import About from "../components/About/About";
import Navbar from "../components/Header/Navbar";

const AboutPage = () => {
    return (
        <div>
            <div className="lg:px-12">
                <Navbar></Navbar>
            </div>
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default AboutPage;