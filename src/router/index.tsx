import { createBrowserRouter, RouteObject } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { AuthLayout } from "../layouts/AuthLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../utils/ProtectedRoute";
import PublicRoute from "../utils/PublicRoute";

export const routes : RouteObject[] = [
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                )
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                )
            }
        ]
    },
    { 
        path: '/',
        element: <h1>Default</h1>
    }
];



const router = createBrowserRouter([
    ...routes
]);

export default router;