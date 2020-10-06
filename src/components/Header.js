import React, {useContext } from "react";
import {NavLink, useHistory} from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggedIn, user] = useContext(AppContext)
    const history = useHistory();

    const handleLogOut = () =>{
        firebase.auth().signOut().then(function() {
            history.replace("/login")
            // setIsLoggedIn(false)
        }).catch(function(error) {
            console.log(error.response.data)
        });
    }
    return (
        <nav className="py-5 bg-gray-900 text-white">
            <ul className="flex justify-between px-10">
                <span className="flex">
                    <li className="mr-5">
                        <NavLink to="/" exact={true} activeClassName="underline">Home</NavLink>
                     </li>
                    <li>
                         <NavLink to="/gallery" activeClassName="underline">Gallery</NavLink>
                     </li>
                </span>
                <li className="mr-5">
                    {
                        isLoggedIn ?
                            <button onClick={handleLogOut}>Logout</button>
                            :
                            <NavLink to="/login" activeClassName="underline">Login</NavLink>
                    }
                </li>

            </ul>
            {/*<a href="/">Home</a>*/}
            {/*<a href="/login">Login</a>*/}
            {/*<a href="/gallery">Gallery</a>*/}
        </nav>
    )
}


