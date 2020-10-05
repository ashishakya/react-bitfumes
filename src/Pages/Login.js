import React, {useState} from 'react'
import firebase from "../config/firebase";
import Redirect, {useHistory} from 'react-router-dom'


export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const handleSubmit = (event) => {

        if (isLoading) return;
        setIsLoading(true)
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setIsLoading(false)
                setError("Login Success");
                history.push('/')

            })
            .catch(function (error) {
                setIsLoading(false)
                // var errorCode = error.code;
                setError(error.message);
            });
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
        return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl bg-indigo-900 text-black">
                <form className="m-5 w-10/12" onSubmit={handleSubmit}>
                    {
                        error !== "" && <p style={{color: "red"}}>{error}</p>
                    }
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1>
                    <div className="w-full my-6">
                        <input type="email" onChange={handleEmailChange} placeholder="Email" className="p-2 rounded shadow w-full"/>
                    </div>
                    <div className="w-full my-6">
                        <input type="password" onChange={handlePasswordChange} placeholder="Password" className="p-2 rounded shadow w-full"/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-yellow-400 text-black">Login</button>
                    </div>
                </form>
            </div>
        </div>
        )
        }
