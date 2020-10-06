import React, {useState} from 'react'
import firebase from "../config/firebase";
import Redirect, {useHistory} from 'react-router-dom'
import {useFormik} from "formik";
import * as Yup from 'yup';


export default function SignUp() {
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: value => {
            console.log('formik>>', value);
        },
        // validate: values => {
        //     const errors = {};
        //     if (!values.email) {
        //         errors.email = "Email field is required."
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = "Invalid email address."
        //     }
        //     if (!values.password) {
        //         errors.password = "Password field is required."
        //     } else if (values.password.length <= 6) {
        //         errors.password = "Password must be long than 6 letters."
        //     }
        //     return errors
        // }
        validationSchema: Yup.object({
            email:Yup.string().required("Email is required.").email("Invalid email."),
            password:Yup.string().required("Password is required.").min(6)
        })
    });

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl bg-indigo-900 text-black">
                <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">SignUp</h1>
                    <div className="w-full my-6">
                        <input type="email"
                               name="email"
                               placeholder="Email"
                               className="p-2 rounded shadow w-full"
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}
                               value={formik.values.email}/>
                        {
                            formik.touched.email && formik.errors.email ? <p className="text-white"> {formik.errors.email}</p> : ""
                        }
                    </div>
                    <div className="w-full my-6">
                        <input name="password"
                               type="password"
                               placeholder="Password"
                               className="p-2 rounded shadow w-full"
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}
                               value={formik.values.password}/>
                        {
                            formik.touched.password && formik.errors.password ? <p className="text-white">{formik.errors.password}</p> : ""
                        }
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-yellow-400 text-black">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
