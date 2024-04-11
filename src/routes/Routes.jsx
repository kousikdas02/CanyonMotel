import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Cabins from "../pages/Cabins"
import PropertyDetails from "../pages/PropertyDetails"
import ContactUs from "../pages/ContactUs"
import Activities from "../pages/Activities"


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/cabins",
        element: <Cabins/>
    },
    {
        path: "/property-details",
        element: <PropertyDetails/>
    },
    {
        path: "/contact-us",
        element: <ContactUs/>
    },
    {
        path: "/activities",
        element: <Activities/>
    }
    

])

export default Routes

