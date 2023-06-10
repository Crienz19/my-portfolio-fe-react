import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store-hooks";
import { authSelector } from "../store/authSlice";
import React from 'react';

type Props = {
    children: React.JSX.Element;
}

const ProtectedRoute : React.FC<Props> = ({ children }) => {
    
    const { isAuthenticated } = useAppSelector(authSelector);

    return isAuthenticated ? children : <Navigate to="/auth/login" replace />
}

export default ProtectedRoute;