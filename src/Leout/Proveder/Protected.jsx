import { useContext } from "react";
import { Authconstex } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Protected = ({children}) => {
    const {user, loder} = useContext(Authconstex);
    const loction = useLocation();
    console.log(loction);
    if (loder) {
        return <div className="text-center mt-6"><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={loction.pathname} to = '/LogIn'></Navigate>
};
Protected.propTypes ={
    children:PropTypes.node,
}
export default Protected;