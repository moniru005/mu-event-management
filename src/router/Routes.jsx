import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import ServiceDetails from "../Pages/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import ServicePage from "../Pages/ServicePage";
import LoginPage from "../Pages/LoginPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/services',
                element:<PrivateRoutes><ServicePage></ServicePage></PrivateRoutes>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/contact',
                element: <PrivateRoutes><ContactPage></ContactPage></PrivateRoutes>
            },
            {
                path: '/event/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch('events.json')
            }
        ]
    }
]) 

export default Routes;