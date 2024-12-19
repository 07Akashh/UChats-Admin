import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const user = useSelector((state) => state.adminAuth.user);

    if (!user) {
        return <Navigate to="/admin/login" />;
    }
    return children;
};

export default PrivateRoute;
