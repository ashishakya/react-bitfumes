import Home from "../Pages/Home";
import React from 'react'
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";

export default [
    {
        path:'/',
        exact:true,
        component: ()=><Home/>
    },
    {
        path:'/gallery',
        exact:false,
        component: ()=><Gallery/>
    },
    {
        path:'/login',
        exact:false,
        component: ()=><Login/>
    }
]
