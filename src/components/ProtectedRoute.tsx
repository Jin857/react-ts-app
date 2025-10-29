// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
    requiredRoles?: string[];
    userRole?: string;
    fallbackPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAuthenticated,
    requiredRoles = [],
    userRole,
    fallbackPath = '/login',
}) => {
    const location = useLocation();

    if (!isAuthenticated) {
        return (
            <Navigate
                to={fallbackPath}
                state={{ from: location }}
                replace
            />
        );
    }

    if (requiredRoles.length > 0 && userRole && !requiredRoles.includes(userRole)) {
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;