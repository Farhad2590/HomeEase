import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../Pages/Home";
import Main from "../Layout/Main";
import SignIn from "../Pages/Signin";

import Dashboard from "../Layout/Dashboard";
import SignUpFlow from "../Components/SharedComponets/SignUpFlow";
import ServicesPage from "../Pages/ServicesPage";
import Profile from "../Pages/Profile";
import AddServiceForm from "../Pages/ServiceProviders/AddService";
import CategoriesManagement from "../Pages/Admin/CategoriesManagement";
import AllUsers from "../Pages/Admin/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/services",
                element: <ServicesPage />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
           
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            //provider routes
            {
                path: "/dashboard/addServices",
                element: <AddServiceForm />,
            },

            //admin routes
            {
                path: "/dashboard/manage-categories",
                element: <CategoriesManagement />,
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers />,
            },
        ]
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUpFlow />
    }
]);