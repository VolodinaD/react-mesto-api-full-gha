import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    return props.loggedIn ? props.element : <Navigate to="/signin" replace />
}

export default ProtectedRoute;