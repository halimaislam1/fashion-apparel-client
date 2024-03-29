import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Component/Provider/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if(loading){
       return <span className="loading loading-spinner text-error loading-lg ml-52 md:ml-96 "></span>
    }

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;