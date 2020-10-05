import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import firebase from "../config/firebase";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true)
            }
        })
    }, [])

    const handleLogOut = () =>{
        firebase.auth().signOut().then(function() {
            history.replace('/login')
            setIsLoggedIn(false)
        }).catch(function(error) {
            console.log(error.response.data)
        });
    }
    return (
        <nav className="py-5 bg-gray-900 text-white">
            <ul className="flex justify-between px-10">
                <span className="flex">
                    <li className="mr-5">
                        <Link to="/">Home</Link>
                     </li>
                    <li>
                         <Link to="/gallery">Gallery</Link>
                     </li>
                </span>
                <li className="mr-5">
                    {
                        isLoggedIn ?
                            <button onClick={handleLogOut}>Logout</button>
                            :
                            <Link to="/login">Login</Link>
                    }
                </li>

            </ul>
            {/*<a href="/">Home</a>*/}
            {/*<a href="/login">Login</a>*/}
            {/*<a href="/gallery">Gallery</a>*/}
        </nav>
    )
}


