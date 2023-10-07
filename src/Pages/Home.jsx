import Banner from "../components/Banner/Banner";
import Navbar from "../components/Header/Navbar";
import Feature1 from "../components/Sections/Feature1";

const Home = () => {
    return (
        <div className=" mb-12">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <Feature1></Feature1>
            </div>
        </div>
    );
};

export default Home;