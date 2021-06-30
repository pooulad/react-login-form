import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import mylogo from "./pooulad.png"

function Home() {
    return (
        <div className="home">
            <div className="header_logo">
                <img src={mylogo} alt="logo" />
            </div>
            <div className="main">
                <h1>HomePage</h1>
            </div>
            <div className="btns">
                <Link to="/login">
                    <button className="loginBtn">Login</button>
                </Link>
                <Link to="/register">
                    <button className="registerBtn">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
