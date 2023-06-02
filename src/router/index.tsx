import { createBrowserRouter, RouteObject } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { AuthLayout } from "../layouts/AuthLayout";

export const publicRoutes : RouteObject[] = [
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    }
]

const router = createBrowserRouter([
    ...publicRoutes
]);

export default router;