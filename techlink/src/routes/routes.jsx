import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Homebase"
import Intro from "../pages/Intro";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgetpassword from "../pages/Forgetpassword";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path : "",
            element : <Home/>
        },
        {
            path : "welcome",
            element : <Intro/>
        },
        {
            path : "login",
            element : <Login/>
        },
        {
            path : "signup",
            element : <Signup/>
        },
        {
            path : "forgetpassword",
            element : <Forgetpassword />
        }
      ]
    },
  ]);


  export default router
  