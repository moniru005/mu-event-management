import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <div className="flex w-screen h-screen justify-center">
            <span className="loading loading-spinner text-secondary"></span>
        </div>; 
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}