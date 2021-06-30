import React from 'react';
import "./Dashboard.css";
import mylogo from "./pooulad.png";
import {Link} from "react-router-dom"

function Dashboard() {
    return (
        <div className="home">
            <div className="header_logo">
                <img src={mylogo} alt="logo" />
            </div>
            <div className="main">
                <h1>welcome to dashboard page</h1>
            </div>
            <Link to="/">
                <button className="btnBack">Home</button>
            </Link>
        </div>
    )
}

export default Dashboard
