import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem('userToken');
};

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};