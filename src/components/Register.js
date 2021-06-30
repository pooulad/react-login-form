import React from 'react';
import "./Register.css";
import RegisterImage from "./login.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";




function Register() {
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
        if (values.password && values.confirmation) {
            if (values.password !== values.confirmation) {
                errors.confirmation = "Password not matched";
            }
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmation: '',
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
                    <input className="input" type="password" placeholder="confirm" id="confirmation" name="confirmation" onChange={formik.handleChange} value={formik.values.confirmation} required />
                    {formik.errors.confirmation ? <div>{formik.errors.confirmation}</div> : null}
                    <button className="btnSubmit" type="submit">Submit</button>
                    <Link className="btn" to="/">
                        <button className="btnBack">Back To Home</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
