import React from 'react'
import {UserAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    const navigate = useNavigate();
    if (!user) {
        navigate("/");
    }
    return children;
}
export default ProtectedRoute
