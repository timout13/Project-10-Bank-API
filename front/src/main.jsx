import { StrictMode } from 'react'
import './assets/css/style.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import Profile from "./pages/Profile/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <StrictMode>
       <Header />
       <RouterProvider router={router} />
       <Footer/>
   </StrictMode>
);