import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg h-screen mx-auto"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;