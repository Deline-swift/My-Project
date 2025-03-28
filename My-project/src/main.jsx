import ReactDOM from "react-dom/client";

import { AppProvider } from "./provider/AppProvider";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import "./assets/styles/Styles.css"

// import AppProvider from './provider/AppProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)