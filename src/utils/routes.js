import Home from "../Pages/Home";
import React from 'react'
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export default [
    {
        path:'/',
        exact:true,
        component: ()=><Home/>,
        protected: null
    },
    {
        path:'/gallery',
        exact:false,
        component: ()=><Gallery/>,
        protected: "auth"
    },
    {
        path:'/login',
        exact:false,
        component: ()=><Login/>,
        protected: "guest"
    },
    {
        path:'/signup',
        exact:false,
        component: ()=><SignUp/>,
        protected: "guest"
    }
]
