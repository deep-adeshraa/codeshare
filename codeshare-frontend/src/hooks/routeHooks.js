import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../helpers/authHelpers';

const PrivateRoute = () => {
    return (
        isLoggedIn() ? <Outlet /> : <Navigate to="/signin" />
    );
};

const PublicRoute = (restricted) => {
    return (
        isLoggedIn() && restricted ? <Navigate to="/code" /> : <Outlet />
    );
};


export { PrivateRoute, PublicRoute };
