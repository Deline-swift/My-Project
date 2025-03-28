
import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Services from "../pages/services/Services";
import FarmersDashboard from "../pages/farmersDashboard/FarmersDashboard";
import Testimonails from "../pages/testimonails/Testimonails";
import ContactUs from "../pages/contactUs/ContactUs";
import AboutUs from "../pages/aboutUs/AboutUs";
import FarmerSignup from "../pages/farmersignup/FarmerSignup";
import BuyerSignup from "../pages/buyerSignup/BuyerSignup";
import BuyerDashboard from "../pages/buyerdashboard/BuyerDashboard";
import Login from "../pages/login/Login";






const children = [

  
    { element: <Home />,

     path: "/" },
     { element: <Services />,

     path: "/services" },
     { element: <FarmersDashboard />,

     path: "/farmersDashboard" },

     { element: <Testimonails />,

     path: "/testimonails" },
     { element: <ContactUs />,

     path: "/contactus" },

     { element: <AboutUs />,

     path: "/aboutUs" },

     { element: <FarmerSignup />,

     path: "/farmersignup" },

     { element: <BuyerSignup />,

     path: "/buyerSignup" },
     { element: <BuyerDashboard />,

     path: "/buyerdashboard" },

     { element: <Login/>,

     path: "/login" },
     
     
     


    

];


export const router = createBrowserRouter([
    
      {
        element: <Layout/>,
        path: "",
        errorElement: (
          <a href="/" className="text-center">
            This page does not exist
          </a>
          ),
      children,
    },
  ]);