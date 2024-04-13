import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Cabins from "../pages/Cabins"
import PropertyDetails from "../pages/PropertyDetails"
import ContactUs from "../pages/ContactUs"
import Activities from "../pages/Activities"
import TermsConditions from '../pages/TermsConditions'


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/rooms",
        element: <Cabins/>
    },
    {
        path: "/your-stay",
        element: <PropertyDetails/>
    },
    {
        path: "/contact-us",
        element: <ContactUs/>
    },
    {
        path: "/local-adventures",
        element: <Activities/>
    },
    {
        path: "terms-conditions",
        element: <TermsConditions />
    }
    

])

export default Routes

