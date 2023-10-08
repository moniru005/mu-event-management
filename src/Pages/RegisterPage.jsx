import { Link } from "react-router-dom";
import Register from "../Auth/Register";
import Navbar from "../components/Header/Navbar";


const RegisterPage = () => {

    return (
        <>
           
            <div className="lg:px-12">
                <Navbar></Navbar>
                <div className="lg:w-2/6 mx-auto">
                    <Register></Register>
                    <div className="lg:mb-6 mb-6 font-workSans">
                        <p className="text-black text-center">Already have an account? Please 
                            <Link className="font-semibold" to="/login"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;