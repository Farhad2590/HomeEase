import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Main from "../Layout/Main";
import SignIn from "../Pages/Signin";

import Dashboard from "../Layout/Dashboard";
import SignUpFlow from "../Components/SharedComponets/SignUpFlow";
import ServicesPage from "../Pages/ServicesPage";
import Profile from "../Pages/Profile";
import AddServiceForm from "../Pages/ServiceProviders/AddService";
import MyServices from "../Pages/ServiceProviders/MyServices";
import CategoriesManagement from "../Pages/Admin/CategoriesManagement";
import AllUsers from "../Pages/Admin/AllUsers";
// import ServicesManagement from "../Pages/Admin/ServicesManagement";
// import BookingPage from "../Pages/BookingPage";

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
      // {
      //   path: "/booking/:serviceId",
      //   element: <BookingPage />,
      // },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //provider routes
      {
        path: "/dashboard/addServices",
        element: <AddServiceForm />,
      },
      {
        path: "/dashboard/my-services",
        element: <MyServices />,
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
      // {
      //   path: "/dashboard/manage-services",
      //   element: <ServicesManagement />,
      // },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUpFlow />,
  },
]);
