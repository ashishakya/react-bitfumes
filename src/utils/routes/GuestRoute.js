import React, {useContext} from 'react'
import AppContext from "../../store/AppContext";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";

export default function GuestRoute(props){
    const [isLoggedIn] = useContext(AppContext);

    if(!isLoggedIn) return <Route {...props}/>;

    return <Redirect to="/"/>;
}
