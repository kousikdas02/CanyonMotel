import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"
import Cabins from "../pages/Cabins"
import PropertyDetails from "../pages/PropertyDetails"
import ContactUs from "../pages/ContactUs"
import Activities from "../pages/Activities"
import TermsConditions from '../pages/TermsConditions'
import OurStory from '../pages/OurStory'


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/our-rooms",
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
        path: "/terms-conditions",
        element: <TermsConditions />
    },
    {
        path: "/our-story",
        element: <OurStory />
    },
    

])

export default Routes

