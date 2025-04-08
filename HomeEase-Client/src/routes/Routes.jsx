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
        // children: [

        // ]
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