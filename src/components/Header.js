import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggedIn, user] = useContext(AppContext)
    const history = useHistory();

    const handleLogOut = () => {
        firebase.auth().signOut().then(function () {
            history.replace("/login")
            // setIsLoggedIn(false)
        }).catch(function (error) {
            console.log(error.response.data)
        });
    }
    return (
        <nav className="py-5 bg-gray-900 text-white flex justify-between">
            <ul className="flex justify-between px-10">
                <li className="mr-5">
                    <NavLink to="/" exact={true} activeClassName="underline">Home</NavLink>
                </li>
                <li className="mr-5">
                    <NavLink to="/gallery" activeClassName="underline">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/tensorflow" activeClassName="underline">Tensor Flow</NavLink>
                </li>
            </ul>
            <ul className="flex justify-between px-10">
                <li className="mr-5">
                    {
                        isLoggedIn ?
                            <button onClick={handleLogOut}>Logout</button>
                            :
                            <NavLink to="/login" activeClassName="underline">Login</NavLink>
                    }
                </li>
                <li className="mr-5">
                    {
                        !isLoggedIn && <NavLink to="/signup" activeClassName="underline">SignUp</NavLink>
                    }
                </li>

            </ul>
            {/*<a href="/">Home</a>*/}
            {/*<a href="/login">Login</a>*/}
            {/*<a href="/gallery">Gallery</a>*/}
        </nav>
    )
}


