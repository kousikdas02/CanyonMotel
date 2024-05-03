import React from 'react'
import { Outlet, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Cabins from "../pages/Cabins"
import PropertyDetails from "../pages/PropertyDetails"
import ContactUs from "../pages/ContactUs"
import Activities from "../pages/Activities"
import TermsConditions from '../pages/TermsConditions'
import ActivitiesDetails from '../pages/ActivitiesDetails'
import SpecialDeals from '../pages/SpecialDeals'

const AppLayout = () => (
    <>
        <ScrollRestoration />
        <Outlet />
    </>
);
// const Routes = createBrowserRouter( 


const Routes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/our-rooms",
                element: <Cabins />
            },
            {
                path: "/your-stay",
                element: <PropertyDetails />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/local-adventures",
                element: <Activities />
            },
            {
                path: "/terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "/special-deals",
                element: <SpecialDeals />
            },
            {
                path: "/local-adventures/attractions",
                element: <ActivitiesDetails />
            },

        ]
    },


  ]);

export default Routes

