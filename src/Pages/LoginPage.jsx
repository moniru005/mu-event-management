import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import Navbar from "../components/Header/Navbar";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
    return (
        <>
            <Helmet><title>Login | Event Management</title></Helmet>
            <div>
                <Navbar></Navbar>
                <div className="lg:w-2/6 mx-auto">
                    <Login></Login>
                </div>
                <div className="lg:mb-6 mb-6">
                    <p className="text-black text-center">If you are new here? Please
                        <Link className="font-semibold" to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;