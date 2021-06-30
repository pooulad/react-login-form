import React from 'react'
import "./Login.css";
import RegisterImage from "./login.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";




function Login() {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is Required';
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }
        if (!values.email) {
            errors.email = ' Email is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = "Password isRequired";
        } else if (values.length < 8) {
            errors.password = "Password must be 8 characters long.";
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            window.location.replace("/dashboard");
        },
    });
    return (
        <div className="register">
            <div className="form_image">
                <img src={RegisterImage} alt="picture_form" />
            </div>
            <div className="form_div">
                <form action="/dashboard" onSubmit={formik.handleSubmit} className="form">
                    <input className="input" type="text" placeholder="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    <input className="input" type="email" placeholder="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <input className="input" type="password" placeholder="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    <button className="btnSubmit" type="submit">Submit</button>
                    <Link className="btn" to="/">
                        <button className="btnBack">Back To Home</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
