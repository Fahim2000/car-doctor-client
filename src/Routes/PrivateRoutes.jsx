import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <progress className="progress w-full"></progress>;
    }

    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;